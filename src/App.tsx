import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MobileMenuComponent from './components/MobileMenuComponent/MobileMenuComponent';
import KonectaCalendar from './assets/KCal.webp';
import Home from './components/Home/Home';
import SVGLine from './components/SVGLine/SvgLine';
import Footer from './components/Footer/Footer';
import { Team } from './components/Team/Team';
import { persons } from './data/persons';
import PreFooter from './components/PreFooter/PreFooter';
import FAQ from './components/FAQ/FAQ';
import Events from './components/Events/Events';
import Partners from './components/Partners/Partners';
import { Partner } from './data/partners';
import Roadmap from './components/Roadmap/Roadmap';

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

  const [tooltipData, setTooltipData] = useState<{
    partner: Partner | null;
    x: number;
    y: number;
  }>({ partner: null, x: 0, y: 0 });

  const handlePartnerHover = (partner: Partner | null, x: number, y: number) => {
    setTooltipData({ partner, x, y });
  };


  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} openMenu={openMenu} />

      {isMenuOpen && <MobileMenuComponent scrollToSection={scrollToSection} closeMenu={closeMenu} />}
      <Home heroRef={sectionRefs.home} />
      <div className="postHeroLine">
        <SVGLine />
      </div>
      <div ref={sectionRefs.faq}>
        <FAQ />
      </div >
      <SVGLine />
      <div ref={sectionRefs.partners}>
        {tooltipData.partner && (
          <div className="partnersToolTip"
            style={{
              position: "fixed",
              top: tooltipData.y - 133,
              left: tooltipData.x + 125,
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "1em",
              borderRadius: "16px",
              width: "200px",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            <h3>{tooltipData.partner.title}</h3>
            <p>{tooltipData.partner.description}</p>
          </div>
        )}
        <Partners onPartnerHover={handlePartnerHover} />
      </div >
      <SVGLine />
      <div ref={sectionRefs.roadmap}>
        <Roadmap />
      </div >
      <SVGLine />
      <div ref={sectionRefs.events}>
        <Events />
      </div >
      <SVGLine />
      <div ref={sectionRefs.team}>
        <Team persons={persons} />
      </div >
      <SVGLine />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
