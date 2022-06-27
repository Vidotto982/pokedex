import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { LoginService } from "../service/login.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private sessionService: LoginService,
             ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.sessionService.isLoggedIn()) {
      if (route.url[0]?.path === 'login') {
        this.router.navigate(['/home']);
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
