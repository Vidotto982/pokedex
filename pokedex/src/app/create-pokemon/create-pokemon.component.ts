import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Pokemon } from "../models/pokemon";
import { PokedexService } from "../service/pokedex.service";
import { CreatedPokemon } from "../models/created-pokemon";

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  isEdit : boolean = false;
  @Input() pokemon: Pokemon | undefined;
  createdForm: FormGroup | any;
  abilitie: FormGroup | any;
  addAbilities: boolean = false
  addTypes : boolean = false
  typeForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder,
              private pokemonService: PokedexService,
  ) { }

  ngOnInit(): void {
    this.createdForm = this.formBuilder.group({
      name: [this.pokemon?.name ? this.pokemon.name : '', [Validators.required]],
      types: new FormArray([]),
      abilities : new FormArray([]),
      lvl: [this.pokemon?.lvl ? this.pokemon.lvl :  '', [Validators.required]],
      evolutionId:[this.pokemon ?.evolutionId ? this.pokemon.evolutionId :  '', [Validators.required]],
    });

    this.abilitie = new FormGroup({
      name : new FormControl(''),
      description: new FormControl(''),
    })

    this.typeForm = new FormGroup({
      type : new FormControl(''),
    })
  }
  addPokemon(){
    const createPokemon : CreatedPokemon ={
      pokemon: this.createdForm.getRawValue(),
      userId : localStorage['userId'],
    }
    console.log(createPokemon.userId)
    this.pokemonService.addPokemon(createPokemon).subscribe();
  }


  addType(){
    console.log(this.typeForm)
    this.createdForm.controls.types.push(this.typeForm);
    this.typeForm = new FormGroup({
      type : new FormControl(''),
    })
    this.addTypes = false;

  }

  addAbility() {
    console.log(this.abilitie)

    this.createdForm.controls.abilities.push(this.abilitie);
    this.abilitie = new FormGroup({
      name : new FormControl(''),
      description: new FormControl(''),
    })
    console.log(this.abilitie)

    this.addAbilities = false;
  }

  editPokemon() {

  }

}
