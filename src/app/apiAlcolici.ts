import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiAlcoholic {

  private apiUrl =  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'; 
  
  constructor(private http: HttpClient) {}
  
  getDati() {
    return this.http.get(this.apiUrl);
  }
}

