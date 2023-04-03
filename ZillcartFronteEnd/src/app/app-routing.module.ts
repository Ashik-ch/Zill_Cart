import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserHomeComponent } from './admin-user/admin-user-home/admin-user-home.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
// import { ProductsComponent } from './products/products/products.component';
import { ProductviewComponent } from './productview/productview.component';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'superadminhome', component: SuperAdminHomeComponent },
  { path: 'adminuserhome', component: AdminUserHomeComponent },
  { path: 'cart/:username', component: CartComponent },
  // { path: 'products', component: ProductsComponent },

  { path: 'adminuserhome/:name', component: ProductviewComponent },

  // {
  //   path: 'adminuserhome',
  //   loadChildren: () => import('./admin-user/admin-user.module')
  //     .then(mdl => mdl.AdminUserModule)
  // },

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
