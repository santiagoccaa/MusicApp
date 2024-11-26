import { MdLibraryMusic } from "react-icons/md";
import { GoGear, GoBell } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="mx-2 flex items-center justify-between p-4">
      <MdLibraryMusic size={30} color="#000" />
      <li className="flex items-center gap-6">
        <ul>
          <GoGear size={22} />
        </ul>
        <ul>
          <GoBell size={22} />
        </ul>
        <ul className="flex items-center gap-2">
          <h2 className="text-md font-bold">Username</h2>
          <Image src="/user_1.png" width="80" height="80" className="w-12 h-12" priority alt="Imagen user" />
        </ul>
      </li>
    </nav>
  );
};

export default NavBar;
