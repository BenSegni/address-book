import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Address, AddressUI } from "../interface/address";

export const addressFormMock: FormGroup = new FormGroup({
    addressee: new FormControl('', Validators.required),
    streetLineOne: new FormControl('', Validators.required),
    streetLineTwo: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    postcode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
    ])
});

export const addressUIMock: AddressUI = {
    addressee: 'Mr Test',
    streetLineOne: 'Test Street',
    streetLineTwo: 'Test Street 2',
    town: 'test Town',
    county: 'Test County',
    postcode: 'tes tco'
}

export const addressMock: Address = {
    addressId: 'test-id-test-id',
    addressee: 'Mr Test',
    street1: 'Test Street',
    street2: 'Test Street 2',
    town: 'test Town',
    county: 'Test County',
    postcode: 'tes tco'
}