import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, Validators
} from '@angular/forms';
import { KeyVals } from 'src/app/core/models/keyvals';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() errors: KeyVals | null = null;
  @Output() submit = new EventEmitter<User>();
  @Input() title: string | null = null;

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      status: ['active'],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.validateForm);
    if (this.errors) {
      Object.keys(this.errors).forEach((k) => {
        this.getErrorServer(k);
      });
    }
  }

  getErrorServer(formResponseKey: string): void {
    let key = formResponseKey;
    if (this.validateForm && this.errors && this.errors[formResponseKey]) {
      if (formResponseKey === 'email') {
        key = 'emailServer';
      }
      this.validateForm.controls[formResponseKey].setErrors({ [key]: true });
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.errors = null;
      this.submit.emit(this.validateForm.getRawValue());
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    return {};
  };

  onClear() {
    this.validateForm.reset();
  }
}
