import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _services: NewsApiServicesService) {}

  headerIcerik: any = [];
  pageHeader: number = 1;

  ngOnInit(): void {
    this._services.header().subscribe((res) => {
      console.log(res);
      this.headerIcerik = res.articles;
      console.log(this.headerIcerik);
    });
  }

  onPageChange(event: any) {
    this.pageHeader = event;
  }
}
