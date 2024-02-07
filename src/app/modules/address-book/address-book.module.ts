import { NgModule } from '@angular/core';
import { AddressComponent } from './components/address/address.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressRoutingModule } from './routes/address.routing.module';
import { AddressDetailComponent } from './components/address-detail/address-detail.component';
import { AddressMessageComponent } from './components/address-message/address-message.component';
import { AddressDetailPageComponent } from './components/address-detail-page/address-detail-page.component';
import { AddressErrorComponent } from './components/address-error/address-error.component';
import { AddressSuccessComponent } from './components/address-success/address-success.component';
import { LoadingGraphicComponent } from '../../standalone/components/loading-graphic/loading-graphic.component';
import { AddressFormErrorComponent } from './components/address-form-error/address-form-error.component';

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
        AddressFormErrorComponent,
    ],
    imports: [
        UtilsModule,
        AddressRoutingModule,
        LoadingGraphicComponent
    ]
})
export class AddressBookModule { }
