import { useQuery } from "@tanstack/react-query";

export type PaginationURL = string | null;
export type URL = string;
export type NameURL = { name: string; url: URL };
type Ability = {
  ability: NameURL;
  is_hidden: boolean;
  slot: number;
};
type PokemonForm = NameURL;
type GameIndex = { game_index: number; version: NameURL };
type Move = {
  move: NameURL;
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: NameURL;
    version_group: NameURL;
  }>;
};
type Stat = {
  base_stat: number;
  effort: number;
  stat: NameURL;
};
type PokemonType = {
  slot: number;
  type: NameURL;
};

interface PokemonIndex {
  next: PaginationURL;
  previous: PaginationURL;
  count: number;
  results: Array<NameURL>;
}

interface PokemonDetail {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<PokemonForm>;
  game_indices: Array<GameIndex>;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: URL;
  name: string;
  order: number;
  past_types: any[];
  species: NameURL;
  weight: number;
  moves: Array<Move>;
  sprites: any;
  stats: Array<Stat>;
  types: Array<PokemonType>;
}

async function fetchPokemonIndex(): Promise<PokemonIndex> {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return await data.json();
}

export function usePokemonIndex() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonIndex,
  });
}

export function usePokemonDetail(name: string, url: URL) {
  return useQuery({
    queryKey: [name],
    queryFn: async (): Promise<PokemonDetail> => {
      const data = await fetch(url);
      return await data.json();
    },
  });
}
