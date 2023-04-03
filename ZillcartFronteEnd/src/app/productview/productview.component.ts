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
    this.AR.params
      .subscribe((result) => {
        this.parmsid = result
        console.log("params", this.parmsid);
      })

      this.service.productview(this.parmsid)
      .subscribe((result) => {
        this.elements = result // Access the data array inside the result object
        console.log("elem", this.elements);
      });


    // this.service.productview(this.parmsid)
    //   .subscribe((result) => {
    //     console.log("Res", result);
    //     this.elements = result
    //     console.log("elem", this.elements);
        // alert(this.elements.message)
        // this.elements = this.elements.data
        // this.jobname = this.elements[0]['jobname']
        // this.company = this.elements[0]['company']
        // console.log(`jobname1 ${this.jobname}, company ${this.company}`);
      // })
  }






}
