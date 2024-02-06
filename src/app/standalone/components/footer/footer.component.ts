import { Component } from '@angular/core';
import { HeaderIconComponent } from '../header-icon/header-icon.component';

@Component({
    standalone: true,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    imports: [HeaderIconComponent]
})
export class FooterComponent {
    public footerNote = "Not doin' this for peanuts."
}
