import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)
    },
    {
        path: 'search-addresses',
        loadChildren: () => import('./address-book/address-book.module').then(m => m.AddressBookModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
