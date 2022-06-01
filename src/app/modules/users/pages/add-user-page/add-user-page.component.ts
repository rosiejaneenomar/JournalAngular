import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { KeyVals } from 'src/app/core/models/keyvals';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  addUserErrors: KeyVals | null = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(user: User) {
    this.subscription.add(this.userService.post(user).pipe(
      catchError(errors => {
        this.addUserErrors = errors;
        console.log('addUserErrors', this.addUserErrors);
        return of(null);
      })
    ).subscribe());  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
