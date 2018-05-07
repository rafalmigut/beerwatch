import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import {BeersService} from './beers.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BeerInfoComponent } from './beer-info/beer-info.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent,
    BeerInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [BeersService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
