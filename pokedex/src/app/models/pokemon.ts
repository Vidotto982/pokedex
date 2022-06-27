export interface Pokemon {
  name : string,
  type : Types[],
  abilities: Ability[];
  image : string,
  lvl : number,
  evolutionId: number | undefined,
  id: number,
}
export interface Types {
type: string,
}

export interface Ability {
  name: string,
  description: string,
}
