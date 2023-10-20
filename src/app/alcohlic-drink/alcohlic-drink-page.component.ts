import { Component, OnInit } from '@angular/core';
import { ApiAlcoholic } from '../apiAlcolici';


@Component({
  selector: 'Alcohlic',
  templateUrl: './alcohlic-drink-page.component.html',
  styleUrls: ['./alcohlic-drink-page.component.css']
})

export class Alcohlic implements OnInit {
  dati: any;

  constructor(private apiService: ApiAlcoholic) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}



