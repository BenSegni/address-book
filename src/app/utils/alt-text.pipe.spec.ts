import { AltTextPipe } from './alt-text.pipe';

describe('AltTextPipe', () => {
    it('create an instance', () => {
        const pipe = new AltTextPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform('../../assets/img/logo.svg')).toEqual('logo logo')
    });
});
