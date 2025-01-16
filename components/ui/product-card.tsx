import Image from "next/image";
import { Orbitron, Lexend } from "next/font/google";

const orbitron_medium = Orbitron({ weight: "600", subsets: ["latin"] });
const lexend_light = Lexend({ weight: "300", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "600", subsets: ["latin"] });
export default function ProductCard(props) {
  return (
    <>
      <div className="min-w-[20rem] min-h-fit bg-slate-50 rounded-lg p-4 shadow-inner">
        <div className="flex justify-center items-center">
          <Image
            src={props.productImageSource}
            width={280}
            height={280}
            alt="Mclaren Senna Poster"
            className=""
          />
        </div>
        <div className={lexend_light.className}>{props.productTitle}</div>
        <div className={lexend_medium.className + " text-2xl"}>
          {props.productPrice}
        </div>
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full w-full mt-2 shadow-md shadow-red-500/50">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
