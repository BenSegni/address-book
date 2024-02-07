import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AddressErrorMessage } from "../interface/address.error";
import { throwError } from "rxjs";
import { AddressService } from "../../services/address.service";

export const httpErrorResponseMock = new HttpErrorResponse({
    error: {
        error: { code: `some code`, message: `some message.` },
    },
    status: 400,
    statusText: 'Your data is all wrong',
});

export const mappedErrorResponse: AddressErrorMessage = {
    status: 'Hey!!!! Your data is all wrong!!!',
    errorData: []
}

export const httpSpy = (service: AddressService, restMethod: keyof HttpClient) => spyOn(service['_http'], restMethod).and.returnValue(throwError(() => httpErrorResponseMock))