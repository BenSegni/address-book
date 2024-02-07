import { FormControl, Validators } from "@angular/forms";

export const addressFormGroup = {
    addressee: new FormControl('', Validators.required),
    streetLineOne: new FormControl('', Validators.required),
    streetLineTwo: new FormControl(''),
    town: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    postcode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
    ])
}