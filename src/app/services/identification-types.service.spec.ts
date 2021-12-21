import { TestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { IdentificationTypesService } from "./identification-types.service";
import { environment } from "environments/environment.prod";

describe("IdentificationTypesService", () => {
  let service: IdentificationTypesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IdentificationTypesService],
    });
    service = TestBed.inject(IdentificationTypesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("when getDocumentTypes request", () => {
    const expectedResponse = {};
    const testUrl = `${environment.url}${environment.endPoints.identificationTypes}`;
    service.getDocumentTypes().subscribe((data: any) => {
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
