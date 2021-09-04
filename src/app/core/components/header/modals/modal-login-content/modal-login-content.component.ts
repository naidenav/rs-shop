import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login-content',
  templateUrl: './modal-login-content.component.html',
  styleUrls: ['./modal-login-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalLoginContentComponent implements OnInit {
  public form!: FormGroup;

  public isLoginForm: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit() {}

  public toRegistrationForm() {
    this.isLoginForm = false;
  }

  public toLoginForm() {
    this.isLoginForm = true;
  }
}
