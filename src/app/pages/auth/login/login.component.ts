import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onLogin(){
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("name", "true");
    this.router.navigate(['/dashboard/group']);
  }

  get f() {
    return this.loginForm.controls;
  }  

  onSubmit(formData:any) {
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("name", formData.name);
    this.router.navigate(['/dashboard/group']);
  }
}
