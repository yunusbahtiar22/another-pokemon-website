import { useQuery } from "@tanstack/react-query";
import { PokemonIndex, PokemonDetail } from "@/types/pokemon";
import { type URLString } from "@/types/pokemon";

type Pokemon = {
  id: number;
  name: Record<string, string>;
  type: string[];
  base: Record<string, number>;
  image: string;
};

const indexUrl =
  process.env.NEXT_PUBLIC_ENV === "development"
    ? "http://localhost:3000/api/pokemon"
    : "https://another-pokemon-website.vercel.app/api/pokemon";

async function fetchPokemonIndex(): Promise<PokemonIndex> {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return await data.json();
}

async function getPokemon(): Promise<Pokemon[]> {
  const data = await fetch(indexUrl);
  return await data.json();
}

export function usePokemonIndex() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonIndex,
  });
}

export function usePokemonDetail(name: string, url: string) {
  return useQuery({
    queryKey: [name],
    queryFn: async (): Promise<PokemonDetail> => {
      const data = await fetch(url);
      return await data.json();
    },
  });
}

export function usePokemonQuery() {
  return useQuery({ queryKey: ["pokemons"], queryFn: getPokemon });
}