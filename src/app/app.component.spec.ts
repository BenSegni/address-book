import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './standalone/components/header/header.component';
import { FooterComponent } from './standalone/components/footer/footer.component';
import { HeaderIconComponent } from './standalone/components/header-icon/header-icon.component';
import { ShoppingBasketComponent } from './standalone/components/shopping-basket/shopping-basket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule,
            HeaderComponent,
            FooterComponent,
            HeaderIconComponent,
            ShoppingBasketComponent
        ],
        declarations: [
            AppComponent
        ]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
