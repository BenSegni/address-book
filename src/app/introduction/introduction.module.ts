import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroductionRoutingModule } from './introduction.routing.module';
import { UtilsModule } from '../utils/utils.module';
import { SearchAddressLinkComponent } from './search-address-link/search-address-link.component';
import { IntroductionBackgroundComponent } from './introduction-background/introduction-background.component';



@NgModule({
    declarations: [
        IntroductionComponent,
        SearchAddressLinkComponent,
        IntroductionBackgroundComponent,
    ],
    imports: [
        IntroductionRoutingModule,
        UtilsModule
    ]
})
export class IntroductionModule { }
