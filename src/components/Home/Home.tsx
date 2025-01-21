import React from 'react';
import KonectaCalendar from '../../assets/KCal.webp';
import Kami from '../../assets/Kami.svg';
import './Home.css';

interface HomeProps {
    heroRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({ heroRef }) => {


    return (
        <div className="hero" ref={heroRef}>
            <p className="sub">USE. LEARN. EARN. PROMOTE.</p>
            <h1>The one-stop Web3 learning and promotion platform</h1>
            <h3>Users and projects growing together through use, learning and promotion</h3>

            <div className="button-row">
                <a
                    href="https://pre.konecta.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary"
                >
                    Let's GO!
                </a>
                <a
                    href="https://x.com/konectA_Dao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                >
                    Join as Project
                </a>
            </div>
            <div className="image-container calendar-mask">
                <img src={KonectaCalendar} />
            </div>

            <div className="bottom-section">
                <div className="kami-container">
                    <img src={Kami} />
                </div>
                <div className="info-container">
                    <p className="sub">DO MISSIONS. EARN TIME. TAKE CONTROL.</p>
                    <h1 className="preRegistration">Pre-Registration</h1>
                    <h3 className="preRegistration">
                        Get early access to Konecta and be the first to test, earn, and co-own.
                    </h3>
                    <div className="button-row">
                        <a
                            href="https://pre.konecta.one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn primary"
                        >
                            Let's GO!
                        </a>
                        <a
                            href="https://x.com/konectA_Dao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                        >
                            Send Kami a DM
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
