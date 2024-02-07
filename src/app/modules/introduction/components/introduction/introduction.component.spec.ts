import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';
import { AltTextPipe } from '../../../../global/utils/pipes/alt.text/alt-text.pipe';
import { IntroductionBackgroundComponent } from '../introduction-background/introduction-background.component';

describe('IntroductionComponent', () => {
    let component: IntroductionComponent;
    let fixture: ComponentFixture<IntroductionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IntroductionComponent, AltTextPipe, IntroductionBackgroundComponent]
        });
        fixture = TestBed.createComponent(IntroductionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Testing skipButtonWasClicked()', () => {
        it('should show a different waiting message and end introduction', () => {
            component.skipButtonWasClicked();

            expect(component.waitingMessage).toBe(component.skipIntroductionMessage);
            expect(component._introductionService.introductionFinished).toBeTruthy();
        })
    })
});
