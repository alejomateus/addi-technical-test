import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFacade } from '@store/facades/app.facade';
import { AppModelMock } from '@app/test-helpers/models/app.model.mock';
import { TranslateModule } from '@ngx-translate/core';
import { ValidationService } from '@services/validation.service';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let validationService: ValidationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot([]),
        EffectsModule.forRoot(),
      ],
      declarations: [HomeComponent],
      providers: [AppFacade,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(inject([AppFacade], (appFacade: AppFacade) => {
    appFacade.selectIdentificationType$ =
      AppModelMock.selectIdentificationType$;
    appFacade.selectIdentificationType2$ =
      AppModelMock.selectIdentificationTypesData$;
    appFacade.selectLanguage$ = AppModelMock.selectLanguage$;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    validationService = TestBed.inject(ValidationService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should checkCustomerData', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.checkCustomerData();
    expect(component).toBeTruthy();
  });

  it('should checkCustomerData', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.personJudicialRecords = [];
    component.prospect = true;
    spyOn(validationService, "validateJudicialReports").and.returnValue(of({
      personJudicialRecords: []
    }));
    component.checkCustomerData();
    expect(component).toBeTruthy();
  });

  it('should checkCustomerData', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");

    spyOn(validationService, "validateJudicialReports").and.returnValue(of({
      personJudicialRecords: []
    }));
    component.checkCustomerData();
    expect(component).toBeTruthy();
  });
  it('should checkCustomerData', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    spyOn(validationService, "validateProspect").and.returnValue(of({
      exists: true
    }));
    component.checkCustomerData();
    expect(component).toBeTruthy();
  });

  it('should getCustomerScore', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");

    component.getCustomerScore(component.formValidation.value);
    expect(component).toBeTruthy();
  });


  it('should checkCustomerData', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.personJudicialRecords = [];
    component.prospect = true;
    spyOn(validationService, "validateProspect").and.returnValue(of({
      exists: true
    }));
    component.checkCustomerData();
    expect(component).toBeTruthy();
  });

  it('should getCustomerScore', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.getCustomerScore(component.formValidation.value);
    expect(component).toBeTruthy();
  });

  it('should getCustomerScore', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.personJudicialRecords = [];
    component.prospect = true;
    spyOn(validationService, "getScore").and.returnValue(of({
      score: 70
    }));
    component.getCustomerScore(component.formValidation.value);
    expect(component).toBeTruthy();
  });
  it('should getCustomerScore', () => {
    component.formValidation.controls["identificationType"].setValue(1);
    component.formValidation.controls["identificationNumber"].setValue(1023013040);
    component.formValidation.controls["phoneNumber"].setValue(3143720783);
    component.formValidation.controls["birthDate"].setValue(new Date());
    component.formValidation.controls["names"].setValue("Alejandro");
    component.formValidation.controls["lastnames"].setValue("Jimenez");
    component.formValidation.controls["email"].setValue("alejo@gmail.com");
    component.score = 50;
    component.getCustomerScore(component.formValidation.value);
    expect(component).toBeTruthy();
  });
});
