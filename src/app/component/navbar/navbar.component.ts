import { Component, OnInit } from '@angular/core';
import { SidebarNavbarService } from 'src/app/service/sidebar-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private sidebarNavbarService: SidebarNavbarService){}

  ngOnInit(): void {
  }


}
