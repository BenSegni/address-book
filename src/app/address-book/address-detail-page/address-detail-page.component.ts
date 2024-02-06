import { Component, OnInit } from '@angular/core';
import { AddressService } from '../_services/address.service';
import { AddressUI } from '../interface/address';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
    selector: 'app-address-detail-page',
    templateUrl: './address-detail-page.component.html',
})
export class AddressDetailPageComponent implements OnInit {
    public address: AddressUI | undefined;
    public addressId = ''
    public pageHeader = '';
    public constructor(private _addressService: AddressService, private _route: ActivatedRoute) { }
    public ngOnInit(): void {
        this._route.params.pipe(take(1)).subscribe({
            next: (params) => this.addressId = params['id'],
        });

        this.displayAddress(this.addressId)
    }

    private displayAddress(id: string): void {
        this._addressService.getAddress(id).pipe(take(1)).subscribe((address: AddressUI) => {
            this.address = address;
            this.pageHeader = `Displaying the Address for ${this.address.streetLineOne}`
        })
    }
}
