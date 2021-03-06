import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../models/pokemon";
import { Observable } from "rxjs";
import { CreatedPokemon } from "../models/created-pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  selectedPokemon! : Pokemon

  constructor(private http: HttpClient,) { }

  readonly url: string = 'https://testing.certant.com/pokedex-api/'

  getPokemons(userId: number) {
    return this.http.get(`${this.url}/pokemon?userId=${userId}`)
  }

  getPokemon(pokemonId: number){
    return this.http.get(`${this.url}pokemon?=${pokemonId}`);
  }
  addPokemon(pokemon : CreatedPokemon): Observable<any> {
    return this.http.post(`${this.url}pokemon`, pokemon);
  }

  editPokemon(pokemon: CreatedPokemon): Observable<any> {
    const urlPokemon= `${this.url}pokemon`;
    return this.http.put(urlPokemon, pokemon);
  }

  setCurrentPokemon(pokemon : Pokemon){
    this.selectedPokemon = pokemon
  }
  getCurrentPokemon(){
    return this.selectedPokemon
  }
}
