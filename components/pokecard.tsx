import { type NameURL, usePokemonDetail } from "@/utils/fetch-hooks";
import Image from "next/image";

export default function PokeCard(props: NameURL) {
  const { data } = usePokemonDetail(props.name, props.url);
  console.log(data);
  return (
    <div>
      <Image
        src={data?.sprites.other.dream_world.front_default}
        alt={""}
        width={120}
        height={120}
      />
      <h3>{data?.name}</h3>
    </div>
  );
}
