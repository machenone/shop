import { Input, Component, OnInit } from '@angular/core';

@Component({
	selector: 'product',
	templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
	@Input() name: string;
	@Input() shortDesc: string;
	@Input() fullDesc: string;
	@Input() id: number;
	constructor() {}

	ngOnInit() {
		
	}
}