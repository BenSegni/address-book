import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-address-form-error',
    templateUrl: './address-form-error.component.html',
    styleUrls: ['./address-form-error.component.scss']
})
export class AddressFormErrorComponent {
    @Input() public label = '';
    @Input() public control: AbstractControl | undefined;
    @Input() public validationErrors: ValidationErrors[] = [];
    @Input() public minLength = 0;
    @Input() public maxLength = 0;
}
