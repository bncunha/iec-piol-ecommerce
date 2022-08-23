import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetProductByIdResponse } from './responses/GetProductByIdResponse';
import { GetProductListResponse } from './responses/GetProductListResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<GetProductListResponse>(`${environment.apiEndpoint}/Product`);
  }

  getById(id: string) {
    return this.http.get<GetProductByIdResponse>(`${environment.apiEndpoint}/Product/${id}`);
  }
}
