import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css'],
})
export class HealthNewsComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  healthIcerik: any = [];
  pageHealth: number = 1;
  term = '';

  ngOnInit(): void {
    this._services.healthNews().subscribe((res) => {
      console.log(res);
      this.healthIcerik = res.articles;
      console.log(this.healthIcerik);
    });
  }
  onPageChange(event: any) {
    this.pageHealth = event;
  }
}
