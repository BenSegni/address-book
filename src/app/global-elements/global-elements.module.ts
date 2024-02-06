import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderIconComponent } from './header-icon/header-icon.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { CreditSymbolComponent } from './credit-symbol/credit-symbol.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoadingGraphicComponent } from './loading-graphic/loading-graphic.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HeaderIconComponent,
        ShoppingBasketComponent,
        CreditSymbolComponent,
        FooterComponent,
        LoadingGraphicComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoadingGraphicComponent
    ]
})
export class GlobalElementsModule { }
