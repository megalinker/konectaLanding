import React from 'react';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';
import KonectaLogo from '/assets/konectaLogo.webp';

interface NavbarProps {
    scrollToSection?: (section: string) => void;
    openMenu?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, openMenu }) => {
    // Hamburger on screens below 1000px:
    const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

    const path1 = 'M500,49 L1273,49';
    const path2 = 'M2044,49 L1273,49';

    return (
        <nav className={`navbar`}>
            <div className="navbar-container">
                {/* Left: Logo */}
                <div className="navbar-left">
                    <img
                        src={KonectaLogo}
                        alt="Konecta Logo"
                        style={{ height: '50px', width: 'auto' }}
                    />
                </div>

                {/* Center: Menu items (show only if NOT mobile) */}
                {!isMobile && (
                    <div className="navbar-center">
                        <div className="navbar-text-background">
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('home')}>
                                Home
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('faq')}>
                                FAQ
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('partners')}>
                                Partners
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('missions')}>
                                Missions
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('roadmap')}>
                                Roadmap
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('events')}>
                                Events
                            </button>
                            <button className="navbar-button" onClick={() => scrollToSection && scrollToSection('team')}>
                                Team
                            </button>
                        </div>
                    </div>
                )}

                {/* Right: Pre-Register button on non-mobile screens */}
                {!isMobile && (
                    <div className="navbar-right">
                        <a
                            href="https://pre.konecta.one"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="navbar-preregister-button">
                                Pre-Register
                            </button>
                        </a>
                    </div>
                )}

                {/* Right: Hamburger menu (show only if mobile) */}
                {isMobile && (
                    <button
                        className="navbar-menu-button"
                        onClick={() => openMenu && openMenu()}
                        aria-label="Open Menu"
                    >
                        <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </button>
                )}

                {/* SVG Lines */}
                <div className="navbar-svg-container">
                    <svg
                        className="navbar-svg"
                        width="100%"
                        height="50"
                        viewBox="0 0 2544 50"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient
                                id="strokeGradient"
                                gradientUnits="userSpaceOnUse"
                                x1="1272"
                                y1="0"
                                x2="500"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient
                                id="strokeGradient2"
                                gradientUnits="userSpaceOnUse"
                                x1="1272"
                                y1="0"
                                x2="2044"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <path
                            className="shape"
                            d={path1}
                            stroke="url(#strokeGradient)"
                            strokeWidth="1"
                            fill="none"
                        />
                        <path
                            className="shape"
                            d={path2}
                            stroke="url(#strokeGradient2)"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
