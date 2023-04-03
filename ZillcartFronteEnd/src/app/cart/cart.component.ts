import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  elements: any
  element: any
  username: any
  sum: any
  items: any
  name: any
  constructor(private service: ServiceService, private AR: ActivatedRoute, private route: Router) { }


  ngOnInit() {

    this.AR.params
      .subscribe((result) => {
        this.username = result['username']
        console.log("paramsemail", this.username);
      })
    this.cart(this.username)




  }


  cart(username: any) {
    this.service.cart(this.username)
      .subscribe((result: any) => {
        console.log("resfun", result);
        this.elements = result.data
        console.log("list", this.elements);
        this.element = this.elements.map((item: any) => item.totalPrice);
        console.log("mapped", this.element);

        let sum = 0;
        for (let i = 0; i < this.element.length; i++) {
          sum += this.element[i];
        }

        this.sum = Math.ceil(sum)



        console.log("sum", this.sum);
        console.log("lenght", this.items = this.element.length);


      })
  }


  // deleteCartItem() {
  //   this.cartService.deleteCartItem(this.username, this.name)
  //     .subscribe(data => {
  //       console.log(data);
  //       // handle success response here
  //     }, error => {
  //       console.log(error);
  //       // handle error response here
  //     });
  // }


  remove(item: any) {
    const items = item;
    console.log("items", items);
    // console.log("productId", productId);
    this.service.cartdelete(item.username, item.name)
      .subscribe((response) => {
        console.log(item.username, item.name);
        console.log("Response", response);
        location.reload()


      }, (error: any) => {
        console.log(error);

      })

  }







  order() {
    this.service.clearCart(this.username)
      .subscribe((data: any) => {
        alert("Your item is on the way")
        setTimeout(() => {
          this.route.navigateByUrl('adminuserhome');
        }, 2000);
      })




  }




}
