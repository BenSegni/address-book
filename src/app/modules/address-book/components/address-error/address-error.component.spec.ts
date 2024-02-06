import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressErrorComponent } from './address-error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddressErrorComponent', () => {
    let component: AddressErrorComponent;
    let fixture: ComponentFixture<AddressErrorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AddressErrorComponent]
        });
        fixture = TestBed.createComponent(AddressErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
