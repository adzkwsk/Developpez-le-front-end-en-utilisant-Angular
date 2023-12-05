import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  constructor(private http: HttpClient) {}

  loadInitialData(): Observable<Olympic[] | null> {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      retry(3),
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
        const country = data?.find((olympic: Olympic) => olympic.country === countryName) || null;
        if (!country) throw new Error("Country not found.");
        return country
      }),
      catchError(() => throwError(() => new Error("Country not found.")))
    );
  }
}
