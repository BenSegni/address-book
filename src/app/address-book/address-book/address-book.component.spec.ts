import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressComponent } from '../address/address.component';
import { AddressMessageComponent } from '../address-message/address-message.component';
import { AddressErrorComponent } from '../address-error/address-error.component';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
                AddressComponent,
                AddressMessageComponent,
                AddressErrorComponent,
                AddressSuccessComponent
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
