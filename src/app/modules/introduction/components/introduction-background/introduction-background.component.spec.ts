import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionBackgroundComponent } from './introduction-background.component';

describe('IntroductionBackgroundComponent', () => {
    let component: IntroductionBackgroundComponent;
    let fixture: ComponentFixture<IntroductionBackgroundComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IntroductionBackgroundComponent]
        });
        fixture = TestBed.createComponent(IntroductionBackgroundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
