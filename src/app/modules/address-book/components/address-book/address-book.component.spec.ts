import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressListComponent } from '../address-list/address-list.component';
import { AddressErrorComponent } from '../address-error/address-error.component';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormErrorComponent } from '../address-form-error/address-form-error.component';
import { AddAddressResultComponent } from '../add-address-result/add-address-result.component';

describe('AddressBookComponent', () => {
    let component: AddressBookComponent;
    let fixture: ComponentFixture<AddressBookComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AddressBookComponent,
                AddressFormComponent,
                AddressListComponent,
                AddAddressResultComponent,
                AddressErrorComponent,
                AddressSuccessComponent,
                AddressFormErrorComponent
            ]
        });
        fixture = TestBed.createComponent(AddressBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
