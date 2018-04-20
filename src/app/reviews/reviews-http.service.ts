import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class ReviewsHttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('http://localhost:3000/reviews')
    }
}