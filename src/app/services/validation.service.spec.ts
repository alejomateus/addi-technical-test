import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'environments/environment.prod';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ValidationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("when validateProspect request", () => {
    const expectedResponse = {};
    const identificationType = 1;
    const identificationNumber = 1023013040;
    const testUrl = `${environment.url}${environment.endPoints.persons}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`; +

        service.validateProspect(identificationType, identificationNumber).subscribe((data: any) => {
          expect(data).toEqual(expectedResponse);
        });
    const httpMock = httpTestingController.expectOne({
      method: "GET",
      url: testUrl,
    });
    expect(httpMock.request.method).toBe("GET");
    httpMock.flush(expectedResponse);
    httpTestingController.verify();
  });


  it("when validateJudicialReports request", () => {
    const expectedResponse = {};
    const identificationType = 1;
    const identificationNumber = 1023013040;
    const testUrl = `${environment.url}${environment.endPoints.judicial_records}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`; +

        service.validateJudicialReports(identificationType, identificationNumber).subscribe((data: any) => {
          expect(data).toEqual(expectedResponse);
        });
    const httpMock = httpTestingController.expectOne({
      method: "GET",
      url: testUrl,
    });
    expect(httpMock.request.method).toBe("GET");
    httpMock.flush(expectedResponse);
    httpTestingController.verify();
  });

  it("when getScore request", () => {
    const expectedResponse = {};
    const identificationType = 1;
    const identificationNumber = 1023013040;
    const testUrl = `${environment.url}${environment.endPoints.score}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`; +

        service.getScore(identificationType, identificationNumber).subscribe((data: any) => {
          expect(data).toEqual(expectedResponse);
        });
    const httpMock = httpTestingController.expectOne({
      method: "GET",
      url: testUrl,
    });
    expect(httpMock.request.method).toBe("GET");
    httpMock.flush(expectedResponse);
    httpTestingController.verify();
  });
});
