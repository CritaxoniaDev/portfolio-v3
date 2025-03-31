import HomePage from "@/components/HomePage";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <>
    <div className="font-[family-name:var(--font-geist-sans)] tracking-tighter">
      <Header />
      <ScrollProgress />
      <HomePage />
      <About />
      <Experience />
      <Education />
    </div>
    </>
  );
}
