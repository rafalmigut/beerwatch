import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BeersService {
  constructor(private http: HttpClient) {}

  getBeers(perPage: number = 10) {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`);
  }
  getBeersPages(page: number = 1) {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
  }

  getBeer(id: number) {
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`);
  }

  getSimilarBeers(ibu: number) {
    if (ibu === null) {
      ibu = 0;
    }
    return this.http.get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu.toFixed(0)}&per_page=3`);
  }
}
