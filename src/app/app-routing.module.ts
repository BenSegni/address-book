import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/introduction/introduction.module').then(m => m.IntroductionModule)
    },
    {
        path: 'add-addresses',
        loadChildren: () => import('./modules/address-book/address-book.module').then(m => m.AddressBookModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
