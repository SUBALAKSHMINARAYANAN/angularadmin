import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})

export class AddcategoryComponent implements OnInit {
  categoryForm: FormGroup;
  selectedFileName: string;
  FileName: any;

  constructor(private router: Router,private fb: FormBuilder, private httpService: HttpService,) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required],
      image: [null] 
    });
  }

  // onSubmit() {
  //   if (this.categoryForm.valid) {
  //     console.log('Form submitted:', this.categoryForm.value);
  //     this.router.navigate(['/maps']);
      
  //   }
  // }
  onSubmit() {
    if (this.categoryForm.valid) {
      const categoryData = {
        name: this.categoryForm.get('categoryName')?.value,
        description: this.categoryForm.get('description')?.value,
        image: this.categoryForm.get('image')?.value,
        createdOn: new Date().toISOString(), // Assuming you want to set current date/time
        createdBy: "0", // Assuming default value
        isActive: true, // Assuming default value
        lastModifiedOn: new Date().toISOString(), // Assuming you want to set current date/time
        lastModifiedBy: "0" // Assuming default value
      };
  
      console.log('Category data:', categoryData);
  
      this.httpService.InsertCategory(categoryData).subscribe(
        response => {
          // Handle successful response
          console.log('Category added:', response);
          this.router.navigate(['/category']);
          // Reset the form after successful submission
          this.categoryForm.reset();
          // this.router.navigate(['/category']); // Navigate to desired route after submission
        },
        error => {
          // Handle error
          console.error('Error adding category:', error);
        }
      );
    }
  }
  

  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Get the selected file
    if (file) {
        // Update the 'image' form control with the filename of the selected file
        this.categoryForm.get('image').setValue(file.name);
    }
}

}
