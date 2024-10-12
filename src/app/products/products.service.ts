import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products/';
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
