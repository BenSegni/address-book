import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { addressMock, addressUIMock } from '../models/mocks/address.mock';
import { Address } from '../models/interface/address';
import { HttpResponse } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';

describe('AddressService', () => {
    let service: AddressService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(AddressService);
    });

    describe('Testing addAddress()', () => {
		const getReturnValue = (): Observable<Address> =>
        service.addAddress(addressUIMock);
		const subscribe = (): Subscription => getReturnValue().subscribe();
		let globalPostSpy: any;
		let globalGetSpy: any;

		beforeEach(() => {
			globalPostSpy = spyOn(
				service['_http'],
				'post',
			).and.returnValue(of({ status: 201 } as HttpResponse<any>));

			globalGetSpy = spyOn(
				service['_http'],
				'get',
			).and.returnValue(of(addressMock));
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
});
