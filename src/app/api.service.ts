import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Drink {}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = "https://www.thecocktaildb.com/api/json/v1/1/"

  private searchByLetterURL = 'search.php?f=';
  private DetailsURL = 'lookup.php?i=';
  private AnalcoholicURL =  'filter.php?a=Non_Alcoholic'; 
  private AlcoholicURL =  'filter.php?a=Alcoholic'; 
  private IngredientsURL =  'filter.php?i='; 

  constructor(private http: HttpClient) {}

  searchByF(letter: string) {
    const searchByLetter = `${this.baseURL}${this.searchByLetterURL}${letter}`
    return this.http.get(searchByLetter) as Observable<Drink[]>;
  }
  getDetail(id: string) {
    const apiUrl = `${this.baseURL}${this.DetailsURL}${id}`;
    return this.http.get(apiUrl);
  }
  getAnalcoholic() {
    return this.http.get(`${this.baseURL}${this.AnalcoholicURL}`);
  }
  getAlcoholic() {
    return this.http.get(`${this.baseURL}${this.AlcoholicURL}`);
  }
  getIngredients(nome: string) {
    const apiUrl = `${this.baseURL}${this.IngredientsURL}${nome}`;
    return this.http.get(apiUrl);
  }
}

