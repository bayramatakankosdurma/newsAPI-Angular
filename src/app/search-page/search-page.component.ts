import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(
    private _services: NewsApiServicesService,
    private activatedRoute: ActivatedRoute
  ) {}

  searchIcerik: any = [];
  pageSearch: number = 1;
  searchText: any;
  term = '';
  queryParam: any;

  ngOnInit() {
    this.searchText = this.activatedRoute.params['searchText'];
    this.term = this.searchText;
    this._services.header().subscribe((res) => {
      console.log(res);
      this.searchIcerik = res.articles;
      console.log(this.searchIcerik);
    });
  }

  onPageChange(event: any) {
    this.pageSearch = event;
  }
}
