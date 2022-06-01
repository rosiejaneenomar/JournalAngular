import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = 'https://gorest.co.in/public/v2/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  post(user: User): Observable<any> {

    user.name = `${user.firstname} ${user.lastname}`;

    return this.httpClient.post(this.API, user)
      .pipe(
        tap(sourceValue => alert('Success')),
        catchError(error => {
          let errors: any = {};

          for(const e of error.error) {
            errors[e.field] = e.message;
          }
          return throwError(errors); 
        }));
  }
}
