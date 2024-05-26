import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {

  // staffForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.staffForm = this.fb.group({
    //   staffName: ['', Validators.required],
    //   username: ['', Validators.required],
    //   Password: ['', Validators.required],
    //   contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    //   email: ['', [Validators.required, Validators.email]],
    //   Role: ['', Validators.required],
    //   location: ['', Validators.required]
    // });
  }

  // onSubmit() {
  //   if (this.staffForm.valid) {
  //     console.log('Form submitted:', this.staffForm.value);
  //     this.router.navigate(['/staffspage']); // Change the route to the desired page after form submission
  //   }
  // }

 

}
