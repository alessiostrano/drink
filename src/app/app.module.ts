import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePage } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404 } from './page-404/page-404.component';
import { Dettaglio } from './dettaglio/dettaglio.component';
import { HttpClientModule } from '@angular/common/http';
import { Alcohlic } from './alcohlic-drink/alcohlic-drink-page.component';
import { Analcohlic } from './analcohlic-drink/analcohlic-drink-page.component';
import { Ingrediente } from './ingrediente/ingrediente.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomePage,
    Page404,
    Dettaglio,
    Alcohlic,
    Analcohlic,
    Ingrediente
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/