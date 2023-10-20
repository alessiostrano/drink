import { Component, OnInit } from "@angular/core";
import { apiIngredienti } from "../apiIngredienti";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ingrediente",
  templateUrl: "./ingrediente.component.html",
  styleUrls: ["./ingrediente.component.css"],
})
export class Ingrediente implements OnInit {
  nome: any;
  dati: any;

  ingredients: string[] = [];
  measure: string[] = [];

  constructor(private route: ActivatedRoute, private apiService: apiIngredienti,private router: Router
    ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.nome = params.get("nome");
      this.apiService.getDati(this.nome).subscribe((data) => {
        this.dati = data;
        if (!this.dati || !this.dati.drinks || this.dati.drinks.length === 0) {
          this.router.navigate(['/404-not-found']);
          return;
        }
        console.log(this.dati);
      });
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
