import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralNewsComponent } from './general-news/general-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { HakkimdaComponent } from './hakkimda/hakkimda.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'business', component: BusinessNewsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralNewsComponent },
  { path: 'health', component: HealthNewsComponent },
  { path: 'science', component: ScienceNewsComponent },
  { path: 'technology', component: TechnologyNewsComponent },
  { path: 'hakkimda', component: HakkimdaComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
