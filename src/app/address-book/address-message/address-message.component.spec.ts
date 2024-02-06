import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMessageComponent } from './address-message.component';
import { AddressErrorComponent } from '../address-error/address-error.component';
import { AddressSuccessComponent } from '../address-success/address-success.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddressMessageComponent', () => {
    let component: AddressMessageComponent;
    let fixture: ComponentFixture<AddressMessageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AddressMessageComponent, AddressErrorComponent, AddressSuccessComponent]
        });
        fixture = TestBed.createComponent(AddressMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
