import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressListComponent {
    public adresses$ = this._addressService.addresses$;
    public constructor(public _addressService: AddressService) { }
}
