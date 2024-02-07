import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressResultComponent } from './add-address-result.component';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { AddressErrorComponent } from '../address-error/address-error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddAddressResultComponent', () => {
    let component: AddAddressResultComponent;
    let fixture: ComponentFixture<AddAddressResultComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                AddAddressResultComponent,
                AddressSuccessComponent,
                AddressErrorComponent
            ]
        });
        fixture = TestBed.createComponent(AddAddressResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
