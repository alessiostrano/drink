import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class apiIngredienti {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  
  constructor(private http: HttpClient) {}

  getDati(nome: string) {
    // Costruisci l'URL dell'API utilizzando l'ID
    const apiUrl = `${this.baseUrl}filter.php?i=${nome}`;
    return this.http.get(apiUrl);
  }
}
