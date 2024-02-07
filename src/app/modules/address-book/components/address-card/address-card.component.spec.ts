import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardComponent } from './address-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddressCardComponent', () => {
    let component: AddressCardComponent;
    let fixture: ComponentFixture<AddressCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [AddressCardComponent]
        });
        fixture = TestBed.createComponent(AddressCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
