import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  isValid: any;
  loginForm: FormGroup = new FormGroup({
    tenant_email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService, private route: Router) { }
  ngOnInit(): void {
    if (localStorage.getItem('auth') && localStorage.getItem('auth')) {
      this.route.navigate(['home'])
    }
  }
  setTenantEmail(event:any){
    this.loginForm.get('tenant_email')?.setValue(event?.target.value)
  }
  setTenantPassword(event:any){
    this.loginForm.get('password')?.setValue(event.target.value)
  }
  login() {
    this.loginService.checkCredentials(this.loginForm?.value)
    this.isValid = localStorage.getItem('auth');
  }
}
