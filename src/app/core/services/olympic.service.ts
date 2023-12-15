import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  constructor(private http: HttpClient) {}

  loadInitialData(): Observable<Olympic[] | null> {
    return this.http.get<Olympic[]>(Constants.OLYMPIC_DATA_URL).pipe(
      tap((value) => {
        this.olympics$.next(value);
      }),
      catchError((error) => {
        console.error(error);
        return throwError(() => new Error("An error occurred while loading data."));
      })
    );
  }

  getOlympics(): Observable<Olympic[] | null> {
    return this.olympics$.asObservable();
  }

  getOlympic(countryName: string): Observable<Olympic | null> {
    return this.olympics$.pipe(
      map((data) => {
        return data?.find((olympic: Olympic) => olympic.country === countryName) || null;
      })
    );
  }
}
