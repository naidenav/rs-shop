import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { loginUser, registerUser } from 'src/app/redux/actions/user-profile.actions';
import { AppState } from 'src/app/redux/state/app.state';

@Component({
  selector: 'app-modal-login-content',
  templateUrl: './modal-login-content.component.html',
  styleUrls: ['./modal-login-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalLoginContentComponent implements OnInit {
  public loginForm!: FormGroup;
  public registrationForm!: FormGroup;

  public isLoginForm: boolean = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      newLogin: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
    });
  }

  loginSubmit() {
    const user = {
      login: this.loginForm.get('login')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.store.dispatch(loginUser(user));
  }

  registrationSubmit() {
    const userInfo = {
      firstName: this.registrationForm.get('firstName')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      login: this.registrationForm.get('newLogin')?.value,
      password: this.registrationForm.get('newPassword')?.value,
    };
    this.store.dispatch(registerUser(userInfo));
  }

  public toRegistrationForm() {
    this.isLoginForm = false;
  }

  public toLoginForm() {
    this.isLoginForm = true;
  }
}
