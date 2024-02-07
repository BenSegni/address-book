import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddressFormService } from '../../services/address-form.service';
import { AddressService } from '../../services/address.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
    public addressForm: FormGroup = this._addressFormService.createForm();

    public constructor(private _addressFormService: AddressFormService, private _addressService: AddressService) { }

    get form(): { [key: string]: AbstractControl } {
        return this.addressForm.controls;
    }

    public addAddress(form: FormGroup): void {
        this._addressService.isLoading = true;
        this._addressService.clearErrorMessage();
        this._addressService.clearSuccessMessage();
        this._addressService.addAddress(form.value).pipe(take(1)).subscribe({
            next: () => this.addressForm.reset(),
            complete: () => this._addressService.isLoading = false
        })
    }
}
