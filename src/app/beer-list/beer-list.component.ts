import { Component, OnInit } from '@angular/core';
import {BeersService} from '../beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beerList;
  perPage = 20;
  page = 2;
  // infScrollContainer = document.getElementsByTagName('app-beer-list');
  infScrollContainer = document.getElementById('scrollMe');

  constructor(private beerService: BeersService) { }

  ngOnInit() {
    this.beerService.getBeers().subscribe(
      data => { this.beerList = data; }
    );
  }

  onScroll() {
    console.log('skroluje');
    this.beerService.getBeersPages(this.page).subscribe(
      data => { console.log(this.beerList); console.log(data); this.beerList = this.beerList.concat(data); console.log(this.beerList); }
    );
    this.page++;
  }

}
