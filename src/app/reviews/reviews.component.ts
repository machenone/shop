import { Component, OnInit } from '@angular/core';
import { ReviewsHttpService } from './reviews-http.service';
import { Review } from './review';

import { ReviewItemComponent } from './review-item/review-item.component';

@Component({
	selector: 'reviews',
	templateUrl: 'reviews.component.html',
	providers: [ReviewsHttpService]
})
export class ReviewsComponent implements OnInit {
	reviews: Review[] = [];
 
      
    constructor(private reviewsHttpService: ReviewsHttpService){}
      
    ngOnInit(){
        this.reviewsHttpService.getData().subscribe(data => this.reviews=data.reverse());  
    }
}