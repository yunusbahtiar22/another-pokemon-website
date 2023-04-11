import { Fragment } from "react";
import Image from "next/image";

const TYPE_COLOR: Record<string, string> = {
  bug: "text-[#9dc130]",
  dark: "text-[#5f606d]",
  dragon: "text-[#0773c7]",
  electric: "text-[#edd53f]",
  fairy: "text-[#ef97e6]",
  fighting: "text-[#d94256]",
  fire: "text-[#fc6c6d]",
  flying: "text-[#9bb4e8]",
  ghost: "text-[#7975d4]",
  grass: "text-[#5dbe62]",
  ground: "text-[#d78555]",
  ice: "text-[#98d8d8]",
  normal: "text-[#9a9da1]",
  poison: "text-[#b563ce]",
  psychic: "text-[#f85888]",
  rock: "text-[#cec18c]",
  steel: "text-[#b8b8d0]",
  water: "text-[#60a5fa]",
};

interface PokeCardProps {
  name: string;
  image: string;
  type: string[];
  id?: number;
}

export default function PokeCard(props: PokeCardProps) {
  const width = 100;
  const height = 100;
  return (
    <div className="grid place-items-center rounded-lg border border-gray-200 p-6 shadow-lg group">
      <div className="grid place-content-center w-[300px] h-[150px] relative">
        <span className="z-[-1] font-bold text-gray-300 text-[110px] tracking-wider block absolute w-full h-full top-[50%] left-[50%] mt-[-75px] ml-[-150px]">{`#${String(
          props.id
        ).padStart(3, "0")}`}</span>
        <Image
          className="transition group-hover:scale-[1.7]"
          src={props.image}
          alt={""}
          width={width}
          height={height}
        />
      </div>
      <div className="">
        <h3 className="text-center font-bold tracking-wide text-lg">
          {props.name}
        </h3>
        <p className="text-center">
          {props.type.map((item, index) => (
            <Fragment key={item}>
              <span
                className={`${
                  TYPE_COLOR[item.toLocaleLowerCase()]
                } font-semibold`}
              >
                {item}
              </span>{" "}
              {index < props.type.length - 1 && " | "}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
