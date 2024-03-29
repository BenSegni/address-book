import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from '../components/address-book/address-book.component';
import { AddressDetailPageComponent } from '../components/address-detail-page/address-detail-page.component';

const routes: Routes = [
    {
        path: '',
        component: AddressBookComponent
    },
    {
        path: ':id',
        component: AddressDetailPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressRoutingModule { }
