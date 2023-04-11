export type Nullable<T> = T | null;
export type URLString = string;
export type NameURLObject = { name: string; url: URLString };
export type Ability = {
  ability: NameURLObject;
  is_hidden: boolean;
  slot: number;
};

export type PokemonForm = NameURLObject;

export type GameIndex = { game_index: number; version: NameURLObject };

export type Move = {
  move: NameURLObject;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NameURLObject;
    version_group: NameURLObject;
  }[];
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NameURLObject;
};

export type PokemonType = {
  slot: number;
  type: NameURLObject;
};

export type PokemonIndex = {
  next: URL;
  previous: URL;
  count: number;
  results: NameURLObject[];
};

export type PokemonDetail = {
  abilities: Ability[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: URL;
  name: string;
  order: number;
  past_types: any[];
  species: NameURLObject;
  weight: number;
  moves: Move[];
  sprites: any;
  stats: PokemonStat[];
  types: PokemonType[];
};
