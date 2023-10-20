import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomePage } from './home-page/home-page.component';
import { Page404 } from './page-404/page-404.component';
import { Dettaglio } from './dettaglio/dettaglio.component';
import { Alcohlic } from './alcohlic-drink/alcohlic-drink-page.component';
import { Analcohlic } from './analcohlic-drink/analcohlic-drink-page.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'alcoholic', component: Alcohlic },
  { path: 'analcoholic', component: Analcohlic },
  { path: 'dettaglio/:id', component: Dettaglio },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404 },  
];// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }