import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-address-error',
    templateUrl: './address-error.component.html',
})
export class AddressErrorComponent {
    public errorMessage$ = this._addressService.errorMessage$;
    public bobaFett = '../../../assets/img/boba_fett.svg';
    public constructor(private _addressService: AddressService) { }
}
