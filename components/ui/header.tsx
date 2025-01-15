import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  IoCartOutline,
  IoPersonCircleOutline,
  IoSearch,
  IoHeartOutline,
} from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <header className="flex flex-row items-center justify-between p-6">
        <div>
          <Image src={Logo} height={200} width={200} alt="Logo" />
        </div>
        <div className="flex flex-row">
          <button className="bg-black hover:bg-red-600 h-11 w-11 rounded-l-lg flex justify-center items-center">
            <IoSearch className="text-white" size={20} />
          </button>
          <input
            placeholder="Search..."
            name=""
            id=""
            className="bg-white w-[60rem] h-[2.3rem] rounded-r-lg p-5 drop-shadow-lg border-solid border-t-4 border-b-4 border-r-4 border-zinc-200"
          ></input>
        </div>
        <div className="flex flex-row space-x-4 rounded-lg">
          <button className="bg-black hover:bg-red-600 h-11 px-4 py-2 rounded-md">
            <IoHeartOutline className="text-white" size={25} />
          </button>
          <button className="bg-black hover:bg-red-600 h-11 px-4 py-2 rounded-md">
            <IoCartOutline className="text-white" size={25} />
          </button>
          <button className="bg-black hover:bg-red-600 h-11 px-4 py-2 rounded-md">
            <IoPersonCircleOutline className="text-white" size={25} />
          </button>
        </div>
      </header>
      <div className="flex flex-row justify-between items-center px-[35rem] text-white bg-black h-12">
        <p>Hello</p>
      </div>
    </div>
  );
}
