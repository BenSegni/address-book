import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { ImageEnum } from '../../../../global/utils/enum/image.enum';

@Component({
    selector: 'app-address-success',
    templateUrl: './address-success.component.html',
})
export class AddressSuccessComponent {
    public successMessage$ = this._addressService.successMessage$;
    public bobaFett = ImageEnum.BobaFett;
    public constructor(private _addressService: AddressService) { }
}
