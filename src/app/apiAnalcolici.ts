import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiAnalcoholic {

  private apiUrl =  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'; 
  
  constructor(private http: HttpClient) {}
  
  getDati() {
    return this.http.get(this.apiUrl);
  }
}

