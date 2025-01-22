import React from 'react';
import './PreFooter.css';

const PreFooter: React.FC = () => {
    // Helper function to open a URL in a new tab
    const openUrl = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="preFooterContainer">
            <div className="preFooter">
                <div className="preFooterText">
                    <p className="sub">Getting started</p>
                    <h2 className="preFooterTitle">Start your Konecta journey</h2>
                    <h3 className="preFooterSubtitle">Earn using your favorite apps</h3>
                </div>

                <div className="buttonRow">
                    <a
                        href="https://pre.konecta.one"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn primary"
                    >
                        Let's GO!
                    </a>
                    <a
                        href="https://x.com/kami_kta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary"
                    >
                        Join as a Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PreFooter;
