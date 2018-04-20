import { Input, Component, OnInit } from '@angular/core';

@Component({
	selector: 'review-item',
	templateUrl: 'review-item.component.html'
})
export class ReviewItemComponent implements OnInit {
	@Input() userName: string;
	@Input() reviewText: string;
	constructor() {}

	ngOnInit() {
		
	}
}