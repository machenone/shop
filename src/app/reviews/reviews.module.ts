import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews.component';
import { ReviewItemComponent } from './review-item/review-item.component';

const routes: Routes = [
{
	path: 'reviews',
	component: ReviewsComponent
}];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
	declarations: [ ReviewsComponent, ReviewItemComponent],
	exports: [ReviewsComponent],
})
export class ReviewsModule {}