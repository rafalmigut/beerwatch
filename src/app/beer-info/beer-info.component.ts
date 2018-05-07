import {Component, Input, OnInit} from '@angular/core';
import {BeersService} from '../beers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.css']
})
export class BeerInfoComponent implements OnInit {
  @Input('beerInfo') beerInfo;
  similarBeerList;
  id: number;
  constructor(private beerService: BeersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.beerService.getSimilarBeers(this.beerInfo.ibu).subscribe(
      data => { this.similarBeerList = data; console.log(this.similarBeerList); }
    );

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.beerInfo = this.beerService.getBeer(this.id);
    //   }
    // );
  }

}
