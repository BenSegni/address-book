import { Component } from '@angular/core';
import { AddressService } from '../_services/address.service';

@Component({
    selector: 'app-address-success',
    templateUrl: './address-success.component.html',
})
export class AddressSuccessComponent {
    public successMessage$ = this._addressService.successMessage$;
    public bobaFett = '../../../assets/img/boba_fett.svg';
    public constructor(private _addressService: AddressService) { }
}
