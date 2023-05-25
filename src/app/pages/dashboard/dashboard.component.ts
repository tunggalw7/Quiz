import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebar: boolean= true;
  name = localStorage.getItem('name')
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  toggle() {
    this.sidebar = !this.sidebar;
  }

  onLogout(){    
    localStorage.removeItem("isLogin");
    localStorage.removeItem("name");
    this.router.navigate(['/login']);
  }
}
