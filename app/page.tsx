import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-10 flex flex-col gap-6 sm:gap-8 md:gap-9">
      <Header />
      <Explorer />
      <Footer />
    </main>
  );
}
