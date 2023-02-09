import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  domainUrl = 'https://rickandmortyapi.com/api';

  geAllCharacters(): Observable<any> {
    return this.http.get<any>(`${this.domainUrl}/character`);
  }
  getCharacter(id): Observable<any> {
    return this.http.get<any>(`${this.domainUrl}/character/${id}`);
  }

  getEventsData(): Observable<any> {
    return this.http.get<any>(`${this.domainUrl}/events-page`);
  }
  getEventsDataWithDateRange(dateRange): Observable<any> {
    return this.http.post<any>(
      `${this.domainUrl}/events-page-date`,
      dateRange,
      this.httpOptions
    );
  }

  getAlarmsHistoryData(): Observable<any> {
    return this.http.get<any>(`${this.domainUrl}/alarms-history-page`);
  }
}
