import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {
    public adresses$ = this._addressService.addresses$;
    public constructor(public _addressService: AddressService) { }
}
