import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppFacade } from '@store/facades/app.facade';
import { AppModelMock } from '@app/test-helpers/models/app.model.mock';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        StoreModule.forRoot([]),
        EffectsModule.forRoot(),
      ],
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [AppFacade]
    })
    .compileComponents();
  });

  beforeEach(inject([AppFacade], (appFacade: AppFacade) => {
    appFacade.selectIdentificationType$ =
      AppModelMock.selectIdentificationType$;
    appFacade.selectIdentificationType2$ =
      AppModelMock.selectIdentificationTypesData$;
    appFacade.selectLanguage$ = AppModelMock.selectLanguage$;
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should changeLanguage', () => {
    component.language = "es";
    component.changeLanguage();
    expect(component).toBeTruthy();
  });
  it('should changeLanguage', () => {
    component.language = "en";
    component.changeLanguage();
    expect(component).toBeTruthy();
  });
});
