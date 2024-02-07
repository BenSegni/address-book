import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { IntroductionService } from './introduction.service';
import { delay, of } from 'rxjs';
import { dialogue } from '../data/dialogue.text';

describe('IntroductionService', () => {
    let service: IntroductionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IntroductionService);
    });

    describe('Testing dialogueStream()', () => {
        it('should emit the IntroductionDialogue object after 2.5 seconds', (done) => {
            const expectedDialogue = dialogue[3];
            spyOn(service, 'dialogueStream').and.returnValue(of(expectedDialogue).pipe(delay(2500)));

            service.dialogueStream().subscribe(recievedDialogue => {
                expect(recievedDialogue).toBe(expectedDialogue);
                done();
            });
        })
    });

    describe('Testing loadDialogue()', () => {
        it('should end UI Dialogue after 13500ms delay', fakeAsync(() => {
            service.loadDialogue();

            tick(13500);

            expect(service.introductionFinished).toBe(true);
        }));
    });
});
