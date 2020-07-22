import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {ProductsService} from 'src/app/services/products.service';
import {CartService} from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
find:FormGroup

resCatData;
cnames;
route;
joinbtn;
checkLogin;
myAcc;
myLogin;
totalProductsInCart;
Myorder;

resData;
cartData;
cost;

  constructor(private cser:CategoryService,private cartser:CartService,private router :Router,private fb:FormBuilder ,private pser :ProductsService) { }

  ngOnInit() {

    this.Validate();

    //mobile fetch
    this.fetchAppleMob();
    this.fetchSamMob();
    this.fetchMiMob();


    //laptop fetch
    this.fetchDellLap();
    this.fetchAsusLap();
    this.fetchAlienLap();
    this.fetchHpLap();

   
    if(localStorage.getItem('loginStat')=="true")
    {
     
      // this.joinbtn="Lout";
      this.checkLogin="true";
      this.myAcc=localStorage.getItem('username');
      this.myLogin="Logout";

      // adding count to cart on login
      let x=localStorage.getItem('email')
      this.cartser.fetchCartItems(x)
    .subscribe(res=>{
      console.log("res is below")
      console.log(res);
      this.resData=res;
      this.cartData=this.resData.cdata;
      console.log("no of products"+this.cartData.length);
      this.totalProductsInCart=this.cartData.length;
    })
      //
      this.totalProductsInCart=localStorage.getItem('cartItems');
      this.Myorder="true"
      this.cost=localStorage.getItem('cost')


    }
    else
    {
       this.myLogin="Login";
      this.myAcc="My Account";
      this.totalProductsInCart = 0;

      // this.joinbtn="JOIN";
      // this.checkLogin=undefined;

    }
    // fetching category all data on init to get categogry names
      // fetching latest products on init 
      this.cser.fetchCatData()
      .subscribe(res=>{
        this.resCatData=res;
        this.cnames=this.resCatData.cdata;
        console.log(this.cnames);
      })
    ///////




  }

  ///go to cart or redirect to login page

  cartRedirection(){
    let loginCheck=localStorage.getItem('loginStat');
    if(loginCheck=="true"){
       this.router.navigate(['/cart']);
    }
    else 
    {
      console.log("Redirecting to login page");
      console.log("redirecting to cart");
      Swal.fire({
        position: 'center',
        type: 'error',
        title: 'Your cart is empty , login to add products to cart',
        showConfirmButton: false
        
      })
      this.router.navigate(['/login']);
    }
  }



  logout(){
    if(localStorage.getItem('loginStat')=="true")
    {
    console.log("logging out");
    localStorage.setItem('loginStat',"false");
    localStorage.setItem('loginChecker',"false");
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('cartItems');

    
    this.checkLogin=undefined;
    
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Logging out please wait ...',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.setItem('reloadOnLogout',"true");
     this.router.navigate(['/']);
  }

  else{

    this.router.navigate(['/login']);
  }
  }


  goToProfile(){
    if(localStorage.getItem('loginStat')=="true")
    {
      console.log("redirecting to profile section");
      this.router.navigate(['/profile']);
    }
    else
    {
      console.log("redirecting to login page");
      this.router.navigate(['/login'])
    }
  }


  //validate search
  Validate(){
    this.find=this.fb.group({
      'keyword':['',Validators.required]
    })

  }

 // for searching
  search(){
    console.log("searching for");
    console.log(this.find.controls.keyword.value);
    localStorage.setItem('search',this.find.controls.keyword.value)
    if(localStorage.getItem('search'))
    {
      localStorage.setItem('searchNav',"true")
    this.router.navigate(['/feedback'])
    }
  }

  chat(){
    console.log("chat clicked")
    if(localStorage.getItem('loginStat')=="true")
      {this.router.navigate(['/chat'])}

    else{
      this.router.navigate(['/login'])
    }
  }

// fetching mobiles in header

appleMob;
appleMobRes;
  fetchAppleMob()
  {
   this.pser.fetchAppleMob()
   .subscribe(res=>{
    console.log("all apple mobiles")
    console.log(res)
    this.appleMobRes=res
    this.appleMob =this.appleMobRes.appleMob
    console.log(this.appleMob)
   }) 
  }


  samMob;
samMobRes;
  fetchSamMob()
  {
   this.pser.fetchSamMob()
   .subscribe(res=>{
    console.log("all samsung mobiles")
    console.log(res)
    this.samMobRes=res
    this.samMob =this.samMobRes.samMob
    console.log(this.samMob)
   }) 
  }


    miMob;
miMobRes;
  fetchMiMob()
  {
   this.pser.fetchMiMob()
   .subscribe(res=>{
    console.log("all samsung mobiles")
    console.log(res)
    this.miMobRes=res
    this.miMob =this.miMobRes.miMob
    console.log(this.miMob)
   }) 
  }

// fetching laptops in header

  dellLap;
  dellLapRes;
  fetchDellLap()
  {
   this.pser.fetchDellLap()
   .subscribe(res=>{
    console.log("all dell laptops")
    console.log(res)
    this.dellLapRes=res
    this.dellLap =this.dellLapRes.dellLap
    console.log(this.dellLap)
   }) 
  }


    asusLap;
  asusLapRes;
  fetchAsusLap()
  {
   this.pser.fetchAsusLap()
   .subscribe(res=>{
    console.log("all dell laptops")
    console.log(res)
    this.asusLapRes=res
    this.asusLap =this.asusLapRes.asusLap
    console.log(this.asusLap)
   }) 
  }

      hpLap;
  hpLapRes;
  fetchHpLap()
  {
   this.pser.fetchHpLap()
   .subscribe(res=>{
    console.log("all dell laptops")
    console.log(res)
    this.hpLapRes=res
    this.hpLap =this.hpLapRes.hpLap
    console.log(this.hpLap)
   }) 
  }

        alienLap;
  alienLapRes;
  fetchAlienLap()
  {
   this.pser.fetchAlienLap()
   .subscribe(res=>{
    console.log("all dell laptops")
    console.log(res)
    this.alienLapRes=res
    this.alienLap =this.alienLapRes.alienLap
    console.log(this.alienLap)
   }) 
  }




}
