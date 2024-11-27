"use client";

import React, { createContext, useState, ReactNode } from "react";

// Interface para los parametros de la cancion seleccionada
interface Song {
  nombre: string;
  artista: string;
  imagen: string;
  song: string;
}

// Tipo de datos para las funciones y variables
type MusicContextType = {
  boton: boolean;
  HandleClickPlay: () => void;
  songSelected: Song;
  HandleClickSongSelected: (song: Song) => void;
};

// Creacion del Context
const MusicContext = createContext<MusicContextType>({
  boton: false,
  HandleClickPlay: () => {},
  songSelected: {nombre: '', artista: '', imagen: '', song: ''},
  HandleClickSongSelected: () => {},
});

// Tipo de dato que es el children
type MusicProviderProps = {
  children: ReactNode;
};

const MusicProvider = ({ children }: MusicProviderProps) => {
  // Boton Play Pause
  const [boton, setBoton] = useState(true);
  const HandleClickPlay = () => {
    setBoton(!boton);
  };

  // Seleccionar Cancion
  const [songSelected, SetSongSelected] = useState<Song>({nombre: '', artista: '', imagen: '', song: '' });
  const HandleClickSongSelected = (song: Song) => {
    SetSongSelected(song);
  };

  return (
    <MusicContext.Provider
      value={{ 
        boton, 
        HandleClickPlay, 
        songSelected, 
        HandleClickSongSelected 
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicProvider };
export default MusicContext;
