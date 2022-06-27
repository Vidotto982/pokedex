import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from "../models/pokemon";
import { PokedexService } from "../service/pokedex.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Output() onGoBack: EventEmitter<any> = new EventEmitter();
  constructor(private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {}

  editPokemon(){
    this.pokedexService.setCurrentPokemon(this.pokemon)
  }

  goBack() {
    this.onGoBack.emit();
  }
}
