import { Component, OnInit } from '@angular/core';
import { CatalogHttpService } from './catalog-http.service';
import { Product } from './product/product';

@Component({
	selector: 'catalog',
	templateUrl: 'catalog.component.html',
	providers: [CatalogHttpService]
})
export class CatalogComponent implements OnInit {
	catalog: Product[] = [];
 
      
    constructor(private catalogHttpService: CatalogHttpService){}
      
    ngOnInit(){
        this.catalogHttpService.getCatalog().subscribe(data => this.catalog=data.reverse());  
    }
}