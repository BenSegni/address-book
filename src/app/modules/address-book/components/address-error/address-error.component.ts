import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { ImageEnum } from '../../../../global/utils/enum/image.enum';

@Component({
    selector: 'app-address-error',
    templateUrl: './address-error.component.html',
})
export class AddressErrorComponent {
    public errorMessage$ = this._addressService.errorMessage$;
    public bobaFett = ImageEnum.BobaFett;
    public constructor(private _addressService: AddressService) { }
}
