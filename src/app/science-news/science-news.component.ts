import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css'],
})
export class ScienceNewsComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  scienceIcerik: any = [];
  pageScience: number = 1;

  ngOnInit(): void {
    this._services.scienceNews().subscribe((res) => {
      console.log(res);
      this.scienceIcerik = res.articles;
      console.log(this.scienceIcerik);
    });
  }
  onPageChange(event: any) {
    this.pageScience = event;
  }
}
