import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginform : FormGroup;
  public submitted=false;
 
  public isVisible: boolean = false;
  
  constructor(private HttpService: HttpService, private router: Router,private fb: FormBuilder,private http:HttpClient) { }

  ngOnInit() 
  {
    this.fetchCategories();
    
    this.loginform  = this.fb.group({
       email:  ["",Validators.required],
       password:  ["",Validators.required],
       token:new FormControl(),
     });
    
  }
  get formControl() {
    return this.loginform.controls;
  }
  

  // fetchCategories() {
  //   this.HttpService.getCategories().subscribe(
  //     response => {
  //       console.log('Categories:', response);
  //       // Do something with the categories if needed
  //     },
  //     error => {
  //       console.error('Error fetching categories:', error);
  //     }
  //   );
  // }
  fetchCategories() {
    this.HttpService.getCategories().subscribe(
      response => {
        console.log('Categories:', response);
        // Do something with the categories if needed
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  


  // async onSubmit(): Promise<void> 
  // {
   
  //   this.submitted = true;
  //   if (this.loginform.valid) 
  //   {
  //     console.log("aaaaa")
  //   console.log(this.loginform.value)
  //   this.router.navigate(['/dashboard']);
  //   }
      

      
  // }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.loginform.valid) {
      const loginData = {
        userlogin: this.formControl.email.value,
        Password: this.formControl.password.value
      };

      try {
        const response = await this.HttpService.login(loginData).toPromise();
        console.log('Login response:', response);
        
        this.router.navigate(['/dashboard']);
      } catch (error) {
        console.error('Login error:', error);
        
      }
    }
  }
  

  showerror() 
  {
    this.loginform.reset();
      Swal.fire({
        icon: 'warning',
        title: 'Something Went Wrong',
        showConfirmButton: true,
       });
     
  }  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }

}
// async onSubmit(): Promise<void> {
  //   this.submitted = true;
  //   if (this.loginform.valid) {
  //     this.HttpService.login(this.formControl.email.value, this.formControl.password.value)
  //       .subscribe(
  //         response => {
  //           console.log('Login successful!', response);
  //           // Redirect to dashboard or handle successful login
  //           this.router.navigate(['/dashboard']);
  //         },
  //         error => {
  //           console.error('Login failed!', error);
  //           // Handle login error
  //           this.showAlert();
  //           this.showerror();
  //         }
  //       );
  //   }
  // }