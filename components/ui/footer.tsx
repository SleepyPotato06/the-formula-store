import { Orbitron, Lexend } from "next/font/google";

const orbitron_medium = Orbitron({ weight: "600", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "600", subsets: ["latin"] });
export default function Footer() {
  return (
    <div
      className={
        orbitron_medium.className +
        " relative bottom-0 left-0 right-0 h-12 bg-slate-50 flex justify-between items-center px-6 text-sm"
      }
    >
      <div>
        <span className="text-black">
          The<span className="text-red-600">Formula</span>Store™
        </span>
      </div>
      <div>
        <span className="text-black">
          © 2025 The<span className="text-red-600">Formula</span>Store™. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
