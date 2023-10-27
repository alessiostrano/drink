import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePage implements OnInit {
  dati:any = [];
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(private apiService: ApiService, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.effettuaChiamataAPI();
  }
  
  effettuaChiamataAPI(lettera: string = 'a') {
    this.apiService.searchByF(lettera).subscribe((data) => {
      this.dati = data;
      this.changeDetectorRef.detectChanges();
    });
  }
  
}




