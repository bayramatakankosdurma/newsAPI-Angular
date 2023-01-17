import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiServicesService } from './service/news-api-services.service';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralNewsComponent } from './general-news/general-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { HakkimdaComponent } from './hakkimda/hakkimda.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessNewsComponent,
    EntertainmentComponent,
    GeneralNewsComponent,
    HealthNewsComponent,
    ScienceNewsComponent,
    TechnologyNewsComponent,
    HakkimdaComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbCarouselModule,
  ],
  providers: [NewsApiServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
