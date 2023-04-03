import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {


  name: any;
  description: any
  cost: any
  gst: any
  totalprice: any
  img: any
  status: any
  elements: any
  username: any
  searchTerm: any;


  constructor(private service: ServiceService) { }


  ngOnInit() {
    this.productlist()
    this.username = JSON.parse(localStorage.getItem("username") || "")
  }




  productlist() {
    this.service.productlist()
      .subscribe((result) => {
        this.elements = result

        this.elements = this.elements.data
        console.log("Res", this.elements);

      })
  }


  // addproduct() {
  //   this.service.addproduct(this.name, this.description, this.cost, this.gst, this.totalprice, this.img, this.status)
  //     .subscribe((result: any) => {
  //       console.log("resultadprod", result)
  //       alert(result.message)
  //       location.reload()
  //     })
  // }



  approvebtn(product: any) {
    this.service.approveProduct(product)
      .subscribe(() => {
        this.productlist();
      });
  }
  rejectProduct(product: any) {
    this.service.rejectProduct(product)
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



