import { TestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { IdentificationTypesService } from "./identification-types.service";

describe("IdentificationTypesService", () => {
  let service: IdentificationTypesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IdentificationTypesService],
    });
    service = TestBed.inject(IdentificationTypesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
