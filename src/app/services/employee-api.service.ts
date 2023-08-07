import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError,throwError,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {
  url="https://localhost:44318/api/Employees"; 
  errorMessage = '';
  constructor(private http:HttpClient) { }  //`${this.API_URL}/endpoint`)

  employeeData() : Observable<any>{
    return this.http.get(this.url).pipe(
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  sendData(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
