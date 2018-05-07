import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeerListComponent} from './beer-list/beer-list.component';
import {BeerInfoComponent} from './beer-info/beer-info.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/beerlist', pathMatch: 'full'},
  {path: 'beerlist', pathMatch: 'full', component: BeerListComponent, children: [
      {path: '', component: BeerListComponent},
      {path: ':id', component: BeerInfoComponent}
    ]},
  {path: 'details/:id', component: BeerInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
