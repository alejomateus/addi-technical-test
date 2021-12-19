import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(private http: HttpClient) { }

  validateProspect(identificationType: string | number, identificationNumber: string | number): Observable<any> {
    return this.http.get(`${environment.url}${environment.endPoints.persons}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`,
    );
  }

  validateJudicialReports(identificationType: string | number, identificationNumber: string | number): Observable<any> {
    return this.http.get(`${environment.url}${environment.endPoints.judicial_records}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`,
    );
  }

  getScore(identificationType: string | number, identificationNumber: string | number) {
    return this.http.get(`${environment.url}${environment.endPoints.score}` +
      `?identificationType=${identificationType}&identificationNumber=${identificationNumber}`,
    );
  }
}
