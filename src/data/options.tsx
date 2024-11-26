import { CiSearch } from "react-icons/ci";
import { IoMusicalNotes  } from "react-icons/io5";
import { CiUser, CiHeart  } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

export const options = [
    {
        id:1,
        link:"/search",
        icono:<CiSearch size={20} strokeWidth={0.5} />,
    },
    {
        id:2,
        link:"/songs",
        icono:<IoMusicalNotes size={20} />,
    },
    {
        id:3,
        link:"/",
        icono:<FaHome size={20} />,
    },
    {
        id:4,
        link:"/user",
        icono:<CiUser size={20} strokeWidth={0.5} />,
    },
    {
        id:5,
        link:"/favorites",
        icono:<CiHeart size={20} strokeWidth={0.5} />,
    }
]