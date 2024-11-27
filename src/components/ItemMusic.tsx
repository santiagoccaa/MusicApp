"use client";

import useMusic from "@/hooks/useMusic";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa";

interface Data {
  nombre: string;
  artista: string;
  imagen: string;
  song: string;
}

const ItemMusic = ({ data }: { data: Data }) => {
  const { HandleClickSongSelected, songSelected, boton } = useMusic();

  const { nombre, artista, imagen } = data;

  return (
    <div
      typeof="button"
      onClick={() => {
        HandleClickSongSelected(data);
      }}
      className={` ${
        songSelected.nombre === nombre
          ? "border-b-4 border-[#FF0000] scale-105 shadow-2xl"
          : "bg-white shadow-sm"
      } ml-4  w-80 py-2 border-[1px] border-gray-300 rounded-lg flex items-center duration-300 justify-between cursor-pointer`}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={imagen}
          width="50"
          height="50"
          alt="muerte"
          className="h-12 w-12 rounded-full ml-4"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{nombre}</h1>
          <h2 className="font-medium text-sm -mt-2 text-gray-700">{artista}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemMusic;
