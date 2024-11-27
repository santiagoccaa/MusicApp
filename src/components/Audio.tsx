import { FaRepeat } from "react-icons/fa6";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";


import useMusic from "@/hooks/useMusic";
import React, { useEffect, useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle, FaRandom } from "react-icons/fa";

export const Audio = () => {

  const audioRef = useRef<HTMLAudioElement>(null);
  const { HandleClickPlay, boton, songSelected } = useMusic();
  
  useEffect(() => {
    if (audioRef.current) {
      if (boton) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [boton, songSelected]);
  const [loop, setLopp] = useState(false);
  const handleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
    }
    setLopp(!loop);
    console.log(loop);
  };
  const [progress, setProgress] = useState(0);
  const updateProgress = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => audio.removeEventListener("timeupdate", updateProgress);
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        className="absolute top-24 left-0"
        src={songSelected.song}
      ></audio>

      <div className="absolute bottom-12 left-0 flex items-center justify-between w-72 rounded-2xl h-12 border-b-4 border-[#FF0000] shadow-sm">
        <button
          onClick={() => handleRepeat()}
          className={`active:scale-95 duration-100 ml-4 ${
            loop ? "text-[#FFAA00]" : "text-[#2E2E2E]"
          }`}
        >
          <FaRepeat size={20} />
        </button>
        <button className="active:scale-95  duration-100">
          <TbPlayerTrackPrevFilled size={20} color="#2E2E2E" />
        </button>
        <button
          onClick={() => HandleClickPlay()}
          className="active:scale-95  duration-100"
        >
          {!boton ? (
            <FaPlayCircle size={25} color="#2E2E2E" />
          ) : (
            <FaPauseCircle size={25} color="#2E2E2E" />
          )}
        </button>
        <button className="active:scale-95  duration-100">
          <TbPlayerTrackNextFilled size={20} color="#2E2E2E" />
        </button>
        <button className="active:scale-95 duration-100 mr-4">
          <FaRandom size={20} color="#2E2E2E" />
        </button>
      </div>
    </>
  );
};
