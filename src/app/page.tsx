import HomePage from "@/components/HomePage";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import styles from "@/styles/__page-layout-8f7e6d5c-a9b8-4c7d-b6e5-8e00db729481.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.page_container}>
      <Header />
      <ScrollProgress />
      <HomePage />
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
    </>
  );
}
