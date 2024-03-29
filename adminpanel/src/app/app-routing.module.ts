import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DefaultComponent} from './dashboard/default/default.component';
import {DashbrdGuard} from './guards/dashbrd.guard';
import { CategoryComponent } from './dashboard/category/category.component';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { EditcategoryComponent } from './dashboard/category/editcategory/editcategory.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { AddproductComponent } from './dashboard/products/addproduct/addproduct.component';
import { EditproductComponent } from './dashboard/products/editproduct/editproduct.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ReplyComponent } from './dashboard/reply/reply.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[DashbrdGuard] ,children:[
		{path:'',component:DefaultComponent},
		{path:'category',component:CategoryComponent},
		{path:'addcategory',component:AddcategoryComponent},
		{path:'products',component:ProductsComponent},
		{path:'feedback',component:FeedbackComponent},
		{path:'editcategory/:cid',component:EditcategoryComponent},
		{path:'changepassword',component:ChangepasswordComponent},
		{path:'addproduct',component:AddproductComponent},
		{path:'editproduct/:pid',component:EditproductComponent},
		{path:'chat',component:ChatComponent},
		{path:'reply',component:ReplyComponent},
		{path: 'orders',component:OrdersComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
