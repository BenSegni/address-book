import { NgModule } from '@angular/core';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { IntroductionRoutingModule } from './routes/introduction.routing.module';
import { UtilsModule } from '../../global/utils/utils.module';
import { SearchAddressLinkComponent } from './components/search-address-link/search-address-link.component';
import { IntroductionBackgroundComponent } from './components/introduction-background/introduction-background.component';



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
