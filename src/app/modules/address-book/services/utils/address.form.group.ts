import { Validators } from "@angular/forms";

export const addressFormGroup = {
    addressee: ['', Validators.required],
    streetLineOne: ['', Validators.required],
    streetLineTwo: [''],
    town: ['', Validators.required],
    county: ['', Validators.required],
    postcode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
    ]]
}