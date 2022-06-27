import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Login } from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url: string = 'https://testing.certant.com/pokedex-api/login'
  constructor(private http: HttpClient,
              private router: Router,
  ) { }

  isLoggedIn() {
    if(localStorage.getItem("userId")){
      return true
    }
    return false;
  }

  loginUser(login : Login) : Observable<any>{
    let header = new HttpHeaders().set('Type-content', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', '*')
      .set('Access-Control-Allow-Headers', '*')
    return this.http.post(this.url, login, {headers: header});
  }

  logOut() {
    localStorage.removeItem("userId");
    this.router.navigate(['/login']);
  }
  addToken(r: any) {
    localStorage.setItem("userId", r.userId,)
  }

}
