import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: any
  password: any
  type: any

  constructor(private service: ServiceService, private rout: Router) { }
  ngOnInit(): void { }



  // this.type = result.data["type"]
  // this.companyname = result.data["companyname"]
  // this.name = result.data["name"]
  // localStorage.setItem("email", JSON.stringify(email));
  // localStorage.setItem("type", JSON.stringify(this.type));
  // localStorage.setItem("companyname", JSON.stringify(this.companyname));
  // console.log(`email: ${email} type: ${this.type}  companyname:  ${this.companyname} - ${this.name} `);

  // if (this.type == "company") {
  //   localStorage.setItem("name", JSON.stringify(this.name));
  //   this.rout.navigate(['home'])

  // }
  // else if (this.type == "employye") {
  //   localStorage.setItem("name", JSON.stringify(this.name));
  //   this.rout.navigateByUrl('home')



  login() {
    this.service.login(this.username, this.password)
      .subscribe((result: any) => {
        if (result) {
          console.log("Result", result);
          this.type = result
          this.type = this.type.data.type
          console.log("type", this.type);
          localStorage.setItem("type", JSON.stringify(this.type));



          if (this.type == "superadmin") {
            localStorage.setItem("username", JSON.stringify(this.username));
            this.rout.navigate(['superadminhome'])
          }
          else if (this.type == "admin") {
            localStorage.setItem("username", JSON.stringify(this.username));
            this.rout.navigateByUrl('adminhome')
          }
          else {
            localStorage.setItem("username", JSON.stringify(this.username));
            this.rout.navigateByUrl('adminuserhome')
          }
        }
      }
        , (result) => {
          alert(result.error.message)
        })
      }
 
}
