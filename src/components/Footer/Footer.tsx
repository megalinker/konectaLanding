import React from 'react';
import './Footer.css';
import Icon1OC from '/assets/OpenChatLogo.svg';
import Icon2Kami from '/assets/JPkami.svg';
import Icon3X from '/assets/X_icon.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* SVG at the top */}
            <div className="footer-svg-container">
                <svg
                    className="footer-svg"
                    width="100%"
                    height="50"
                    viewBox="0 0 2544 50"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="strokeGradientFooter1"
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
                            id="strokeGradientFooter2"
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
                        d="M500,1 L1273,1"
                        stroke="url(#strokeGradientFooter1)"
                        strokeWidth="1"
                        fill="none"
                    />
                    <path
                        d="M2044,1 L1273,1"
                        stroke="url(#strokeGradientFooter2)"
                        strokeWidth="1"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="footer-container">
                {/* Left: Text */}
                <div className="footer-left">
                    Konecta © 2025. All rights reserved.
                </div>

                {/* Right: Social Icons */}
                <div className="footer-right">
                    <a href="https://oc.app/community/mnxqn-oaaaa-aaaaf-bm4dq-cai/channel/249008524007198397170279379338618862603" target="_blank" rel="noopener noreferrer">
                        <img src={Icon1OC} alt="Icon 1" />
                    </a>
                    <a href="https://x.com/kami_kta" target="_blank" rel="noopener noreferrer">
                        <img src={Icon2Kami} alt="Icon 2" />
                    </a>
                    <a href="https://x.com/konectA_Dao" target="_blank" rel="noopener noreferrer">
                        <img src={Icon3X} alt="Icon 3" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
