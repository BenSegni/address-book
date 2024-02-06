import { Component } from '@angular/core';
import { ShoppingBasketComponent } from '../shopping-basket/shopping-basket.component';
import { HeaderIconComponent } from '../header-icon/header-icon.component';

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [
        ShoppingBasketComponent,
        HeaderIconComponent
    ]
})
export class HeaderComponent {
    public appHeader = "Boba's Address Book"
}
