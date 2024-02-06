import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-icon',
    templateUrl: './icon.svg',
})
export class HeaderIconComponent {
    constructor(private _router: Router) { }

    public navigateBack(): void {
        this._router.navigate(['']);
    }
}
