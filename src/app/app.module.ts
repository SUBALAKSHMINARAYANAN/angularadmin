import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { StaffspageComponent } from './pages/staffspage/staffspage.component';
import { AddstaffComponent } from './pages/addstaff/addstaff.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
     ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    CategoryComponent,
    CustomerComponent,
    StaffspageComponent,
    AddstaffComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
