import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Address, AddressApiMapper, AddressMapper, AddressUI } from '../interface/address';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { apiConfig } from '../../global/api.config';
import { AddressErrorMessage, ErrorMessageMapper } from '../interface/address.error';
import { AddressSuccessMessage } from '../interface/address.success';

const api = `${apiConfig.url}${apiConfig.port}/${apiConfig.address}`;

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    public addresses$: WritableSignal<Address[]> = signal([]);
    public errorMessage$: WritableSignal<AddressErrorMessage> = signal({
        status: '',
        errorData: []
    });
    public fee = 0;
    public fee$: WritableSignal<number> = signal(0);
    public successMessage$: WritableSignal<AddressSuccessMessage> = signal({
        message: '',
        debt: this.fee
    });
    public isLoading = false;

    constructor(private _http: HttpClient) { }

    /**
     * **addAddress()**
     *
     * creates an address with POST endpoint
     * @param payload -  @type {{ AddressDTO }}
     * @returns @type {{ AddressDTO as Observable }}
     */
    public addAddress(payload: AddressUI): Observable<Address> {
        return this._http.post<Address>(
            api,
            AddressApiMapper.apiMap(payload)
        ).pipe(
            catchError((err) => of(err).pipe(
                tap((err) => {
                    this.clearSuccessMessage();
                    this.errorMessage$.set(ErrorMessageMapper.map(err));
                }),
            )),
            tap((response) => {
                if (response instanceof HttpErrorResponse) {
                    this.clearSuccessMessage();
                } else {
                    this.updateAddresses(response);
                    this.fee = this.chargeCredits(this.fee);
                    this.fee$.update((fee) => fee + 500);
                    this.createSuccessMessage(response);
                }
            })
        );
    }

    /**
     * **getAddress()**
     *
     * @param id string of addressId
     * @returns UI Version of Address
     */

    public getAddress(id: string): Observable<AddressUI> {
        return this._http.get<AddressUI>(`${api}/${id}`).pipe(
            catchError((err) => of(err).pipe(
                tap((err) => {
                    this.errorMessage$.set(ErrorMessageMapper.map(err));
                }),
            )),
            map((response) => AddressMapper.map(response))
        );
    }

    /**
     * **chargeCredits()**
     *
     * @param currentFee current cost value
     * @returns cost total
     */

    private chargeCredits(currentFee: number): number {
        return currentFee + 500;
    }

    /**
     * **updateAddresses()**
     *
     * updates address array when adding more
     * than one address
     * @param address @type {{ Address }} model
     */
    private updateAddresses(address: Address): void {
        this.addresses$?.update((addresses) =>
            [
                ...addresses,
                { ...address, addressId: address.addressId }
            ])
    }

    /**
     * **createSuccessMessage()**
     *
     * on success create success message
     * and new cost for address search
     * @param address @type {{ Address }} model
     */
    private createSuccessMessage(address: Address): void {
        this.successMessage$.set({
            message: `Good Job! You've added ${address.street1}!`,
            debt: this.fee$()
        });
    }

    /**
     * **clearErrorMessage()**
     *
     * cleans down the error message
     * signal
     */
    public clearErrorMessage(): void {
        this.errorMessage$.set({
            status: '',
            errorData: []
        });
    }

    /**
     * **clearSuccessMessage()**
     *
     * cleans down success message
     * signal
     */
    public clearSuccessMessage(): void {
        this.successMessage$.set({
            message: '',
            debt: 0
        });
    }
}
