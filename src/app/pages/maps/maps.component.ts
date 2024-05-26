import { Component, OnInit } from '@angular/core';
declare const google: any;
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  categories: any;
  constructor(private HttpService: HttpService) { }

  ngOnInit() {
    this.fetchCategories();
  }
  fetchCategories() {
    this.HttpService.getCategories().subscribe(
      response => {
        console.log('Categories:', response);
        this.categories = response; 
        // Do something with the categories if needed
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  
}
