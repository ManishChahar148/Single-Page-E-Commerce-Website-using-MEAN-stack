import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url="http://localhost:7788/api/";
  constructor(private http:HttpClient) { }
  fetchLatestProducts(){
    return this.http.get(this.url+'fetch_latest_products');
  }

  fetchProWithCname(cname){
    return this.http.get(this.url+'fetch_pro_with_cname/'+cname);
  }

  fetchProWithId(id)
  {
    return this.http.get(this.url+'fetch_pro_with_id/'+id);
  }

  //insert item to cart
  addToCart(data){
    return this.http.post(this.url+'add_to_cart',data);
  }

// fetching mobiles in header
  fetchAppleMob()
  {
    return this.http.get(this.url+"fetch_apple_mob");
  }

  fetchSamMob()
  {
    return this.http.get(this.url+"fetch_samsung_mob");
  }

    fetchMiMob()
  {
    return this.http.get(this.url+"fetch_mi_mob");
  }

//fetching laptops in header

  fetchDellLap()
  {
     return this.http.get(this.url+"fetch_dell_lap");
  }

    fetchHpLap()
  {
     return this.http.get(this.url+"fetch_hp_lap");
  }

    fetchAsusLap()
  {
     return this.http.get(this.url+"fetch_asus_lap");
  }

    fetchAlienLap()
  {
     return this.http.get(this.url+"fetch_alien_lap");
  }





}
