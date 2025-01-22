import React from "react";
import { Partner, partners } from "../../data/partners";
import "./Partners.css";

type PartnersProps = {
    onPartnerHover?: (partner: Partner | null, x: number, y: number) => void;
};

const Partners: React.FC<PartnersProps> = ({ onPartnerHover }) => {
    return (
        <div className="partners-container">
            <h2>Partners</h2>
            <div className="carousel">
                <div className="carousel-track">
                    {partners.map((partner, index) => (
                        <div
                            className="logo-container"
                            key={index}
                            // When mouse enters, let parent know we hovered a specific partner
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                onPartnerHover?.(partner, e.clientX, e.clientY);
                            }}
                            // When mouse moves, update coords so tooltip follows the cursor
                            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                                onPartnerHover?.(partner, e.clientX, e.clientY);
                            }}
                            // When mouse leaves, clear the tooltip
                            onMouseLeave={() => {
                                onPartnerHover?.(null, 0, 0);
                            }}
                        >
                            <img src={partner.logo} alt={partner.title} />
                            {/* No internal tooltip here anymore */}
                        </div>
                    ))}

                    {/* Duplicate for marquee effect */}
                    {partners.map((partner, index) => (
                        <div
                            className="logo-container"
                            key={`dup-${index}`}
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                onPartnerHover?.(partner, e.clientX, e.clientY);
                            }}
                            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                                onPartnerHover?.(partner, e.clientX, e.clientY);
                            }}
                            onMouseLeave={() => {
                                onPartnerHover?.(null, 0, 0);
                            }}
                        >
                            <img src={partner.logo} alt={partner.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
