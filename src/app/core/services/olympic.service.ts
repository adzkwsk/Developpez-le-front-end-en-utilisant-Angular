import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    console.log("olympicservice")
    return this.http.get<any>(this.olympicUrl).pipe(
      tap((value) => {
        console.log(value)
        this.olympics$.next(value)
      }),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics(): Observable<Olympic[] | null> {
    return this.olympics$.asObservable();
  }

  getOlympic(countryName: string): Observable<Olympic | null> {
    console.log("getCountryData", countryName)
    return this.olympics$.pipe(
      map((data) => data?.find((olympic: Olympic) => olympic.country === countryName) || null )
    );
  }
}
