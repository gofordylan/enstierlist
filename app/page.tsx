import Header from "@/components/Header";
import TierList from "@/components/TierList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 flex flex-col gap-8 sm:gap-12 md:gap-14">
      <Header />
      <TierList />
      <Footer />
    </main>
  );
}
