import React from 'react';
import './SVGLine.css';

const SVGLine: React.FC = () => {

    const path1 = 'M500,49 L1273,49';
    const path2 = 'M2044,49 L1273,49';

    return (
        <div className="navbar-svg-container-2">
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
    );
};

export default SVGLine;
