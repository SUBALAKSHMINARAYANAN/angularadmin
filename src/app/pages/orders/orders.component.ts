// src/app/orders/orders.component.ts
import { Component, OnInit } from '@angular/core';

interface Order {
  id: number;
  status: 'New' | 'Pending' | 'Completed';
  // add other relevant fields
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [
    { id: 1, status: 'New' },
    { id: 2, status: 'Pending' },
    { id: 3, status: 'Completed' },
    { id: 4, status: 'New' },
    { id: 5, status: 'Pending' },
    { id: 6, status: 'Completed' }
  ];
  filteredOrders: Order[] = [];
  currentStatus: 'New' | 'Pending' | 'Completed' = 'New';

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.filteredOrders = this.orders.filter(order => order.status === this.currentStatus);
  }

  switchStatus(status: 'New' | 'Pending' | 'Completed'): void {
    this.currentStatus = status;
    this.loadOrders();
  }
}
