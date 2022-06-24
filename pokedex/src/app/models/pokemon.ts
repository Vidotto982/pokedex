export interface Pokemon {
  name : string,
  type : string,
  abilities: Ability[];
  image : string,
  lvl : number,
  id: number,
}

export interface Ability {
  name: string,
  description: string,

}
