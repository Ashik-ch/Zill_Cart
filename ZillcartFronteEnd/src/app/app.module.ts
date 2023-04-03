import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AdminUserHomeComponent } from './admin-user/admin-user-home/admin-user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';
import { AdminUserModule } from './admin-user/admin-user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductviewComponent } from './productview/productview.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsComponent } from './products/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    AdminHomeComponent,
    SuperAdminHomeComponent,
    CartComponent,
    NavbarComponent,
    ProductviewComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminUserModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
