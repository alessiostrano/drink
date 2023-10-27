import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'Alcohlic',
  templateUrl: './alcohlic-drink-page.component.html',
  styleUrls: ['./alcohlic-drink-page.component.css']
})

export class Alcohlic implements OnInit {
  dati: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlcoholic().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}



