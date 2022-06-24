import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from "../models/pokemon";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   @Input() pokemon: Pokemon | undefined;
   @Output() pokemonEmitter = new EventEmitter<Pokemon>();


  constructor() { }

  ngOnInit(): void {

  }

  unSet() {
    this.pokemonEmitter.emit(this.pokemon = undefined);
  }
}
