import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import {DashbrdGuard} from './guards/dashbrd.guard';
import { CategoryComponent } from './dashboard/category/category.component';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { EditcategoryComponent } from './dashboard/category/editcategory/editcategory.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { AddproductComponent } from './dashboard/products/addproduct/addproduct.component';
import { EditproductComponent } from './dashboard/products/editproduct/editproduct.component';
import { RemoveduplicatePipe } from './pipes/removeduplicate.pipe';
import { ReadmorePipe } from './pipes/readmore.pipe';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ReplyComponent } from './dashboard/reply/reply.component';
import { OrdersComponent } from './dashboard/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    CategoryComponent,
    AddcategoryComponent,
    ProductsComponent,
    FeedbackComponent,
    EditcategoryComponent,
    ChangepasswordComponent,
    AddproductComponent,
    EditproductComponent,
    RemoveduplicatePipe,
    ReadmorePipe,
    ChatComponent,
    ReplyComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DashbrdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
