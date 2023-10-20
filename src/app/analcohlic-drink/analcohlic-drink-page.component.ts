import { Component, OnInit } from '@angular/core';
import { ApiAnalcoholic } from '../apiAnalcolici';


@Component({
  selector: 'Analcohlic',
  templateUrl: './analcohlic-drink-page.component.html',
  styleUrls: ['./analcohlic-drink-page.component.css']
})

export class Analcohlic implements OnInit {
  dati: any;

  constructor(private apiService: ApiAnalcoholic) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}



