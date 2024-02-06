import { Component, Input } from '@angular/core';
import { FadeIn } from '../../../../global/utils/animations/fade';

@Component({
    selector: 'app-search-address-link',
    templateUrl: './search-address-link.component.html',
    animations: [FadeIn()]
})
export class SearchAddressLinkComponent {
    @Input() public introductionIsFinished = false;
}
