import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";
import { PokedexService } from "../service/pokedex.service";
import { Pokemon } from "../models/pokemon";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  _pokemon: Pokemon | undefined;
  constructor(private loginService: LoginService,
              private pokedexService: PokedexService,
  ) {
  }

  ngOnInit(): void {
    this.pokedexService.getPokemons(localStorage['userId']).subscribe(((res: any) => {
      this.pokemons = res
    console.log(this.pokemons)
    }
  ));
  }


  logOut() {
    this.loginService.logOut();
  }

  select(pokemon: Pokemon) {
    this._pokemon = pokemon;
  }
}
