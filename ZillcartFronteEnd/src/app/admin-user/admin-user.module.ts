import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserHomeComponent } from './admin-user-home/admin-user-home.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsModule } from '../products/products.module';
// import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';
// import { Ng2SearchPipe } from 'ng2-search-filter/src/ng2-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AdminUserHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    ProductsModule,
    Ng2SearchPipeModule 
    
    ],
  exports: [
    AdminUserHomeComponent,
  ]
})
export class AdminUserModule {

}
