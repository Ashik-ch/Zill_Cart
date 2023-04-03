import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {


  elements: any
  parmsid: any
  username: any


  constructor(private service: ServiceService, private AR: ActivatedRoute, private rout: Router) { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem("username") || "")
    
    this.AR.params
      .subscribe((result) => {
        this.parmsid = result["name"]
        console.log("params", this.parmsid);
      })

    this.service.productview(this.parmsid)
      .subscribe((result) => {
        this.elements = result.data // Access the data array inside the result object
        console.log("elem", this.elements);
      });

  }
  buy(t: any) {
    this.service.buy(this.username, t.name, t.description, t.cost, t.gst, t.totalPrice, t.img)
      .subscribe((result: any) => {
        console.log("Res", result)
        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      })
  }







}
