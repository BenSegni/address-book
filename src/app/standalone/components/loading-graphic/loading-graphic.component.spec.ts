import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGraphicComponent } from './loading-graphic.component';
import { HeaderIconComponent } from '../header-icon/header-icon.component';

describe('LoadingGraphicComponent', () => {
    let component: LoadingGraphicComponent;
    let fixture: ComponentFixture<LoadingGraphicComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoadingGraphicComponent, HeaderIconComponent]
        });
        fixture = TestBed.createComponent(LoadingGraphicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
