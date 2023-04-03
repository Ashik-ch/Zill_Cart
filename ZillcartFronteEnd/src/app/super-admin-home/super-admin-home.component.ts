import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-super-admin-home',
  templateUrl: './super-admin-home.component.html',
  styleUrls: ['./super-admin-home.component.css']
})
export class SuperAdminHomeComponent {

  elements: any
  constructor(private service: ServiceService) { }


  ngOnInit() {
    this.productlist()
  }


  productlist() {
    this.service.productlist()
      .subscribe((result) => {
        this.elements = result
        this.elements = this.elements.data
        console.log("Res", this.elements);
      })
  }

  verifybtn(product: any) {
    this.service.verifyProduct(product)
      .subscribe(() => {
        this.productlist();
      });
  }

  

  deleteProduct(product: any) {
    const productId = product._id;
    console.log("productId", productId);
    this.service.deleteProducts(productId)
    .subscribe((response) => {
      console.log("Response", response);
      // Update the product list
      this.productlist();
    });
  }




}
