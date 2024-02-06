import { APIExceptionEnum } from '../../../../modules/address-book/models/enum/api.enum';
import { UiErrorPipe } from './ui-error.pipe';

describe('AltTextPipe', () => {
    it('create an instance', () => {
        const pipe = new UiErrorPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform(APIExceptionEnum.StOne)).toEqual('Street Line One must not be empty.');
        expect(pipe.transform('test')).toEqual('test');
    });
});
