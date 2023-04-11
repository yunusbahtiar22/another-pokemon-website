import type { NextApiRequest, NextApiResponse } from "next";
import pokemons from "@/pokemon.json";

type Pokemon = {
  id: number;
  name: Record<string, string>;
  type: string[];
  base: Record<string, number>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  const data = pokemons.map((pokemon: Pokemon) => ({
    ...pokemon,
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
      pokemon.id
    ).padStart(3, "0")}.png`,
  }));

  res.end(JSON.stringify(data));
}
