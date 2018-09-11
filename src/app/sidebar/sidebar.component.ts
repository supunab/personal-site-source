import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  selectedPage: string;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.selectedPage = router.url;
    })
  }

  ngOnInit() {
  }

}
