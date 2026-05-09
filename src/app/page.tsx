import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { EditorialPromise } from "@/components/Promise";
import { Programs } from "@/components/Programs";
import { Counselling } from "@/components/Counselling";
import { Process } from "@/components/Process";
import { Placements } from "@/components/Placements";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Partners />
        <EditorialPromise />
        <Programs />
        <Process />
        <Counselling />
        <Placements />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
