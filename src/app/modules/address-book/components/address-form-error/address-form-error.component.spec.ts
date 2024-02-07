import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormErrorComponent } from './address-form-error.component';

describe('AddressFormErrorComponent', () => {
  let component: AddressFormErrorComponent;
  let fixture: ComponentFixture<AddressFormErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFormErrorComponent]
    });
    fixture = TestBed.createComponent(AddressFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
