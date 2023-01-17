import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}
  entertainmentIcerik: any = [];
  pageEntertainment: number = 1;
  term = '';

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((res) => {
      console.log(res);
      this.entertainmentIcerik = res.articles;
      console.log(this.entertainmentIcerik);
    });
  }
  onPageChange(event: any) {
    this.pageEntertainment = event;
  }
}
