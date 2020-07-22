import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

	url = "http://localhost:7788/api/";

  constructor(private http : HttpClient) { }

  getOrders()
  {
  	return this.http.get(this.url+'get_orders');
  }

  markAsDelivered(id)
  {
  	return this.http.post(this.url+"mark_as_delivered",id);
  }
}
