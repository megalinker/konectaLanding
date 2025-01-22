import React from "react";
import "./Events.css";

const Events: React.FC = () => {
    return (
        <div className="events-container">
            <h2>Events</h2>
            <a
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary disabled"
            >
                Soon
            </a>
        </div>
    );
};

export default Events;
