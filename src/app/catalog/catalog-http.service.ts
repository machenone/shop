import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class CatalogHttpService{
  
    constructor(private http: HttpClient){ }
      
    getCatalog(){
        return this.http.get('http://localhost:3000/catalog')
    }
    getProduct(id:number){
        return this.http.get('http://localhost:3000/catalog/' + id)
    }
}