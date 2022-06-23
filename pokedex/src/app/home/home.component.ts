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
  clear = '';
  searchName = '';
  pokemon: Pokemon[] = [];
  loading: any;
  constructor(private loginService: LoginService,
              private pokedexService: PokedexService,
  ) {
  }

  ngOnInit(): void {
    this.pokedexService.getPokemon();
  }

  // getPokemons(searchName: string) {
  //   if(!searchName){
  //     this.pokedexService.getPokemon(this.searchName)
  //       .subscribe((res: any) => this.pokemon = res.pokemon);
  //   }else {
  //     this.pokedexService.getPokemon(searchName).subscribe((res: any) => this.pokemon = res.pokemon);
  //   }
  // }


  logOut() {
    this.loginService.logOut();
  }

  private getPokemon(searchName: string) {

  }
}
