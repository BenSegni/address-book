import { Component } from '@angular/core';
import { HeaderIconComponent } from '../header-icon/header-icon.component';

@Component({
    standalone: true,
    selector: 'app-loading-graphic',
    templateUrl: './loading-graphic.component.html',
    imports: [HeaderIconComponent]
})
export class LoadingGraphicComponent {}
