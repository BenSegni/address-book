import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { AddressMessageComponent } from '../address-message/address-message.component';
import { AddressErrorComponent } from '../address-error/address-error.component';

describe('AddressComponent', () => {
    let component: AddressComponent;
    let fixture: ComponentFixture<AddressComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AddressComponent, AddressSuccessComponent, AddressMessageComponent, AddressErrorComponent]
        });
        fixture = TestBed.createComponent(AddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
