import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API = 'https://gorest.co.in/public/v2/posts';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(this.API)
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
