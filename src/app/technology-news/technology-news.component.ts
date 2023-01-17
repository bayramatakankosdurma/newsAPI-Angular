import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-technology-news',
  templateUrl: './technology-news.component.html',
  styleUrls: ['./technology-news.component.css'],
})
export class TechnologyNewsComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  technologyIcerik: any = [];
  pageTechnology: number = 1;
  term = '';

  ngOnInit(): void {
    this._services.technologyNews().subscribe((res) => {
      console.log(res);
      this.technologyIcerik = res.articles;
      console.log(this.technologyIcerik);
    });
  }
  onPageChange(event: any) {
    this.pageTechnology = event;
  }
}
