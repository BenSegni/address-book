import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { addressUIMock } from '../models/mocks/address.mock';
import { Address, AddressUI } from '../models/interface/address';
import { HttpResponse } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
import { httpSpy, mappedErrorResponse } from '../models/mocks/http.error.mock';

describe('AddressService', () => {
    let service: AddressService;
    let signalSpy: jasmine.Spy;
    let globalSpy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(AddressService);
        signalSpy = spyOn(service.errorMessage$, 'set');
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

    describe('Testing addAddress() error handling', () => {
        const getReturnValue = (): Observable<Address> =>
            service.addAddress(addressUIMock);
        const subscribe = (): Subscription => getReturnValue().subscribe();

        beforeEach(() => {
            globalSpy = httpSpy(service, 'post');
        });

        it('should return an error message & set the signal', () => {
            subscribe();
            expect(signalSpy).toHaveBeenCalledWith(mappedErrorResponse);
        });
    });

    describe('Testing getAddress() error handling', () => {
        const getReturnValue = (): Observable<AddressUI> =>
            service.getAddress('test');
        const subscribe = (): Subscription => getReturnValue().subscribe();

        beforeEach(() => {
            globalSpy = httpSpy(service, 'get');
        });

        it('should return an error message & set the signal', () => {
            subscribe();
            expect(signalSpy).toHaveBeenCalledWith(mappedErrorResponse);
        });
    });
});
