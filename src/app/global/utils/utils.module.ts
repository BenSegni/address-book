import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltTextPipe } from './pipes/alt.text/alt-text.pipe';
import { UiErrorPipe } from './pipes/error/ui-error.pipe';



@NgModule({
    declarations: [AltTextPipe, UiErrorPipe],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AltTextPipe,
        UiErrorPipe
    ]
})
export class UtilsModule { }
