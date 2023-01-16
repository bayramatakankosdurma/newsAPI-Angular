import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiServicesService {
  constructor(private _http: HttpClient) {}

  //ana sayfa
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971';

  //kategoriler

  //business
  businessUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=676f017549224f488970f1835f9db971';

  //entertainment
  entertainmentUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=676f017549224f488970f1835f9db971';

  //general
  generalUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=676f017549224f488970f1835f9db971';

  //health
  healthUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=676f017549224f488970f1835f9db971';

  //science
  scienceUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=676f017549224f488970f1835f9db971';

  //technology
  technologyUrl =
    'https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=676f017549224f488970f1835f9db971';

  header(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessUrl);
  }

  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentUrl);
  }

  generalNews(): Observable<any> {
    return this._http.get(this.generalUrl);
  }

  healthNews(): Observable<any> {
    return this._http.get(this.healthUrl);
  }

  scienceNews(): Observable<any> {
    return this._http.get(this.scienceUrl);
  }

  technologyNews(): Observable<any> {
    return this._http.get(this.technologyUrl);
  }
}
