import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddressFormComponent } from './address-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { addressFormMock, addressMock, addressUIMock } from '../../models/mocks/address.mock';
import { of } from 'rxjs';
import { AddressFormErrorComponent } from '../address-form-error/address-form-error.component';

describe('AddressFormComponent', () => {
    let component: AddressFormComponent;
    let fixture: ComponentFixture<AddressFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
            declarations: [AddressFormComponent, AddressFormErrorComponent]
        });
        fixture = TestBed.createComponent(AddressFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing addAddress()', () => {
        it('should call the address service with address data', () => {
            const spyService = spyOn<any>(component['_addressService'], 'addAddress').and.returnValue(of(addressMock));

            addressFormMock.setValue(addressUIMock)

            component.addAddress(addressFormMock);

            expect(spyService).toHaveBeenCalled();
            expect(component['_addressService'].isLoading).toBeFalsy();
        })
    })
});
