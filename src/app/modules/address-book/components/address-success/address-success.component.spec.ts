import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSuccessComponent } from './address-success.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddressSuccessComponent', () => {
    let component: AddressSuccessComponent;
    let fixture: ComponentFixture<AddressSuccessComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AddressSuccessComponent]
        });
        fixture = TestBed.createComponent(AddressSuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
