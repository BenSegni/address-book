import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListComponent } from './address-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { AddressErrorComponent } from '../address-error/address-error.component';
import { AddAddressResultComponent } from '../add-address-result/add-address-result.component';

describe('AddressListComponent', () => {
    let component: AddressListComponent;
    let fixture: ComponentFixture<AddressListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [
                AddressListComponent,
                AddressSuccessComponent,
                AddressErrorComponent,
                AddAddressResultComponent
            ]
        });
        fixture = TestBed.createComponent(AddressListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
