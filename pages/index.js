import About from "@/components/About";
import Elysiums from "@/components/Elysiums";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lila from "@/components/Lila";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About id={"about"} />
      <Elysiums />
      <Lila />
      <Tokenomics />
      <Roadmap />
    </>
  );
}
