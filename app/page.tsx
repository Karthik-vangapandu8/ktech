import Navbar from "@/components/navbar";
import TechTicker from "@/components/tech-ticker";
import HeroArchitecture from "@/components/hero-architecture";
import NotesJournal from "@/components/notes-journal";
import PortfolioFooter from "@/components/portfolio-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <TechTicker />
      <main>
        <HeroArchitecture />
        <NotesJournal />
      </main>
      <PortfolioFooter />
    </div>
  );
}
