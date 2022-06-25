import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from "../service/login.service";
import { Pokemon } from "../models/pokemon";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showBackButton: boolean = false;
  @Output() pokemonEmitter = new EventEmitter<Pokemon>();

  constructor(private loginService: LoginService,
              ) { }

  ngOnInit(): void {
  }

  unSet(){
    this.pokemonEmitter.emit();

  }
    logout() {
        this.loginService.logOut()
    }


}
