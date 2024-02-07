import { NgModule } from '@angular/core';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressRoutingModule } from './routes/address.routing.module';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressDetailPageComponent } from './components/address-detail-page/address-detail-page.component';
import { AddressErrorComponent } from './components/address-error/address-error.component';
import { AddressSuccessComponent } from './components/address-success/address-success.component';
import { LoadingGraphicComponent } from '../../standalone/components/loading-graphic/loading-graphic.component';
import { AddressFormErrorComponent } from './components/address-form-error/address-form-error.component';
import { AddAddressResultComponent } from './components/add-address-result/add-address-result.component';

@NgModule({
    declarations: [
        AddressListComponent,
        AddressFormComponent,
        AddressBookComponent,
        AddressCardComponent,
        AddressDetailPageComponent,
        AddressErrorComponent,
        AddressSuccessComponent,
        AddressFormErrorComponent,
        AddAddressResultComponent,
    ],
    imports: [
        UtilsModule,
        AddressRoutingModule,
        LoadingGraphicComponent
    ]
})
export class AddressBookModule { }
