import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddressLinkComponent } from './search-address-link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchAddressLinkComponent', () => {
    let component: SearchAddressLinkComponent;
    let fixture: ComponentFixture<SearchAddressLinkComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [SearchAddressLinkComponent]
        });
        fixture = TestBed.createComponent(SearchAddressLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
