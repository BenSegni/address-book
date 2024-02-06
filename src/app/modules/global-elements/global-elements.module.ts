import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeaderIconComponent } from './components/header-icon/header-icon.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { CreditSymbolComponent } from './components/credit-symbol/credit-symbol.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingGraphicComponent } from './components/loading-graphic/loading-graphic.component';



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
