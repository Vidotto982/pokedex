import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient,) { }

  readonly url: string = 'https://testing.certant.com/pokedex-api/'

  getPokemons(userId: number) {
    return this.http.get(`${this.url}/pokemon?userId=${userId}`)
  }

  getPokemon(pokemonId: number){
    return this.http.get(`${this.url}pokemon?=${pokemonId}`);
  }
}
