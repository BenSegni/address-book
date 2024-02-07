import { Component, Input } from '@angular/core';
import { Address, AddressUI } from '../../models/interface/address';
import { FadeIn } from '../../../../global/utils/animations/fade';

@Component({
    selector: 'app-address-card',
    templateUrl: './address-card.component.html',
    animations: [FadeIn()]
})
export class AddressCardComponent {
    @Input() public addressCard: Address | undefined;
    public address: AddressUI | undefined;
}
