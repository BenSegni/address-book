import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailPageComponent } from './address-detail-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingGraphicComponent } from '../../../../standalone/components/loading-graphic/loading-graphic.component';
import { HeaderIconComponent } from '../../../../standalone/components/header-icon/header-icon.component';
import { of } from 'rxjs';
import { addressUIMock } from '../../models/mocks/address.mock';

describe('AddressDetailPageComponent', () => {
    let component: AddressDetailPageComponent;
    let fixture: ComponentFixture<AddressDetailPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, LoadingGraphicComponent, HeaderIconComponent],
            declarations: [AddressDetailPageComponent]
        });
        fixture = TestBed.createComponent(AddressDetailPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing displayAddress()', () => {
        it('should return an address response', () => {
            const spyService = spyOn<any>(component['_addressService'], 'getAddress').and.returnValue(of(addressUIMock))
            component['displayAddress']('test-id-test-id');
            expect(component.address).toEqual(addressUIMock);
            expect(spyService).toHaveBeenCalled();
        })
    })
});
