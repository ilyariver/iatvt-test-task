import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs'
import { Items } from '../../../../types/data'

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private _jsonURL: string = 'assets/salereports.json'

  constructor(private _http: HttpClient) {

  }

  getSaleItems(): Observable<Items[]> {
    return this._http.get<Items[]>(this._jsonURL)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error')
  }

}
