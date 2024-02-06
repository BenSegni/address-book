import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { UtilsModule } from '../utils/utils.module';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressRoutingModule } from './address.routing.module';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressMessageComponent } from './address-message/address-message.component';
import { AddressDetailPageComponent } from './address-detail-page/address-detail-page.component';
import { AddressErrorComponent } from './address-error/address-error.component';
import { AddressSuccessComponent } from './address-success/address-success.component';
import { UiErrorPipe } from './utils/ui-error.pipe';
import { GlobalElementsModule } from '../global-elements/global-elements.module';



@NgModule({
    declarations: [
        AddressComponent,
        AddressFormComponent,
        AddressBookComponent,
        AddressDetailComponent,
        AddressMessageComponent,
        AddressDetailPageComponent,
        AddressErrorComponent,
        AddressSuccessComponent,
        UiErrorPipe,
    ],
    imports: [
        UtilsModule,
        AddressRoutingModule,
        GlobalElementsModule
    ]
})
export class AddressBookModule { }
