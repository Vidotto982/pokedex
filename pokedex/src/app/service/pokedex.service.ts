import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  readonly url: string = 'https://testing.certant.com/pokedex-api/'
  getPokemon() {

  }
}
