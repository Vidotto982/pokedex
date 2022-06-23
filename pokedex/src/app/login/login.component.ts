import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Login } from "../models/login";
import { LoginService } from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createdForm: FormGroup | any;
  login: Login [] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: LoginService) {
  }

  email: string | undefined;
  password: string | undefined;

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]
      ]
    })
  }

  logIn(res: any) {
    localStorage.setItem("Token", res.token)
  }

  submit() {
    this.service.loginUser(this.createdForm.getRawValue())
      .subscribe(r => {
          console.log(r)
          this.router.navigate(['/home']);
          this.service.addToken(r);
        },
        error => {
          console.log("error");
        });
  }

}
