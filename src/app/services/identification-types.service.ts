import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environment";
import { Observable } from "rxjs";

/**
 * Injectable
 */
@Injectable({
  providedIn: "root",
})
export class IdentificationTypesService {
  constructor(private http: HttpClient) { }
  getDocumentTypes(): Observable<any> {
    return this.http.get(
      environment.url +
      environment.endPoints.identificationTypes
    );
  }
}
