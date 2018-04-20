import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
{
	path: 'catalog',
	component: CatalogComponent
},
{
	path: 'product-page/:id',
	component: ProductPageComponent
}];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
	declarations: [ CatalogComponent, ProductComponent, ProductPageComponent],
	exports: [CatalogComponent, ProductPageComponent]
})
export class CatalogModule {}