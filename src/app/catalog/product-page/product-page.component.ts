import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { CatalogHttpService } from './../catalog-http.service';
import { Product } from './../product/product';

@Component({
	selector: 'product-page',
	templateUrl: 'product-page.component.html',
	providers: [CatalogHttpService]
})
export class ProductPageComponent implements OnInit {
	private id: number;
	private product: Product;
	private routeSubscription: Subscription;
    constructor(private route: ActivatedRoute, private catalogHttpService: CatalogHttpService){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
        }

	ngOnInit() {
		this.catalogHttpService.getProduct(this.id).subscribe((data:Product) => this.product=data);
	}
}