import { StatNameEnum } from '../../enum/pokemonEnum.ts'

export interface PokemonType {
  name: string
  id: number
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  stats: StatType[]
  sprites: {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
  }
  types: {
    slot: number
    type: TypeType
  }
}

export interface StatType {
  base_stat: number
  effort: number
  stat: {
    name: StatNameEnum
    url: string
  }
}


export interface AbilityType {
  id: number
  name: string
  flavor_text_entries: {
    flavor_text: string
    language: {
      name: string
    }
    version_group: {
      id: number
      name: string
      order: number
    }
  }[]
}

export interface TypeType {
  name: string
  url: string
}