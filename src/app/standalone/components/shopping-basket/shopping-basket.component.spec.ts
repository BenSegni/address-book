import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBasketComponent } from './shopping-basket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShoppingBasketComponent', () => {
    let component: ShoppingBasketComponent;
    let fixture: ComponentFixture<ShoppingBasketComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ShoppingBasketComponent],
        });
        fixture = TestBed.createComponent(ShoppingBasketComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
