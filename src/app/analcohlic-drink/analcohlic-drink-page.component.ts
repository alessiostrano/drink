import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'Analcohlic',
  templateUrl: './analcohlic-drink-page.component.html',
  styleUrls: ['./analcohlic-drink-page.component.css']
})

export class Analcohlic implements OnInit {
  dati: any

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAnalcoholic().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}



