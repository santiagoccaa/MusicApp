'use client'

import ItemMusic from "./ItemMusic";
import { motion } from 'framer-motion';
import { music } from "@/data/music";

const PlayList = () => {
  return (
    <motion.div
      initial={{ x: '20px',  }}
      animate={{ x: 0,}} 
      transition={{
        type: "spring", 
        stiffness: 50, 
        damping: 10,
      }}
      className="mx-20 flex flex-col"
    >
      <h1 className="font-bold ml-4 text-lg mb-4 text-gray-900">
        PlayList
      </h1>

      <div className="flex flex-col items-center gap-y-6 h-[28rem] w-[28rem] p-4 overflow-y-scroll scroll">   
      {
        music.map(m => (
        <ItemMusic key={m.id} data={{nombre: m.nombre, artista: m.artista, imagen: m.imagen, song:m.song}}/>
        ))
      }
      </div>
    </motion.div>
  );
};

export default PlayList;