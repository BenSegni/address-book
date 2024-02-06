import { Component, Input } from '@angular/core';
import { Address } from '../../models/interface/address';
import { FadeIn } from '../../../../global/utils/animations/fade';

@Component({
    selector: 'app-address-detail',
    templateUrl: './address-detail.component.html',
    animations: [FadeIn()]
})
export class AddressDetailComponent {
    @Input() public addressDetail: Address | undefined;
}