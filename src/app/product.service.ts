import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any>{
    const url = 'assets/data/dummy-prod.json';
    return this.httpClient.get(url)
    .pipe(
      tap(
        () => console.log('Product fetched')
        ));
    }
}
