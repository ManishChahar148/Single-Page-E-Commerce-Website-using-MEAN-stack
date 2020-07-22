import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


orderId;
resData;
orderDataNotDelivered = [];
orderDataDelivered = [];
date_ordered;
deliveryAdd;
resAddData;
deliveryDate;	

  constructor(private oser:OrderService ) { }

  ngOnInit() {

  	this.oser.getOrders().
  	subscribe(res=>{
  		console.log(res);
  		this.resData=res;
        console.log("resData.data=")
        console.log(this.resData.data)
  			this.resData=this.resData.data
        let count_notDelivered=0;
        let count_delivered=0;
        for(let i=0;i<this.resData.length;i++)
        {
          for(let j=0;j<this.resData[i].oData.length;j++)
          {
            if(this.resData[i].delivery_status == false)
            {
            this.orderDataNotDelivered[count_notDelivered]=this.resData[i].oData[j];
            count_notDelivered++;
            }
            else
            {
              this.orderDataDelivered[count_delivered]=this.resData[i].oData[j];
            count_delivered++;
            }
          }
        }

  			// this.orderData=this.resData.oData;
  			
  	})
  }


  markAsDelivered(id)
  {
  	console.log(id);
  	let pid={'id':id}
  	this.oser.markAsDelivered(pid).
  	subscribe(res=>
  	{
  		console.log(res);
  	})
  }



}
