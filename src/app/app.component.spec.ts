import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/global-elements/components/header/header.component';
import { FooterComponent } from './modules/global-elements/components/footer/footer.component';
import { HeaderIconComponent } from './modules/global-elements/components/header-icon/header-icon.component';
import { ShoppingBasketComponent } from './modules/global-elements/components/shopping-basket/shopping-basket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HeaderIconComponent,
            ShoppingBasketComponent
        ]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
