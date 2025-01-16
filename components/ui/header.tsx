import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  IoCartOutline,
  IoPersonCircleOutline,
  IoSearch,
  IoHeartOutline,
  IoCallOutline,
} from "react-icons/io5";
import { Orbitron, Lexend } from "next/font/google";

const orbitron_medium = Orbitron({ weight: "600", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "600", subsets: ["latin"] });

const pages = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "Clearance", link: "/clearance" },
  { id: "3", name: "By Team", link: "/by-team" },
  { id: "4", name: "By Driver", link: "/by-driver" },
  { id: "5", name: "Men", link: "/men" },
  { id: "6", name: "Women", link: "/women" },
];

export default function Header() {
  return (
    <div className="relative top-0 left-0 right-0 bg-stone-50">
      <header className="flex flex-row items-center justify-between p-6">
        <div className={orbitron_medium.className + " text-3xl"}>
          <span>The</span>
          <span className="text-red-600">Formula</span>
          <span>Store</span>
        </div>
        <div className="flex flex-row">
          {/* <button className="bg-black hover:bg-red-600 h-11 w-11 rounded-l-lg flex justify-center items-center">
            <IoSearch className="text-white" size={20} />
          </button> */}
          <input
            placeholder="Search..."
            name=""
            id=""
            className="bg-white w-[60rem] h-[2.3rem] rounded-md p-5 drop-shadow-lg"
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
      <div className="flex flex-row justify-center items-center space-x-4 px-[30rem] text-white bg-black h-12">
        <div className="flex flex-row space-x-10">
          {pages.map((page) => {
            return (
              <Link
                href={page.link}
                key={page.id}
                className={lexend_medium.className + " hover:text-red-600"}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row space-x-4 justify-center items-center">
          <IoCallOutline />
          <span>(123) 456-7890</span>
        </div>
      </div>
    </div>
  );
}
