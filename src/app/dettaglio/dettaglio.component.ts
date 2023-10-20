import { Component, OnInit } from "@angular/core";
import { ApiDetails } from "../apiDetails";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "dettaglio",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.css"],
})
export class Dettaglio implements OnInit {
  id: any;
  dati: any;

  ingredients: string[] = [];
  measure: string[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiDetails, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.apiService.getDati(this.id).subscribe((data) => {
        this.dati = data;

        if (!this.dati || !this.dati.drinks || this.dati.drinks.length === 0) {
          this.router.navigate(['/404-not-found']);
          return;
        }

        console.log(this.dati);

        for (let i = 1; i <= 15; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
          if (this.dati.drinks[0][ingredientKey]) {
            this.ingredients.push(this.dati.drinks[0][ingredientKey]);
          }
          if (this.dati.drinks[0][measureKey]) {
            this.measure.push(this.dati.drinks[0][measureKey]);
          }
        }
        console.log(this.ingredients);
        console.log(this.measure);
      });
    });
  }
}
