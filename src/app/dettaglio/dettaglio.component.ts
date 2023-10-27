import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "dettaglio",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.css"],
})
export class Dettaglio implements OnInit {

  baseimg:string = 'https://www.thecocktaildb.com/images/ingredients/'
 
  id: any;
  dati: any;

  ingredients: string[] = [];
  measure: string[] = [];
  immagini: string[] = [];
  datiSommati: any[] = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.apiService.getDetail(this.id).subscribe((data) => {
        this.dati = data;
  
        if (!this.dati || !this.dati.drinks || this.dati.drinks.length === 0) {
          this.router.navigate(['/404-not-found']);
          return;
        }
  
        for (let i = 1; i <= 15; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
          if (this.dati.drinks[0][ingredientKey]) {
            const img: string = `${this.baseimg}${this.dati.drinks[0][ingredientKey]}${'.png'}`
            this.immagini.push(img);
            this.ingredients.push(this.dati.drinks[0][ingredientKey]);
          }
          if (this.dati.drinks[0][measureKey]) {
            this.measure.push(this.dati.drinks[0][measureKey]);
          }
        }
        for (let i = 0; i < this.ingredients.length; i++) {
          this.datiSommati.push({
            ingredients: this.ingredients[i],
            immagini: this.immagini[i],
            measure: this.measure[i]
          });
        }
      });
    });
  }
  

}
