import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@zummy/users';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'zummy-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = 'Email of Password is wrong';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._initLoginForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) return;
    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value,
    };
    this.auth.login(loginData.email, loginData.password).subscribe(
      (user) => {
        this.authError = false;
        this.localstorageService.setToken(user.token);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        this.authError = true;
        if (error.status !== 400) {
          this.authMessage = 'Error is the Service, please try again later!';
        }
      }
    );
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
