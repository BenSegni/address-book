import { TestBed } from '@angular/core/testing';

import { IntroductionService } from './introduction.service';

describe('IntroductionService', () => {
    let service: IntroductionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IntroductionService);
    });

    describe('Testing loadDialogue()', () => {
        it('should set introductionFinished after a delay', () => {
            service.loadDialogue();

            service.delay$.subscribe({
                next: () => null,
                complete: () => {
                    expect(service.introductionFinished).toBeTruthy();
                }
            })
        })
    })
});
