"use client";

import Link from "next/link";
import { options } from "@/data/options";
import { useState } from "react";

const Options = () => {
  const [idselec, setIdselec] = useState(3);

  const HandleClickId = (id: number) => {
    setIdselec(id);
  };

  return (
    <li className="flex flex-col gap-y-8 w-20 mx-4 mt-12">
      {options.map(({ id, link, icono }) => (
        <ul key={id}>
          <button onClick={() => HandleClickId(id)}>
            <Link
              href={link}
              className={`h-12 w-12 rounded-full flex items-center justify-center shadow-xl ${id === idselec ? 'bg-[#FF0000] text-white scale-105' : 'bg-white'}  hover:bg-[#FF0000] hover:text-white duration-300`}
            >
              {icono}
            </Link>
          </button>
        </ul>
      ))}
    </li>
  );
};

export default Options;