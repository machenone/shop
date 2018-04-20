import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { AccountModule } from './account/account.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CatalogModule } from './catalog/catalog.module';

const appRoutes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'reviews', loadChildren: 'app/reviews/reviews.module#ReviewsModule'},
  {path: 'catalog', loadChildren: 'app/catalog/catalog.module#CatalogModule'},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'}

];
@NgModule({
  declarations: [
    IntroComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    ReviewsModule,
    CatalogModule,
    AccountModule,
    RouterModule.forRoot(appRoutes)
  ],
	exports: [RouterModule]

})
export class AppRoutingModule {

}