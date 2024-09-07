import About from "@/components/About";
import Blog from "@/components/Blog";
import Elysiums from "@/components/Elysiums";
import Footer from "@/components/Footer";
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
      <About />
      <Elysiums />
      <Lila />
      <Tokenomics />
      <Roadmap />
      <Blog />
      <Footer />
    </>
  );
}
