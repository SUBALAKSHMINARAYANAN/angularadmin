import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {
  images: string[] = [null, null, null, null];
  imageFiles: File[] = [null, null, null, null];
  productForm: UntypedFormGroup;
  categories: any[];
  

  constructor(private fb: UntypedFormBuilder,private httpService: HttpService, private formBuilder: UntypedFormBuilder) { 
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],  
    });
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      ddcategory: ['', Validators.required],
      actualprice: ['', Validators.required],
      offerprice: ['', Validators.required],
      ddoffer: ['', Validators.required],
      offerdate: ['', Validators.required],
      approxdelivery: ['', Validators.required],
      description: ['', Validators.required],
      productImages: this.fb.array([null, null, null, null])
    });
    this.fetchCategories();
  }

  onFileSelected(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.imageFiles[index] = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  fetchCategories() {
    this.httpService.getCategories().subscribe(
      (response: any[]) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  test(){    
    console.log('Selected value:', this.productForm.value.ddcategory);
  }
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      const currentDateTimeString = new Date().toISOString();

      const productData = {      
        name: formData.productName,
        categoryId: formData.ddcategory,
        description: formData.description,
        stockQuantity: null,
        quantity: null,
        actualPrice: formData.actualprice,
        offerPrice: formData.offerprice,
        offerId: null,
        offerEndOn: new Date(formData.offerdate).toISOString(),
        deliveryDuration: formData.approxdelivery,
        createdOn: currentDateTimeString,
        createdBy: "1",
        isActive: true,
        lastModifiedOn: null,
        lastModifiedBy: null
      };

      console.log(productData);

      this.httpService.saveProduct(productData).subscribe(
        (productResponse: any) => {
          console.log('Product saved successfully:', productResponse);    
          this.saveImages(productResponse.id);
        },
        (error) => {        
          console.error('Error saving product:', error);
        }
      );
    }
  }

  saveImages(productId: number): void {
    this.images.forEach((image: string | File) => {
      if (typeof image === 'string') return;

      const formData = new FormData();
      formData.append('productId', productId.toString());
      formData.append('image', image);

      // this.httpService.saveImage(formData).subscribe(
      //   (imageResponse: any) => {
      //     console.log('Image saved successfully:', imageResponse);
      //   },
      //   (error) => {
      //     console.error('Error saving image:', error);
      //   }
      // );
    });
  }
}
