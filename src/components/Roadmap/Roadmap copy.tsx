import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

function useIntersectionFadeIn<T extends HTMLElement | SVGElement>(
    threshold = 0.2
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Fade in
                        el.style.opacity = "1";
                        observer.unobserve(el);
                    }
                });
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
const Roadmap: React.FC = () => {

    const kamiRef = useIntersectionFadeIn<SVGGElement>();
    const canisterRef = useIntersectionFadeIn<SVGGElement>();
    const sphere1Ref = useIntersectionFadeIn<SVGGElement>();
    const sphere2Ref = useIntersectionFadeIn<SVGGElement>();
    const sphere3Ref = useIntersectionFadeIn<SVGGElement>();
    const sphere4Ref = useIntersectionFadeIn<SVGGElement>();
    const timeCapsuleRef = useIntersectionFadeIn<SVGGElement>();

    // Refs for the h2 texts
    const januaryRef = useIntersectionFadeIn<SVGTextElement>();
    const februaryRef = useIntersectionFadeIn<SVGTextElement>();
    const marchRef = useIntersectionFadeIn<SVGTextElement>();
    const q2Ref = useIntersectionFadeIn<SVGTextElement>();

    // Refs for the bullet lists
    const list1Ref = useIntersectionFadeIn<SVGTextElement>();
    const list2Ref = useIntersectionFadeIn<SVGTextElement>();
    const list3Ref = useIntersectionFadeIn<SVGTextElement>();
    const list4Ref = useIntersectionFadeIn<SVGTextElement>();

    return (
        <div style={{ width: "100%", paddingLeft: "7vw", paddingRight: "7vw", boxSizing: "border-box" }}>
            <h2 style={{ fontSize: "3em", color: "white", marginTop: "1em" }}>Roadmap</h2>
            <svg
                style={{ maxWidth: "1500px" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1062.21 2863.53"
            >
                <style>
                    {`
        @keyframes switchEngranajes {
            0% { opacity: 1; }
            25% { opacity: 0; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
                    @keyframes float {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0);
            }
        }

        #KonectaIcon {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes opacityPulse {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.67;
                }
                100% {
                    opacity: 1;
                }
            }

            #SombraKonecta {
                animation: opacityPulse 3s ease-in-out infinite;
            }
        @keyframes fadeInOut {
                0% {
                    opacity: 0;
                }
                33.33% {
                    opacity: 1;
                }
                83.33% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            #tpath1 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 0s;
            }

            #tpath2 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 0.5s;
            }

            #tpath3 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 1s;
            }

            #tpath4 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 1.5s;
            }

            #tpath5 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 2s;
            }

            #tpath6 {
                animation: fadeInOut 6s ease-in-out infinite;
                animation-delay: 2.5s;
            }
        
        @keyframes glowEffect {
                0% {
                    filter: drop-shadow(0 0 0px rgba(52, 170, 220, 0));
                }
                50% {
                    filter: drop-shadow(0 0 10px rgba(52, 170, 220, 0.75));
                }
                100% {
                    filter: drop-shadow(0 0 0px rgba(52, 170, 220, 0));
                }
            }

            /* CirGoogle and CirBGoogle Animation (0s to 2s) */
            #CirGoogle, #CirBGoogle {
                animation: glowEffect 6s ease-in-out infinite;
                animation-delay: 0s;
            }

            /* CirOpenChat and CirBOpenChat Animation (2s to 4s) */
            #CirOpenChat, #CirBOpenChat {
                animation: glowEffect 6s ease-in-out infinite;
                animation-delay: 2s;
            }

            /* CirCalendly Animation (4s to 6s) */
            #CirCalendly {
                animation: glowEffect 6s ease-in-out infinite;
                animation-delay: 4s;
            }
                
            @keyframes floatTimeCapsule {
              0%   { transform: translateY(0); }
              50%  { transform: translateY(-20px); }
              100% { transform: translateY(0); }
            }

            g#TimeCapsule {
              animation: floatTimeCapsule 4s ease-in-out infinite;
            }
        `}
                </style>
                <defs>
                    {/* Defs cut to save space in the prompt */}
                </defs>
                <text
                    ref={januaryRef}
                    x="71%"
                    y="13%"
                    fill="white"
                    style={{
                        fontSize: "4.5em",
                        fontWeight: "bold",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "left",
                    }}
                    textAnchor="middle"
                >
                    JANUARY
                </text>

                <text
                    ref={februaryRef}
                    x="27%"
                    y="34%"
                    fill="white"
                    style={{
                        fontSize: "4.5em",
                        fontWeight: "bold",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "right",
                    }}
                    textAnchor="middle"
                >
                    FEBRUARY
                </text>

                <text
                    ref={marchRef}
                    x="68%"
                    y="55%"
                    fill="white"
                    style={{
                        fontSize: "4.5em",
                        fontWeight: "bold",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "left",
                    }}
                    textAnchor="middle"
                >
                    MARCH
                </text>

                <text
                    ref={q2Ref}
                    x="30%"
                    y="76%"
                    fill="white"
                    style={{
                        fontSize: "4.5em",
                        fontWeight: "bold",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "right",
                    }}
                    textAnchor="middle"
                >
                    Q2 2025
                </text>


                
                <g style={{ isolation: 'isolate' }}>
                    <g id="Sphere">
                        <g id="Spheres">
                            <path
                                id="Sphere4"
                                d="M531.1,1936.3v748.68c206.74,0,374.34-167.6,374.34-374.34,0-206.74-167.6-374.34-374.34-374.34Z"
                                fill="url(#Degradado_sin_nombre_10)"
                                opacity={0.6}
                                strokeWidth={0}
                            />
                            <path
                                id="Sphere3"
                                d="M532.91,1319.27v748.68c-206.74,0-374.34-167.6-374.34-374.34s167.6-374.34,374.34-374.34Z"
                                fill="url(#Degradado_sin_nombre_10-2)"
                                opacity={0.6}
                                strokeWidth={0}
                            />
                            <path
                                id="Sphere2"
                                d="M533.59,706.34v748.68c206.74,0,374.34-167.6,374.34-374.34s-167.6-374.34-374.34-374.34Z"
                                fill="url(#Degradado_sin_nombre_10-3)"
                                opacity={0.6}
                                strokeWidth={0}
                            />
                            <path
                                id="Sphere1"
                                d="M531.1,109.01v748.68c-206.74,0-374.34-167.6-374.34-374.34S324.36,109.01,531.1,109.01Z"
                                fill="url(#Degradado_sin_nombre_10-4)"
                                opacity={0.6}
                                strokeWidth={0}
                            />
                        </g>
                    </g>
                    <g id="Lines">
                        {/* Lines cut to save space in the prompt */}
                    </g>
                    <g id="Kami">
                        <g id="Kami-2" data-name="Kami">
                            <g>
                                {/* Other parts of the Group cut to save space in the prompt */}
                                <g id="ICPLines">
                                    <path
                                        d="M318.31,269.46c-5.62,0-11.76,3.06-18.25,9.1-3.06,2.84-5.76,5.92-7.72,8.37,0,0,3.14,3.62,6.6,7.52,1.88-2.36,4.55-5.56,7.67-8.45,5.76-5.39,9.52-6.49,11.68-6.49,8.09,0,14.66,6.79,14.66,15.19s-6.57,15.11-14.66,15.19c-.39,0-.84-.06-1.4-.17,2.36,1.1,4.91,1.88,7.3,1.88,14.83,0,17.75-10.25,17.91-10.98.42-1.88.67-3.85.67-5.87-.03-13.95-10.98-25.3-24.46-25.3Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                    <path
                                        d="M266.51,319.94c5.62,0,11.76-3.06,18.25-9.1,3.06-2.84,5.76-5.92,7.72-8.37,0,0-3.14-3.62-6.6-7.52-1.88,2.36-4.55,5.56-7.67,8.45-5.76,5.33-9.55,6.49-11.68,6.49-8.09,0-14.66-6.79-14.66-15.19s6.57-15.11,14.66-15.19c.39,0,.84.06,1.4.17-2.36-1.1-4.91-1.88-7.3-1.88-14.83-.03-17.75,10.22-17.91,10.98-.42,1.88-.67,3.85-.67,5.87,0,13.95,10.95,25.3,24.46,25.3Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                    <path
                                        d="M277.79,286.22c-1.63-1.57-9.55-8-17.13-8.23-13.53-.34-17.49,9.49-17.86,10.75,2.61-11.01,12.27-19.23,23.73-19.29,9.35,0,18.81,9.18,25.8,17.46l.03-.03s3.14,3.62,6.6,7.52c0,0,3.93,4.63,8.09,8.7,1.63,1.57,9.52,7.92,17.1,8.14,13.9.39,17.75-10,17.94-10.78-2.56,11.09-12.24,19.35-23.75,19.4-9.35,0-18.81-9.18-25.83-17.46,0,.03-.03.03-.03.06,0,0-3.14-3.62-6.6-7.52.03,0-3.9-4.66-8.09-8.73ZM242.81,288.86s0-.06.03-.08c-.03.03-.03.06-.03.08Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                </g>
                            </g>
                            <g>
                                {/* Other parts of the Group cut to save space in the prompt */}
                                <g id="ICPLogo">
                                    <path
                                        d="M318.31,269.46c-5.62,0-11.76,3.06-18.25,9.1-3.06,2.84-5.76,5.92-7.72,8.37,0,0,3.14,3.62,6.6,7.52,1.88-2.36,4.55-5.56,7.67-8.45,5.76-5.39,9.52-6.49,11.68-6.49,8.09,0,14.66,6.79,14.66,15.19s-6.57,15.11-14.66,15.19c-.39,0-.84-.06-1.4-.17,2.36,1.1,4.91,1.88,7.3,1.88,14.83,0,17.75-10.25,17.91-10.98.42-1.88.67-3.85.67-5.87-.03-13.95-10.98-25.3-24.46-25.3Z"
                                        fill="url(#Degradado_sin_nombre_74)"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M266.51,319.94c5.62,0,11.76-3.06,18.25-9.1,3.06-2.84,5.76-5.92,7.72-8.37,0,0-3.14-3.62-6.6-7.52-1.88,2.36-4.55,5.56-7.67,8.45-5.76,5.33-9.55,6.49-11.68,6.49-8.09,0-14.66-6.79-14.66-15.19s6.57-15.11,14.66-15.19c.39,0,.84.06,1.4.17-2.36-1.1-4.91-1.88-7.3-1.88-14.83-.03-17.75,10.22-17.91,10.98-.42,1.88-.67,3.85-.67,5.87,0,13.95,10.95,25.3,24.46,25.3Z"
                                        fill="url(#Degradado_sin_nombre_73)"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M277.79,286.22c-1.63-1.57-9.55-8-17.13-8.23-13.53-.34-17.49,9.49-17.86,10.75,2.61-11.01,12.27-19.23,23.73-19.29,9.35,0,18.81,9.18,25.8,17.46l.03-.03s3.14,3.62,6.6,7.52c0,0,3.93,4.63,8.09,8.7,1.63,1.57,9.52,7.92,17.1,8.14,13.9.39,17.75-10,17.94-10.78-2.56,11.09-12.24,19.35-23.75,19.4-9.35,0-18.81-9.18-25.83-17.46,0,.03-.03.03-.03.06,0,0-3.14-3.62-6.6-7.52.03,0-3.9-4.66-8.09-8.73ZM242.81,288.86s0-.06.03-.08c-.03.03-.03.06-.03.08Z"
                                        fill="#29abe2"
                                        fillRule="evenodd"
                                        strokeWidth={0}
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Canister">
                        {/* Group cut to save space in the prompt */}
                    </g>
                    <g id="TimeCapsule">
                        {/* Group cut to save space in the prompt */}
                    </g>
                </g>
            </svg>
        </div >
    );
};

export default Roadmap;
