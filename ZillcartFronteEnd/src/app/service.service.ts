import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  login(username: any, password: any) {
    const body = { username, password }
    return this.http.post('http://localhost:3000/login', body)
  }

  addproduct(name: any, description: any, cost: any, gst: any, totalprice: any, img: any, status: any) {
    const body = {
      name, description, cost, gst, totalprice, img, status
    }
    return this.http.post('http://localhost:3000/product', body)
  }


  productlist() {
    return this.http.get('http://localhost:3000/product')
  }



  approveProduct(product: any) {
    const body = {
      name: product.name,
      status: 'Approved'
    };
    return this.http.put('http://localhost:3000/approvestatus', body);
  }

  verifyProduct(product: any) {
    const body = {
      name: product.name,
      status: 'Verified'
    };
    return this.http.put('http://localhost:3000/verifystatus', body);
  }

  // deleteProduct(product: any) {
  //   const body = { name: product.name, status: 'Verified' }
  //   console.log("body", body);

  //   return this.http.delete('http://localhost:3000/delete', body);
  // }





  deleteProducts(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }



  buy(username: any, name: any, description: String, cost: Number, gst: Number, totalPrice: Number, img: String,) {
    const body = { username, name, description, cost, gst, totalPrice, img }
    return this.http.post('http://localhost:3000/cart', body)
  }

  cart(username: any): Observable<any> {
    return this.http.get('http://localhost:3000/mycart/' + username)
  }

  cartdelete(username: any, name: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/mycart/${username}/${name}`);
  }

  clearCart(username: string) {
    return this.http.delete(`http://localhost:3000/mycart/${username}`);
  }



  // productview(name: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/product/' + name)
  // }

  productview(name: any): Observable<any> {
    return this.http.get('http://localhost:3000/product/' + name)


  }

}



