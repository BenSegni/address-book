import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { addressMock, addressUIMock } from '../models/mocks/address.mock';
import { Address, AddressUI } from '../models/interface/address';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subscription, of, throwError } from 'rxjs';
import { apiConfig } from '../../../global/api/api.config';

const api = `${apiConfig.url}${apiConfig.port}/${apiConfig.address}`;

describe('AddressService', () => {
    let service: AddressService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(AddressService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    describe('Testing addAddress()', () => {
        const getReturnValue = (): Observable<Address> =>
            service.addAddress(addressUIMock);
        const subscribe = (): Subscription => getReturnValue().subscribe();
        let globalPostSpy: any;

        beforeEach(() => {
            globalPostSpy = spyOn(
                service['_http'],
                'post',
            ).and.returnValue(of({ status: 201 } as HttpResponse<any>));
        });

        it('should return an observable', () => {
            const type = getReturnValue() instanceof Observable;
            expect(type).toBeTruthy();
        });

        it('should call the api', () => {
            subscribe();
            expect(globalPostSpy).toHaveBeenCalled();
        });
    });

    describe('Testing getAddress()', () => {
        const getReturnValue = (): Observable<AddressUI> =>
            service.getAddress('test-test-test');
        const subscribe = (): Subscription => getReturnValue().subscribe();
        let globalGetSpy: any;

        beforeEach(() => {
            globalGetSpy = spyOn(
                service['_http'],
                'get',
            ).and.returnValue(of(addressUIMock));
        });

        it('should return an observable', () => {
            const type = getReturnValue() instanceof Observable;
            expect(type).toBeTruthy();
        });

        it('should call the api', () => {
            subscribe();
            expect(globalGetSpy).toHaveBeenCalled();
        });
    });

    describe('addAddress() error handling', () => {
        it('should catch error', () => {
            const httpErrorResponseMock = new HttpErrorResponse({
                error: {
                    error: { code: `some code`, message: `some message.` },
                },
                status: 400,
                statusText: 'Your data is all wrong',
            });
            service.addAddress(addressUIMock).subscribe({
                next: () => throwError(() => of(httpErrorResponseMock)),
                error: (error: HttpErrorResponse) => {
                    expect(error).toBeTruthy();
                },
                complete: () => null,
            });

            const request = httpMock.expectOne(
                api
            );
            request.flush(httpErrorResponseMock);
        });
    });
});
