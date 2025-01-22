import React, { useState } from "react";
import { faqs, FAQItem as FAQItemType } from "../../data/faqData";
import "./FAQ.css";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Split the answer by newlines to create paragraphs
    const blocks = answer.split("\n\n");

    return (
        <div className="faq-item">
            <div
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {question}
                <span className="toggle-indicator">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    {blocks.map((block, idx) => {
                        // If block starts with bullet characters, render as unordered list
                        if (block.trim().startsWith("•") || block.trim().startsWith("-")) {
                            const lines = block.split("\n").filter(line => line.trim() !== "");
                            return (
                                <ul key={idx}>
                                    {lines.map((line, li) => {
                                        const trimmed = line.trim().replace(/^[-•]\s*/, "");
                                        return <li key={li}>{trimmed}</li>;
                                    })}
                                </ul>
                            );
                        }
                        // Otherwise render as a paragraph
                        return <p key={idx}>{block}</p>;
                    })}
                </div>
            )}
        </div>
    );
};

const FAQ: React.FC = () => {

    const [showVideo, setShowVideo] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const openVideo = () => {
        setShowVideo(true);
        // Delay adding the visible class to allow for transition
        setTimeout(() => setOverlayVisible(true), 10);
    };

    const closeVideo = () => {
        setOverlayVisible(false);
        // Wait for the fade-out transition to complete before unmounting
        setTimeout(() => setShowVideo(false), 300); // Adjust timeout to match CSS transition duration
    };

    return (
        <div className="faq-container">
            <h2>FAQ</h2>
            {faqs.map((faq: FAQItemType, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
            <a
                href="#!"
                onClick={(e) => {
                    e.preventDefault();
                    openVideo();
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary faqButton"
            >
                Watch the Showcase Video
            </a>

            {showVideo && (
                <div
                    className={`video-overlay ${overlayVisible ? "visible" : ""}`}
                    onClick={closeVideo}
                >
                    <div
                        className="video-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6VoD7cPZhEg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQ;