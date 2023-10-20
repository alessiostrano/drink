import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';


@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePage implements OnInit {
  dati: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}



