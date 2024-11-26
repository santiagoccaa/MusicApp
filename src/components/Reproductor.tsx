"use client";

import Image from "next/image";
import Collection from "./Collection";
import useMusic from "@/hooks/useMusic";

import { motion } from "framer-motion";
import { Audio } from "./Audio";

const Reproductor = () => {

  const {songSelected } = useMusic();

  return (
    <div className="flex flex-col w-3/6">
      <div className="relative flex justify-between">
        
      <Audio />
        <div className="mt-4">
          <h1 className="text-5xl text-gray-800 font-extrabold h-auto w-80">
            {songSelected.nombre}
          </h1>
          <h2 className="font-bold text-lg transform duration-300">
            {songSelected.artista}
          </h2>
        </div>
        <div className="relative flex items-center justify-center border-2 rounded-full border-red-400 w-72 h-72">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-60 h-60 flex items-center justify-center rounded-full shadow-2xl bg-gray-300 overflow-hidden"
          >
            <Image
              src={
                songSelected.imagen === ""
                  ? "/music/songicon.png"
                  : songSelected.imagen
              }
              priority
              width="400"
              height="400"
              className="w-60 h-60 rounded-full"
              alt="blinding lights"
            />
            <div className="absolute opacity-50 bottom-0 w-60 bg-gradient-to-b to-[#FF0000] via-[#FF2B2B] from-transparent h-28"></div>
          </motion.div>
        </div>
      </div>

      <Collection />
    </div>
  );
};

export default Reproductor;
