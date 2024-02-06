import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconComponent } from './header-icon.component';

describe('HeaderIconComponent', () => {
    let component: HeaderIconComponent;
    let fixture: ComponentFixture<HeaderIconComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderIconComponent]
        });
        fixture = TestBed.createComponent(HeaderIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing icon click', () => {
        it('should navigate back to home when clicked', () => {
            const spyNavigate = spyOn<any>(component['_router'], 'navigate');

            component.navigateBack();

            expect(spyNavigate).toHaveBeenCalled();
        })
    })
});
