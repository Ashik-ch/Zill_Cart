import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.component.html',
  styleUrls: ['./admin-user-home.component.css']
})
export class AdminUserHomeComponent {


  name: any;
  description: any
  cost: any
  gst: any
  totalprice: any
  img: any
  status: String = 'Pending'

  elements: any
  element: any
  array: any

  username: any

  searchTerm: any;

  constructor(private service: ServiceService, private rout: Router) { }


  ngOnInit() {
    this.productlist()
    this.username = JSON.parse(localStorage.getItem("username") || "")
  }


  addproduct() {
    this.service.addproduct(this.name, this.description, this.cost, this.gst, this.totalprice, this.img, this.status)
      .subscribe((result: any) => {
        console.log("resultadprod", result)
        alert(result.message)
        // location.reload()
      })
  }



  productlist() {
    this.service.productlist()
      .subscribe((result) => {
        this.array = result
        this.element = this.array.data;
        this.elements = this.element.filter((item: any) => item.status === 'Verified');

      })
  }

  buy(t: any) {
    this.service.buy(this.username, t.name, t.description, t.cost, t.gst, t.totalPrice, t.img)
      .subscribe((result: any) => {
        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      })
  }



}


