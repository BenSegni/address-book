import { Pipe, PipeTransform } from '@angular/core';
import { APIExceptionEnum } from '../enum/api.enum';

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
