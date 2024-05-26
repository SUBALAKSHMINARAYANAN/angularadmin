import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/category', title: 'Category',  icon:'ni-shop text-red', class: '' }, // Changed icon to ni-spaceship
  { path: '/products', title: 'Products',  icon:'ni-basket text-info', class: '' },
  { path: '/orders', title: 'Orders',  icon:'ni-money-coins text-blue', class: '' },
  { path: '/customer', title: 'Customer',  icon:'ni-single-02 text-yellow', class: '' },
  // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/offers', title: 'Offers',  icon:'fa fa-ticket-alt text-info', class: '' },
  { path: '/staffspage', title: 'Staffs & Roles',  icon:'ni-single-02 text-red', class: '' } ,// Changed icon to ni-settings-gear-65
  { path: '/register', title: 'Shipping',  icon:'fa fa-shipping-fast text-info', class: '' },
  { path: '/user-profile', title: 'Payment Transaction',  icon:'fa fa-credit-card text-red', class: '' }

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
