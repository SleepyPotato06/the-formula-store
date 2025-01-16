import { Orbitron } from "next/font/google";
import ProductCard from "./product-card";
import MclarenPoster from "../../public/mclaren-senna-poster.png";

const orbitron_medium = Orbitron({ weight: "600", subsets: ["latin"] });

interface ProductRowProps {
  rowTitle: string;
}

export default function ProductRow(props: ProductRowProps) {
  return (
    <section className="p-4 overflow-x-clip">
      <span
        className={
          orbitron_medium.className +
          " text-black text-xl hover:decoration-red-600 hover:decoration-2 hover:underline hover:underline-offset-4"
        }
      >
        {props.rowTitle}
      </span>
      <div>
        <div className="overflow-x-scroll  no-scrollbar w-[95vw] mt-2">
          <div className="flex flex-row space-x-4">
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
            <ProductCard
              productImageSource={MclarenPoster}
              productTitle="McLaren Senna - Monaco GP - 2024 Poster"
              productPrice="85 USD"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
