import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css'],
})
export class GeneralNewsComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  generalIcerik: any = [];
  pageGeneral: number = 1;
  term = '';

  ngOnInit(): void {
    this._services.generalNews().subscribe((res) => {
      console.log(res);
      this.generalIcerik = res.articles;
      console.log(this.generalIcerik);
    });
  }
  onPageChange(event: any) {
    this.pageGeneral = event;
  }
}
