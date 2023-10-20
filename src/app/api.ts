import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private apiUrl =  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c'; 
  
  constructor(private http: HttpClient) {}
  
  getDati() {
    return this.http.get(this.apiUrl);
  }
}

