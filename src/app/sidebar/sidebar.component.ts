import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  selectedPage: string;
  navbarOpen = false;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.selectedPage = router.url;
    })
  }

  ngOnInit() {
  }

  closeNavbar() {
    this.navbarOpen = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
