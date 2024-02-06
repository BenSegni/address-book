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

const addressBase = {
    addressee: 'Mr Test',
    town: 'test Town',
    county: 'Test County',
    postcode: 'tes tco'
}

export const addressUIMock: AddressUI = {
    ...addressBase,
    streetLineOne: 'Test Street',
    streetLineTwo: 'Test Street 2',
}

export const addressMock: Address = {
    ...addressBase,
    addressId: 'test-id-test-id',
    street1: 'Test Street',
    street2: 'Test Street 2',
}