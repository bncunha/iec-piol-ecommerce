import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateOrderRequest } from './requests/CreateOrderRequest';
import { CreateOrderResponse } from './responses/CreateOrderResponse';
import { GetOrderResponse } from './responses/GetOrderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order: CreateOrderRequest): Observable<CreateOrderResponse> {
    return this.http.post<CreateOrderResponse>(`${environment.apiEndpoint}/Order`, order);
  }

  getById(id: string): Observable<GetOrderResponse> {
    return this.http.get<GetOrderResponse>(`${environment.apiEndpoint}/Order/${id}`);
  }
}
