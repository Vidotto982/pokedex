import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Pokemon } from "../models/pokemon";
import { PokedexService } from "../service/pokedex.service";
import { CreatedPokemon } from "../models/created-pokemon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;
  @Input() pokemonEdit!: Pokemon;

  isEdit: boolean = false;
  createdForm: FormGroup | any;
  abilitie: FormGroup | any;
  addAbilities: boolean = false
  addTypes: boolean = false
  typeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private pokemonService: PokedexService,
  ) {
  }

  ngOnInit(): void {
    if(this.router.url == '/edit'){
      this.isEdit = true;
      if(this.isEdit){
        this.getCurrentPokemon();
      }
    }
    this.createdForm = this.formBuilder.group({
      name: new FormControl(this.pokemon?.name ? this.pokemon.name : '', [Validators.required]),
      type: new FormArray([]),
      abilities: new FormArray([]),
      lvl: new FormControl(this.pokemon?.lvl ? this.pokemon.lvl : '', [Validators.required]),
      evolutionId: new FormControl(this.pokemon?.evolutionId ? this.pokemon.evolutionId : null, [Validators.required]),
      image: new FormControl (this.pokemon?.evolutionId ? this.pokemon.evolutionId : '', [Validators.required]),
      id: this.pokemon?.id
    });

    this.abilitie = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    })

    this.typeForm = new FormGroup({
      type: new FormControl(''),
    })
  }

  addPokemon() {
    const createPokemon: CreatedPokemon = {
      pokemon: this.createdForm.getRawValue(),
      userId: localStorage['userId'],
    }
    this.pokemonService.addPokemon(createPokemon).subscribe()
  }


  addType() {
    this.createdForm.controls.type.push(this.typeForm.controls.type);
    this.typeForm = new FormGroup({
      types: new FormControl(''),
    })
    this.addTypes = false;

  }

  addAbility() {
    this.createdForm.controls.abilities.push(this.abilitie);
    this.abilitie = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    })
    this.addAbilities = false;
  }

  editPokemon() {
    if (this.pokemon) {
      this.pokemonService.editPokemon(this.createdForm.getRawValue()).subscribe();
    }
  }

  getCurrentPokemon(){
    this.pokemon =   this.pokemonService.getCurrentPokemon();
  }
}
