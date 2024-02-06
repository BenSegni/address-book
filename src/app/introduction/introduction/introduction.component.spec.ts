import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';
import { AltTextPipe } from '../../utils/alt-text.pipe';
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
});
