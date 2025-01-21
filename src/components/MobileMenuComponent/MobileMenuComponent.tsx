import React, { useEffect, useRef } from 'react';
import './MobileMenuComponent.css';
import KonectaLogo from '/assets/konectaLogo.webp';

interface MobileMenuComponentProps {
    scrollToSection?: (section: string) => void;
    closeMenu: () => void;
}

const MobileMenuComponent: React.FC<MobileMenuComponentProps> = ({ scrollToSection, closeMenu }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (section: string) => {
        if (scrollToSection) {
            scrollToSection(section);
        }
        closeMenu();
    };

    const handlePreRegisterClick = () => {
        window.open('https://pre.konecta.one', '_blank', 'noopener,noreferrer');
        closeMenu();
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeMenu]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMenu]);

    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-container" ref={menuRef} role="menu">
                {/* Logo */}
                <div className="mobile-menu-logo">
                    <img src={KonectaLogo} alt="Konecta Logo" />
                </div>

                {/* Menu Items */}
                <nav className="mobile-menu-nav">
                    <button
                        onClick={() => handleMenuItemClick('home')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('about-us')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        About Us
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('faq')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('partners')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Partners
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('missions')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Missions
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('roadmap')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Roadmap
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('events')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Events
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('team')}
                        className="mobile-menu-item"
                        role="menuitem"
                    >
                        Team
                    </button>
                </nav>

                {/* Pre-Register Button */}
                <div className="mobile-menu-pre-register">
                    <button
                        onClick={handlePreRegisterClick}
                        className="mobile-menu-preregister-button"
                    >
                        Pre-Register
                    </button>
                </div>

                {/* Close button */}
                <button
                    className="mobile-menu-close-button"
                    onClick={closeMenu}
                    aria-label="Close Menu"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default MobileMenuComponent;
