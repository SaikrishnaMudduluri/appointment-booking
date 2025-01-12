import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../../../store/user/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private store: Store, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['admin123', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.http.get('/login', {params: this.loginForm.value}).subscribe((res: any)=>{
        console.log(res);
        const userData = {
          id: res._id,
          firstName: res.firstName,
          lastName: res.lastName,
          role: res.role
        }
        localStorage.setItem("token", res.token);
        localStorage.setItem("userData", JSON.stringify(userData));
        this.store.dispatch(loginSuccess({ user: res }));

        this.router.navigate(['/home'])
      })
    }
  }

}