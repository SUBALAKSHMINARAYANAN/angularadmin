import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffspageComponent } from './staffspage.component';

describe('StaffspageComponent', () => {
  let component: StaffspageComponent;
  let fixture: ComponentFixture<StaffspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
