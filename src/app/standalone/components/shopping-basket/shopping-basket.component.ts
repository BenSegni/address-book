import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddressService } from '../../../modules/address-book/services/address.service';
import { CreditSymbolComponent } from '../credit-symbol/credit-symbol.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-shopping-basket',
    templateUrl: './shopping-basket.component.html',
    imports: [
        CommonModule,
        CreditSymbolComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingBasketComponent {
    public currentCost$ = this._addressService.fee$;
    public constructor(private _addressService: AddressService) { }
}
