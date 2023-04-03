import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // @Output() openEvent = new EventEmitter


  username: any
  type: any
  nav: any

  constructor(private rout: Router, private location: Location) { }

  ngOnInit() {

    this.type = JSON.parse(localStorage.getItem("type") || "")
    this.username = JSON.parse(localStorage.getItem("username") || "")
    // Backinig avoidance when logut clicked
    if (!localStorage.getItem("username")) {
      alert("Login First")
      this.rout.navigateByUrl("login")
    }

  }


  logout() {
    this.rout.navigate(['']);

    // Replace the current URL with the login page URL
    this.location.replaceState('/login');

    localStorage.removeItem('username')
    localStorage.removeItem('type')

  }

  
}
