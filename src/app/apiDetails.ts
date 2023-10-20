import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiDetails {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  
  constructor(private http: HttpClient) {}

  getDati(id: string) {
    // Costruisci l'URL dell'API utilizzando l'ID
    const apiUrl = `${this.baseUrl}lookup.php?i=${id}`;
    return this.http.get(apiUrl);
  }
}
