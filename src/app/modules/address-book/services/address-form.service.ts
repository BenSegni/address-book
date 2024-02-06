import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { addressFormGroup } from './utils/address.form.group';

@Injectable({
    providedIn: 'root'
})
export class AddressFormService {
    public constructor(private _fb: FormBuilder) { }

    /**
     * **createForm()**
     *
     * create a form group and uses external object
     * to create group called in addres form
     * component
     * @returns @type {{ FormGroup }}
     */
    public createForm(): FormGroup {
        return this._fb.group(addressFormGroup);
    }
}
