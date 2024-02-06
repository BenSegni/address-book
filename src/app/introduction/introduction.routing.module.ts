import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        path: '',
        component: IntroductionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntroductionRoutingModule { }
