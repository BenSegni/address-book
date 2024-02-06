import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSymbolComponent } from './credit-symbol.component';

describe('CreditSymbolComponent', () => {
    let component: CreditSymbolComponent;
    let fixture: ComponentFixture<CreditSymbolComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CreditSymbolComponent]
        });
        fixture = TestBed.createComponent(CreditSymbolComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
