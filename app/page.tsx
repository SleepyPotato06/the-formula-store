import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ProductRow from "@/components/ui/product-row";

export default function Home() {
  return (
    <main className="overflow-auto">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <ProductRow rowTitle="Featured" />
        <ProductRow rowTitle="Collectibles" />
        <ProductRow rowTitle="Gifts & Accesories" />
      </div>
      <Footer />
    </main>
  );
}
