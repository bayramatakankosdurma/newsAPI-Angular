import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css'],
})
export class BusinessNewsComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  businessIcerik: any = [];
  pageBusiness: number = 1;

  ngOnInit(): void {
    this._services.businessNews().subscribe((res) => {
      console.log(res);
      this.businessIcerik = res.articles;
      console.log(this.businessIcerik);
    });
  }

  onPageChange(event: any) {
    this.pageBusiness = event;
  }
}
