import { Component } from '@angular/core';
import { AddressService } from '../_services/address.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent {
    public adresses$ = this._addressService.addresses$;
    public constructor(public _addressService: AddressService) { }
}
