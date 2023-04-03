import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

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

  filteredElements: any
  username: any


  constructor(private service: ServiceService) { }

  
  addproduct() {
    this.service.addproduct(this.name, this.description, this.cost, this.gst, this.totalprice, this.img, this.status)
      .subscribe((result: any) => {
        console.log("resultadprod", result)
        alert(result.message)
        location.reload()
      })
  }

 

}
