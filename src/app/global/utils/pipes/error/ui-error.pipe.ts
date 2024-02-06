import { Pipe, PipeTransform } from '@angular/core';
import { APIExceptionEnum } from '../../../../modules/address-book/models/enum/api.enum';

@Pipe({
    name: 'uiError'
})
export class UiErrorPipe implements PipeTransform {

    transform(value: string): string {
        switch (true) {
            case value.includes(APIExceptionEnum.StOne): return 'Street Line One must not be empty.'
            default: return value;
        }
    }

}
