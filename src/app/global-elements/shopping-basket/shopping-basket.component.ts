import { Component } from '@angular/core';
import { AddressService } from '../../address-book/_services/address.service';

@Component({
    selector: 'app-shopping-basket',
    templateUrl: './shopping-basket.component.html',
})
export class ShoppingBasketComponent {
    public currentCost$ = this._addressService.fee$;
    public constructor(private _addressService: AddressService) { }
}
