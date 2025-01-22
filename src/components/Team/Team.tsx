import React from 'react';
import './Team.css';

import { Person } from '../../data/persons';

import xIcon from '/assets/X_icon.svg';
import linkedinIcon from '/assets/LinkedIn_icon.svg';
import githubIcon from '/assets/logoGithub.svg';

interface TeamProps {
    persons: Person[];
}

export const Team: React.FC<TeamProps> = ({ persons }) => {
    return (
        <section className="team-section">
            <h2>Meet the Team</h2>
            <h3>
                Passionate experts and IC OGs building a platform that they will be excited to use.
            </h3>
            <div className="team-container">
                {persons.map(person => (
                    <div key={person.id} className="team-card">
                        <img
                            src={person.imgSrc}
                            alt={person.name}
                            className="profile"
                        />
                        <h4>{person.name}</h4>
                        <h5>{person.subtitle}</h5>
                        <p>{person.description}</p>
                        <div className="social-row">
                            {person.twitter && (
                                <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                                    <img src={xIcon} alt="Twitter" />
                                </a>
                            )}
                            {person.linkedin && (
                                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                            )}
                            {person.github && (
                                <a href={person.github} target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
