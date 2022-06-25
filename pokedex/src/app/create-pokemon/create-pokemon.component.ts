import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pokemon } from "../models/pokemon";
import { PokedexService } from "../service/pokedex.service";

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  isEdit : boolean = false;
  @Input() pokemon: Pokemon | undefined;
  createdForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,
              private pokemonService: PokedexService,

  ) { }

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      name: [this.pokemon?.name ? this.pokemon.name : '', [Validators.required]],
      type: [this.pokemon?.type ? this.pokemon.type : '', [Validators.required]],
      lvl: [this.pokemon?.lvl ? this.pokemon.lvl :  '', [Validators.required]
      ]
    })
  }
  addPokemon(){
    this.pokemonService.addPokemon(this.createdForm.getRawValue()).subscribe();
  }


  editPokemon() {

  }

}
