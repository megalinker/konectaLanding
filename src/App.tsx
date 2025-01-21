import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MobileMenuComponent from './components/MobileMenuComponent/MobileMenuComponent';
import KonectaCalendar from './assets/KCal.webp';
import Home from './components/Home/Home';
import SVGLine from './components/SVGLine/SvgLine';
import Footer from './components/Footer/Footer';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    partners: useRef<HTMLDivElement>(null),
    missions: useRef<HTMLDivElement>(null),
    roadmap: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      const navbarHeight = 133;
      const elementPosition = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} openMenu={openMenu} />

      {isMenuOpen && <MobileMenuComponent scrollToSection={scrollToSection} closeMenu={closeMenu} />}
      <Home heroRef={sectionRefs.home} />
      <div className="postHeroLine">
        <SVGLine />
      </div>
      <Footer />
    </div>
  );
}

export default App;
