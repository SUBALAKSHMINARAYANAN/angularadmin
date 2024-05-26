
import { HttpService } from 'src/app/http.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.scss']
})

export class AddoffersComponent implements OnInit {
  images: string[] = [null, null, null, null];
  imageFiles: File[] = [null, null, null, null];
  OfferForm: UntypedFormGroup;
  isCouponSelected = false;

  constructor(private fb: UntypedFormBuilder,private httpService: HttpService, private formBuilder: UntypedFormBuilder) { 
    this.OfferForm = this.formBuilder.group({
      offerName: ['', Validators.required],
      
    });
  }

ngOnInit(): void {
  this.OfferForm = this.fb.group({
    offerType: [''],
    OfferName: ['', Validators.required],
    CouponCode: ['']
  });
}
onOfferTypeChange(event: any) {
  const offerType = this.OfferForm.get('offerType');

  if (event.target.value === 'Offer' && event.target.checked) {
    this.isCouponSelected = false;
    offerType?.setValue('Offer');
  } else if (event.target.value === 'Coupon' && event.target.checked) {
    this.isCouponSelected = true;
    offerType?.setValue('Coupon');
  }

  if (event.target.value === 'Offer' && !event.target.checked && offerType?.value === 'Offer') {
    offerType?.setValue('');
  } else if (event.target.value === 'Coupon' && !event.target.checked && offerType?.value === 'Coupon') {
    this.isCouponSelected = false;
    offerType?.setValue('');
  }

  this.uncheckOther(event.target.id);
}

uncheckOther(selectedId: string) {
  const offerCheckbox = document.getElementById('OfferType') as HTMLInputElement;
  const couponCheckbox = document.getElementById('OfferType1') as HTMLInputElement;

  if (selectedId === 'OfferType' && offerCheckbox.checked) {
    couponCheckbox.checked = false;
  } else if (selectedId === 'OfferType1' && couponCheckbox.checked) {
    offerCheckbox.checked = false;
  }
}
transformToUpperCase() {
    const couponCodeControl = this.OfferForm.get('CouponCode');
    if (couponCodeControl) {
      let currentValue = couponCodeControl.value;
      if (currentValue.length > 10) {
        currentValue = currentValue.slice(0, 10);
      }
      couponCodeControl.setValue(currentValue.toUpperCase(), { emitEvent: false });
    }
  }

onSubmit(): void {
  if (this.OfferForm.valid) {}
}
}