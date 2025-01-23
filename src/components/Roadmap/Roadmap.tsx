import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import AnimatedToken from "../AnimatedToken/AnimatedToken";

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
    const tokenRef = useIntersectionFadeIn<SVGGElement>();
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

        #ICPLogo {
            animation: float 3s ease-in-out infinite;
        }

        #ICPLines {
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
                    <radialGradient
                        id="Degradado_sin_nombre_10"
                        data-name="Degradado sin nombre 10"
                        cx={-93.66}
                        cy={2313.48}
                        fx={276.12}
                        fy={2313.48}
                        r={369.79}
                        gradientTransform="translate(440.59) rotate(-180) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.49} stopColor="#337ff5" />
                        <stop offset={0.52} stopColor="#2f74e3" stopOpacity={0.92} />
                        <stop offset={0.59} stopColor="#2556ad" stopOpacity={0.68} />
                        <stop offset={0.67} stopColor="#1d3c80" stopOpacity={0.47} />
                        <stop offset={0.74} stopColor="#16275a" stopOpacity={0.3} />
                        <stop offset={0.81} stopColor="#10163d" stopOpacity={0.17} />
                        <stop offset={0.88} stopColor="#0d0a28" stopOpacity={0.08} />
                        <stop offset={0.94} stopColor="#0a031c" stopOpacity={0.02} />
                        <stop offset={1} stopColor="#0a0118" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_10-2"
                        data-name="Degradado sin nombre 10"
                        cx={529.77}
                        cy={1696.44}
                        fx={899.55}
                        fy={1696.44}
                        r={369.79}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_10"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_10-3"
                        data-name="Degradado sin nombre 10"
                        cx={-96.15}
                        cy={1083.51}
                        fx={273.63}
                        fy={1083.51}
                        r={369.79}
                        xlinkHref="#Degradado_sin_nombre_10"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_10-4"
                        data-name="Degradado sin nombre 10"
                        cx={527.96}
                        cy={486.18}
                        fx={897.74}
                        fy={486.18}
                        r={369.79}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_10"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_51"
                        data-name="Degradado sin nombre 51"
                        x1={899.19}
                        y1={2193.27}
                        x2={1430.3}
                        y2={2193.27}
                        gradientTransform="translate(1430.3) rotate(-180) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34a1e1" />
                        <stop offset={1} stopColor="#34aadc" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_46"
                        data-name="Degradado sin nombre 46"
                        x1={531.1}
                        y1={1590.43}
                        x2={1062.21}
                        y2={1590.43}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#338fec" />
                        <stop offset={1} stopColor="#34aadc" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_47"
                        data-name="Degradado sin nombre 47"
                        x1={899.19}
                        y1={983.58}
                        x2={1430.3}
                        y2={983.58}
                        gradientTransform="translate(1430.3) rotate(-180) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#338cee" />
                        <stop offset={1} stopColor="#34aadc" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_43"
                        data-name="Degradado sin nombre 43"
                        x1={531.1}
                        y1={379.37}
                        x2={1062.21}
                        y2={379.37}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#337ff5" />
                        <stop offset={1} stopColor="#34aadc" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_12"
                        data-name="Degradado sin nombre 12"
                        x1={531.1}
                        y1={0}
                        x2={531.1}
                        y2={2644.2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#0a0118" stopOpacity={0} />
                        <stop offset={0.1} stopColor="#337ff5" />
                        <stop offset={1} stopColor="#34aadc" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_19"
                        data-name="Degradado sin nombre 19"
                        cx={531.1}
                        cy={2750.62}
                        fx={531.1}
                        fy={2750.62}
                        r={112.91}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#201f34" />
                        <stop offset={0.2} stopColor="#337ff5" />
                        <stop offset={1} stopColor="#34aadc" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_17"
                        data-name="Degradado sin nombre 17"
                        x1={153.28}
                        y1={381.77}
                        x2={233.94}
                        y2={381.77}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34aadc" />
                        <stop offset={0.1} stopColor="#3398e6" />
                        <stop offset={0.23} stopColor="#3385f1" />
                        <stop offset={0.33} stopColor="#337ff5" />
                        <stop offset={0.41} stopColor="#2f6ed3" />
                        <stop offset={0.56} stopColor="#2a529a" />
                        <stop offset={0.7} stopColor="#253c6e" />
                        <stop offset={0.82} stopColor="#222c4e" />
                        <stop offset={0.93} stopColor="#20223b" />
                        <stop offset={1} stopColor="#201f34" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_17-2"
                        data-name="Degradado sin nombre 17"
                        x1={220.27}
                        y1={383.2}
                        x2={341.99}
                        y2={383.2}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_24"
                        data-name="Degradado sin nombre 24"
                        x1={24.06}
                        y1={459.71}
                        x2={364.54}
                        y2={358.26}
                        gradientTransform="translate(43 -40)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34aadc" />
                        <stop offset={0.09} stopColor="#3398e6" />
                        <stop offset={0.22} stopColor="#3385f1" />
                        <stop offset={0.31} stopColor="#337ff5" />
                        <stop offset={0.76} stopColor="#2b45a8" />
                        <stop offset={1} stopColor="#282c86" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_25"
                        data-name="Degradado sin nombre 25"
                        x1={216.29}
                        y1={381.2}
                        x2={240.1}
                        y2={451.03}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.09} stopColor="#dbff2d" />
                        <stop offset={0.12} stopColor="#dbec2d" />
                        <stop offset={0.2} stopColor="#dbc32d" />
                        <stop offset={0.28} stopColor="#dba32d" />
                        <stop offset={0.35} stopColor="#db8c2d" />
                        <stop offset={0.43} stopColor="#db7e2d" />
                        <stop offset={0.49} stopColor="#db7a2d" />
                        <stop offset={0.73} stopColor="#ed533b" />
                        <stop offset={0.96} stopColor="#ff3048" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_17-3"
                        data-name="Degradado sin nombre 17"
                        x1={159.29}
                        y1={313.78}
                        x2={159.29}
                        y2={645.02}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_17-4"
                        data-name="Degradado sin nombre 17"
                        x1={101.52}
                        y1={555.94}
                        x2={101.52}
                        y2={725.64}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_17-5"
                        data-name="Degradado sin nombre 17"
                        x1={198.36}
                        y1={619.46}
                        x2={198.36}
                        y2={731.17}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_30"
                        data-name="Degradado sin nombre 30"
                        x1={100.95}
                        y1={353.78}
                        x2={100.95}
                        y2={771.17}
                        gradientTransform="translate(43 -40)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34aadc" />
                        <stop offset={0.1} stopColor="#3398e6" />
                        <stop offset={0.23} stopColor="#3385f1" />
                        <stop offset={0.33} stopColor="#337ff5" />
                        <stop offset={0.33} stopColor="#327ef3" />
                        <stop offset={0.5} stopColor="#2c5cbb" />
                        <stop offset={0.66} stopColor="#26428f" />
                        <stop offset={0.8} stopColor="#232e6f" />
                        <stop offset={0.92} stopColor="#20235b" />
                        <stop offset={1} stopColor="#201f55" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_362"
                        data-name="Degradado sin nombre 362"
                        x1={111.17}
                        y1={561.97}
                        x2={156.49}
                        y2={561.97}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#dbff2d" />
                        <stop offset={0.04} stopColor="#dbec2d" />
                        <stop offset={0.14} stopColor="#dbc32d" />
                        <stop offset={0.23} stopColor="#dba32d" />
                        <stop offset={0.32} stopColor="#db8c2d" />
                        <stop offset={0.41} stopColor="#db7e2d" />
                        <stop offset={0.48} stopColor="#db7a2d" />
                        <stop offset={0.56} stopColor="#e16c31" />
                        <stop offset={0.93} stopColor="#ff3048" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_362-2"
                        data-name="Degradado sin nombre 362"
                        x1={102.92}
                        y1={640.25}
                        x2={123.34}
                        y2={640.25}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-3"
                        data-name="Degradado sin nombre 362"
                        x1={168.12}
                        y1={628.76}
                        x2={195.99}
                        y2={628.76}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-4"
                        data-name="Degradado sin nombre 362"
                        x1={143.95}
                        y1={391.88}
                        x2={190.31}
                        y2={391.88}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-5"
                        data-name="Degradado sin nombre 362"
                        x1={184.95}
                        y1={556.71}
                        x2={205.19}
                        y2={556.71}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_2"
                        data-name="Degradado sin nombre 2"
                        x1={105.35}
                        y1={295.05}
                        x2={113.89}
                        y2={793.89}
                        gradientTransform="translate(43 -40)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#dbff2d" />
                        <stop offset={0.04} stopColor="#dbec2d" />
                        <stop offset={0.15} stopColor="#dbc32d" />
                        <stop offset={0.26} stopColor="#dba32d" />
                        <stop offset={0.36} stopColor="#db8c2d" />
                        <stop offset={0.45} stopColor="#db7e2d" />
                        <stop offset={0.53} stopColor="#db7a2d" />
                        <stop offset={0.67} stopColor="#e36733" />
                        <stop offset={0.95} stopColor="#fb3845" />
                        <stop offset={0.99} stopColor="#ff3048" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_17-6"
                        data-name="Degradado sin nombre 17"
                        x1={105.61}
                        y1={392.37}
                        x2={155.61}
                        y2={392.37}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_17-7"
                        data-name="Degradado sin nombre 17"
                        x1={121.81}
                        y1={474.22}
                        x2={259.79}
                        y2={474.22}
                        xlinkHref="#Degradado_sin_nombre_17"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_22"
                        data-name="Degradado sin nombre 22"
                        x1={57.41}
                        y1={407.89}
                        x2={254.83}
                        y2={612.93}
                        gradientTransform="translate(43 -40)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34aadc" />
                        <stop offset={0.09} stopColor="#3398e6" />
                        <stop offset={0.22} stopColor="#3385f1" />
                        <stop offset={0.31} stopColor="#337ff5" />
                        <stop offset={0.44} stopColor="#2f65d3" />
                        <stop offset={0.6} stopColor="#2c4cb1" />
                        <stop offset={0.74} stopColor="#293a99" />
                        <stop offset={0.88} stopColor="#282f8b" />
                        <stop offset={1} stopColor="#282c86" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_362-6"
                        data-name="Degradado sin nombre 362"
                        x1={107.52}
                        y1={395.46}
                        x2={130.87}
                        y2={395.46}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-7"
                        data-name="Degradado sin nombre 362"
                        x1={118.98}
                        y1={448.29}
                        x2={162.79}
                        y2={448.29}
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-8"
                        data-name="Degradado sin nombre 362"
                        x1={118.8}
                        y1={421.68}
                        x2={62.62}
                        y2={513.21}
                        gradientTransform="translate(43 -40)"
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_362-9"
                        data-name="Degradado sin nombre 362"
                        x1={118.8}
                        y1={421.68}
                        x2={62.62}
                        y2={513.21}
                        gradientTransform="translate(43 -40)"
                        xlinkHref="#Degradado_sin_nombre_362"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_13"
                        data-name="Degradado sin nombre 13"
                        x1={177.29}
                        y1={224.33}
                        x2={177.29}
                        y2={634.24}
                        gradientTransform="translate(-67.74 20.63) rotate(-5.55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#34aadc" />
                        <stop offset={0.45} stopColor="#337ff5" />
                        <stop offset={0.52} stopColor="#2f6ed3" />
                        <stop offset={0.64} stopColor="#2a529a" />
                        <stop offset={0.75} stopColor="#253c6e" />
                        <stop offset={0.86} stopColor="#222c4e" />
                        <stop offset={0.94} stopColor="#20223b" />
                        <stop offset={1} stopColor="#201f34" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_36"
                        data-name="Degradado sin nombre 36"
                        cx={177.29}
                        cy={276.21}
                        fx={211.93}
                        fy={237.58}
                        r={51.89}
                        gradientTransform="translate(-67.74 20.63) rotate(-5.55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#337ff5" stopOpacity={0} />
                        <stop offset={0.27} stopColor="#337ef4" stopOpacity={0.01} />
                        <stop offset={0.42} stopColor="#337df2" stopOpacity={0.05} />
                        <stop offset={0.54} stopColor="#337bee" stopOpacity={0.13} />
                        <stop offset={0.64} stopColor="#3379e9" stopOpacity={0.23} />
                        <stop offset={0.74} stopColor="#3376e2" stopOpacity={0.36} />
                        <stop offset={0.82} stopColor="#3372d9" stopOpacity={0.52} />
                        <stop offset={0.9} stopColor="#336dcf" stopOpacity={0.71} />
                        <stop offset={0.98} stopColor="#3367c4" stopOpacity={0.93} />
                        <stop offset={1} stopColor="#3366c1" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_139"
                        data-name="Degradado sin nombre 139"
                        x1={111.82}
                        y1={216.97}
                        x2={115.95}
                        y2={279.18}
                        gradientTransform="translate(-24.74 -19.37) rotate(-5.55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.55} stopColor="#252438" />
                        <stop offset={0.69} stopColor="#201f34" />
                        <stop offset={1} stopColor="#0c040f" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_86"
                        data-name="Degradado sin nombre 86"
                        cx={152.39}
                        cy={315.24}
                        fx={235.28}
                        fy={301.57}
                        r={84.02}
                        gradientTransform="translate(-10.87 123.36) rotate(-5.55) scale(1 .55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#a6a5ae" stopOpacity={0} />
                        <stop offset={0.37} stopColor="#a6a5ae" stopOpacity={0} />
                        <stop offset={0.51} stopColor="#a6a6ae" stopOpacity={0.04} />
                        <stop offset={0.6} stopColor="#a8a7b0" stopOpacity={0.11} />
                        <stop offset={0.68} stopColor="#aaa9b1" stopOpacity={0.19} />
                        <stop offset={0.75} stopColor="#acacb4" stopOpacity={0.31} />
                        <stop offset={0.81} stopColor="#afafb6" stopOpacity={0.45} />
                        <stop offset={0.86} stopColor="#b3b3ba" stopOpacity={0.61} />
                        <stop offset={0.91} stopColor="#b7b7be" stopOpacity={0.8} />
                        <stop offset={0.95} stopColor="#bcbcc2" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_123"
                        data-name="Degradado sin nombre 123"
                        x1={216.04}
                        y1={277.75}
                        x2={220.82}
                        y2={286.79}
                        gradientTransform="translate(-67.74 20.63) rotate(-5.55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#ffff3f" />
                        <stop offset={0.11} stopColor="#faee3c" />
                        <stop offset={0.31} stopColor="#eec136" />
                        <stop offset={0.6} stopColor="#db7b2d" />
                        <stop offset={0.61} stopColor="#db7a2d" />
                        <stop offset={0.65} stopColor="#d67230" />
                        <stop offset={0.81} stopColor="#c5593b" />
                        <stop offset={0.91} stopColor="#c05040" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_101"
                        data-name="Degradado sin nombre 101"
                        x1={192.1}
                        y1={288.94}
                        x2={194.13}
                        y2={300.92}
                        gradientTransform="translate(-67.74 20.63) rotate(-5.55)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#e5ff3f" />
                        <stop offset={0.1} stopColor="#e3ee3c" />
                        <stop offset={0.29} stopColor="#e0c136" />
                        <stop offset={0.57} stopColor="#db7b2d" />
                        <stop offset={0.57} stopColor="#db7a2d" />
                        <stop offset={0.63} stopColor="#d16a33" />
                        <stop offset={0.73} stopColor="#c75b3a" />
                        <stop offset={0.84} stopColor="#c1523e" />
                        <stop offset={1} stopColor="#c05040" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_74"
                        data-name="Degradado sin nombre 74"
                        x1={305.15}
                        y1={2161.45}
                        x2={339.77}
                        y2={2196.35}
                        gradientTransform="translate(0 -1888)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.21} stopColor="#f15a24" />
                        <stop offset={0.68} stopColor="#fbb03b" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_73"
                        data-name="Degradado sin nombre 73"
                        x1={279.66}
                        y1={2203.95}
                        x2={245.05}
                        y2={2169.05}
                        gradientTransform="translate(0 -1888)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.21} stopColor="#ed1e79" />
                        <stop offset={0.89} stopColor="#522785" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_7"
                        data-name="Degradado sin nombre 7"
                        cx={736.83}
                        cy={601.56}
                        fx={736.83}
                        fy={601.56}
                        r={244.32}
                        gradientTransform="translate(0 490)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.03} stopColor="#337ff5" />
                        <stop offset={0.16} stopColor="#2763bf" stopOpacity={0.78} />
                        <stop offset={0.35} stopColor="#19407b" stopOpacity={0.51} />
                        <stop offset={0.53} stopColor="#0e2446" stopOpacity={0.29} />
                        <stop offset={0.67} stopColor="#061020" stopOpacity={0.13} />
                        <stop offset={0.79} stopColor="#010408" stopOpacity={0.04} />
                        <stop offset={0.87} stopColor="#000" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_28"
                        data-name="Degradado sin nombre 28"
                        cx={682.2}
                        cy={990.8}
                        fx={682.2}
                        fy={990.8}
                        r={44.29}
                        gradientTransform="translate(0 2067.23) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.1} stopColor="#2971dc" />
                        <stop offset={0.42} stopColor="#2993ec" />
                        <stop offset={0.73} stopColor="#29affa" />
                        <stop offset={0.92} stopColor="#2abaff" />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_28-2"
                        data-name="Degradado sin nombre 28"
                        cx={686.21}
                        cy={1005.94}
                        fx={686.21}
                        fy={1005.94}
                        r={37.08}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-3"
                        data-name="Degradado sin nombre 28"
                        cx={669.76}
                        cy={981.01}
                        fx={669.76}
                        fy={981.01}
                        r={46.39}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23"
                        data-name="Degradado sin nombre 23"
                        cx={677.96}
                        cy={988.28}
                        fx={677.96}
                        fy={988.28}
                        r={45.11}
                        gradientTransform="translate(0 2067.23) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.1} stopColor="#000c7e" />
                        <stop offset={0.18} stopColor="#0f2ea1" />
                        <stop offset={0.31} stopColor="#2259ce" />
                        <stop offset={0.41} stopColor="#2e74ea" />
                        <stop offset={0.47} stopColor="#337ff5" />
                        <stop offset={0.51} stopColor="#3179ee" />
                        <stop offset={0.58} stopColor="#2b68db" />
                        <stop offset={0.67} stopColor="#224dbd" />
                        <stop offset={0.76} stopColor="#162893" />
                        <stop offset={0.77} stopColor="#15248e" />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_23-2"
                        data-name="Degradado sin nombre 23"
                        cx={681.96}
                        cy={1003.36}
                        fx={681.96}
                        fy={1003.36}
                        r={37.87}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-3"
                        data-name="Degradado sin nombre 23"
                        cx={665.52}
                        cy={978.48}
                        fx={665.52}
                        fy={978.48}
                        r={47.23}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-4"
                        data-name="Degradado sin nombre 28"
                        cx={910.1}
                        cy={992.33}
                        fx={910.1}
                        fy={992.33}
                        r={45.79}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-5"
                        data-name="Degradado sin nombre 28"
                        cx={920.63}
                        cy={1000.15}
                        fx={920.63}
                        fy={1000.15}
                        r={31.88}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-6"
                        data-name="Degradado sin nombre 28"
                        cx={935.38}
                        cy={987.61}
                        fx={935.38}
                        fy={987.61}
                        r={35.52}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-4"
                        data-name="Degradado sin nombre 23"
                        cx={905.85}
                        cy={994.86}
                        fx={905.85}
                        fy={994.86}
                        r={46.62}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-5"
                        data-name="Degradado sin nombre 23"
                        cx={916.39}
                        cy={1002.72}
                        fx={916.39}
                        fy={1002.72}
                        r={32.72}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-6"
                        data-name="Degradado sin nombre 23"
                        cx={931.14}
                        cy={990.14}
                        fx={931.14}
                        fy={990.14}
                        r={36.37}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_14"
                        data-name="Degradado sin nombre 14"
                        cx={1087.96}
                        cy={892.78}
                        fx={1199.39}
                        fy={803.09}
                        r={143.05}
                        gradientTransform="translate(984.19 2431.49) rotate(-64.83) scale(1 -.79)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.7} stopColor="#201f34" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_15"
                        data-name="Degradado sin nombre 15"
                        x1={785.14}
                        y1={853.48}
                        x2={831.52}
                        y2={987.37}
                        gradientTransform="translate(0 2067.23) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.23} stopColor="#706f7c" />
                        <stop offset={0.59} stopColor="#575766" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_16"
                        data-name="Degradado sin nombre 16"
                        cx={3998.68}
                        cy={-1964.63}
                        fx={4114.13}
                        fy={-2057.56}
                        r={148.2}
                        gradientTransform="translate(30629.11 8045.65) rotate(-64.83) scale(.62 15.23) skewX(82.21)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.71} stopColor="#454556" />
                        <stop offset={0.92} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_3"
                        data-name="Degradado sin nombre 3"
                        x1={3426.3}
                        y1={-1536.8}
                        x2={3618.84}
                        y2={-1536.8}
                        gradientTransform="translate(1937.46 4022.24) rotate(-70.89) scale(.76 1.31) skewX(13.9)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.49} stopColor="#777783" />
                        <stop offset={0.66} stopColor="#70707d" />
                        <stop offset={0.79} stopColor="#646472" />
                        <stop offset={0.89} stopColor="#545363" />
                        <stop offset={0.97} stopColor="#3e3d50" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_28-7"
                        data-name="Degradado sin nombre 28"
                        cx={825.18}
                        cy={885.6}
                        fx={825.18}
                        fy={885.6}
                        r={46.32}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-8"
                        data-name="Degradado sin nombre 28"
                        cx={836.43}
                        cy={889.92}
                        fx={836.43}
                        fy={889.92}
                        r={44.02}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-9"
                        data-name="Degradado sin nombre 28"
                        cx={815.12}
                        cy={886.53}
                        fx={815.12}
                        fy={886.53}
                        r={45.82}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-7"
                        data-name="Degradado sin nombre 23"
                        cx={820.94}
                        cy={883.89}
                        fx={820.94}
                        fy={883.89}
                        r={47.08}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-8"
                        data-name="Degradado sin nombre 23"
                        cx={832.18}
                        cy={888.2}
                        fx={832.18}
                        fy={888.2}
                        r={44.74}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_23-9"
                        data-name="Degradado sin nombre 23"
                        cx={810.93}
                        cy={884.87}
                        fx={810.93}
                        fy={884.87}
                        r={46.59}
                        xlinkHref="#Degradado_sin_nombre_23"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-10"
                        data-name="Degradado sin nombre 28"
                        cx={729.46}
                        cy={971.24}
                        fx={729.46}
                        fy={971.24}
                        r={8.83}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-11"
                        data-name="Degradado sin nombre 28"
                        cx={733.9}
                        cy={982.39}
                        fx={733.9}
                        fy={982.39}
                        r={8.82}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-12"
                        data-name="Degradado sin nombre 28"
                        cx={739.64}
                        cy={994.45}
                        fx={739.64}
                        fy={994.45}
                        r={8.83}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-13"
                        data-name="Degradado sin nombre 28"
                        cx={856.19}
                        cy={984.92}
                        fx={856.19}
                        fy={984.92}
                        r={7.47}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_28-14"
                        data-name="Degradado sin nombre 28"
                        cx={846.99}
                        cy={990.52}
                        fx={846.99}
                        fy={990.52}
                        r={7.47}
                        xlinkHref="#Degradado_sin_nombre_28"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_29"
                        data-name="Degradado sin nombre 29"
                        cx={794.15}
                        cy={1065.71}
                        fx={851.88}
                        fy={1035.08}
                        r={65.35}
                        gradientTransform="translate(0 1837.18) scale(1 -.7)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.81} stopColor="#201f34" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_15-2"
                        data-name="Degradado sin nombre 15"
                        x1={735.67}
                        y1={978.46}
                        x2={852.63}
                        y2={978.46}
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_31"
                        data-name="Degradado sin nombre 31"
                        cx={796.34}
                        cy={1147.62}
                        fx={828.97}
                        fy={1105.85}
                        r={60.58}
                        gradientTransform="translate(-.02 1684.7) scale(1 -.54)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.29} stopColor="#767582" />
                        <stop offset={0.51} stopColor="#6c6c79" />
                        <stop offset={0.71} stopColor="#5c5c6b" />
                        <stop offset={0.9} stopColor="#464556" />
                        <stop offset={1} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_32"
                        data-name="Degradado sin nombre 32"
                        x1={735.6}
                        y1={1001.8}
                        x2={852.69}
                        y2={1001.8}
                        gradientTransform="translate(-.02 2067.24) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.25} stopColor="#757581" />
                        <stop offset={0.49} stopColor="#6a6a77" />
                        <stop offset={0.72} stopColor="#575766" />
                        <stop offset={0.94} stopColor="#3d3c4e" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_33"
                        data-name="Degradado sin nombre 33"
                        cx={795.41}
                        cy={223.4}
                        fx={795.41}
                        fy={223.4}
                        r={40.15}
                        gradientTransform="translate(0 982.52) scale(1 .38)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#474751" />
                        <stop offset={0.16} stopColor="#41424a" stopOpacity={0.92} />
                        <stop offset={0.4} stopColor="#303437" stopOpacity={0.68} />
                        <stop offset={0.68} stopColor="#151d18" stopOpacity={0.3} />
                        <stop offset={0.86} stopColor="#000c00" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_34"
                        data-name="Degradado sin nombre 34"
                        cx={794.12}
                        cy={1040.57}
                        fx={794.12}
                        fy={994.42}
                        r={98.93}
                        gradientTransform="translate(0 2067.23) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#fff" />
                        <stop offset={0.03} stopColor="#edf3fe" />
                        <stop offset={0.14} stopColor="#9ec2fa" />
                        <stop offset={0.24} stopColor="#649df7" />
                        <stop offset={0.31} stopColor="#4087f5" />
                        <stop offset={0.35} stopColor="#337ff5" />
                        <stop offset={0.51} stopColor="#5f62ef" />
                        <stop offset={0.64} stopColor="#7d4fec" />
                        <stop offset={0.71} stopColor="#8849eb" />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_29-2"
                        data-name="Degradado sin nombre 29"
                        cx={792.86}
                        cy={1115.42}
                        fx={830.66}
                        fy={1062.63}
                        r={64.94}
                        gradientTransform="translate(-11.06 1754.24) rotate(.91) scale(1 -.7)"
                        xlinkHref="#Degradado_sin_nombre_29"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_15-3"
                        data-name="Degradado sin nombre 15"
                        x1={735.62}
                        y1={1081.39}
                        x2={852.63}
                        y2={1081.39}
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_31-2"
                        data-name="Degradado sin nombre 31"
                        cx={810.59}
                        cy={1150}
                        fx={810.59}
                        fy={1150}
                        r={95.37}
                        gradientTransform="translate(-.02 2067.24) scale(1 -1)"
                        xlinkHref="#Degradado_sin_nombre_31"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_32-2"
                        data-name="Degradado sin nombre 32"
                        x1={735.6}
                        y1={1109.86}
                        x2={852.69}
                        y2={1109.86}
                        gradientTransform="translate(-.02 2067.24) scale(1 -1)"
                        xlinkHref="#Degradado_sin_nombre_32"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_29-3"
                        data-name="Degradado sin nombre 29"
                        cx={793.46}
                        cy={1066.93}
                        fx={853.15}
                        fy={1066.93}
                        r={59.69}
                        gradientTransform="translate(0 141171.23) scale(1 -131.42)"
                        xlinkHref="#Degradado_sin_nombre_29"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_15-4"
                        data-name="Degradado sin nombre 15"
                        x1={735.58}
                        y1={1113.12}
                        x2={851.45}
                        y2={1113.12}
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_41"
                        data-name="Degradado sin nombre 41"
                        cx={1569.29}
                        cy={2120.37}
                        fx={1629.6}
                        fy={2120.37}
                        r={60.32}
                        gradientTransform="translate(120262.37 145896.52) rotate(-15.74) scale(.94 -81.08) skewX(-88.52)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.24} stopColor="#747481" />
                        <stop offset={0.48} stopColor="#686876" />
                        <stop offset={0.73} stopColor="#545463" />
                        <stop offset={0.98} stopColor="#38374a" />
                        <stop offset={1} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_3-2"
                        data-name="Degradado sin nombre 3"
                        x1={1825.28}
                        y1={1478.74}
                        x2={1916.98}
                        y2={1478.74}
                        gradientTransform="translate(-905.15 2321.93) rotate(-6.59) scale(1.26 -.79) skewX(-15.3)"
                        xlinkHref="#Degradado_sin_nombre_3"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_6"
                        data-name="Degradado sin nombre 6"
                        cx={793.67}
                        cy={952.28}
                        fx={864.51}
                        fy={952.28}
                        r={70.84}
                        gradientTransform="translate(0 -8.13)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.79} stopColor="#201f34" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_15-5"
                        data-name="Degradado sin nombre 15"
                        x1={735.45}
                        y1={954.48}
                        x2={851.85}
                        y2={954.48}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_5"
                        data-name="Degradado sin nombre 5"
                        cx={806.78}
                        cy={944.89}
                        fx={861.18}
                        fy={929.6}
                        r={66.15}
                        gradientTransform="translate(0 -8.13)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.25} stopColor="#757581" />
                        <stop offset={0.49} stopColor="#696976" />
                        <stop offset={0.73} stopColor="#565565" />
                        <stop offset={0.96} stopColor="#3a3a4c" />
                        <stop offset={1} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_3-3"
                        data-name="Degradado sin nombre 3"
                        x1={735.26}
                        y1={949.94}
                        x2={852.08}
                        y2={949.94}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_3"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_4"
                        data-name="Degradado sin nombre 4"
                        cx={790.76}
                        cy={951.05}
                        fx={863.63}
                        fy={951.05}
                        r={72.88}
                        gradientTransform="translate(0 -5.5)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.56} stopColor="#28273c" />
                        <stop offset={0.84} stopColor="#201f34" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_15-6"
                        data-name="Degradado sin nombre 15"
                        x1={735.45}
                        y1={954.55}
                        x2={851.46}
                        y2={954.55}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_49"
                        data-name="Degradado sin nombre 49"
                        cx={796.13}
                        cy={945.2}
                        fx={796.13}
                        fy={646.8}
                        r={298.42}
                        gradientTransform="translate(726.81 118.65) rotate(70.16) scale(1.01 .23) skewX(.05)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.23} stopColor="#747480" />
                        <stop offset={0.48} stopColor="#666674" />
                        <stop offset={0.76} stopColor="#505060" />
                        <stop offset={1} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_3-4"
                        data-name="Degradado sin nombre 3"
                        x1={735.46}
                        y1={949.65}
                        x2={851.8}
                        y2={949.65}
                        gradientTransform="matrix(1,0,0,1,0,0)"
                        xlinkHref="#Degradado_sin_nombre_3"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_83"
                        data-name="Degradado sin nombre 83"
                        cx={794.68}
                        cy={954.54}
                        fx={858.01}
                        fy={954.54}
                        r={63.37}
                        gradientTransform="translate(-24982.84 -122962.69) rotate(-11.6) scale(1 132.6) skewX(-26.03)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.83} stopColor="#201f34" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_62"
                        data-name="Degradado sin nombre 62"
                        x1={735.45}
                        y1={954.35}
                        x2={851.45}
                        y2={954.35}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.23} stopColor="#706f7c" />
                        <stop offset={0.59} stopColor="#575766" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_84"
                        data-name="Degradado sin nombre 84"
                        cx={794.85}
                        cy={948.31}
                        fx={851.24}
                        fy={948.31}
                        r={56.42}
                        gradientTransform="translate(-73922.22 -99725.42) rotate(-36.73) scale(1 132.2) skewX(-49.91)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.25} stopColor="#757581" />
                        <stop offset={0.49} stopColor="#6a6977" />
                        <stop offset={0.72} stopColor="#575666" />
                        <stop offset={0.94} stopColor="#3c3b4e" />
                        <stop offset={1} stopColor="#363548" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_61"
                        data-name="Degradado sin nombre 61"
                        x1={735.27}
                        y1={950.06}
                        x2={851.64}
                        y2={950.06}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#797985" />
                        <stop offset={0.49} stopColor="#777783" />
                        <stop offset={0.66} stopColor="#70707d" />
                        <stop offset={0.79} stopColor="#646472" />
                        <stop offset={0.89} stopColor="#545363" />
                        <stop offset={0.97} stopColor="#3e3d50" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_29-4"
                        data-name="Degradado sin nombre 29"
                        cx={794.77}
                        cy={1084.64}
                        fx={815.84}
                        fy={1084.64}
                        r={21.07}
                        gradientTransform="translate(4327.26 143449.4) rotate(-1.74) scale(1 -131.42) skewX(.01)"
                        xlinkHref="#Degradado_sin_nombre_29"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_15-7"
                        data-name="Degradado sin nombre 15"
                        x1={777.18}
                        y1={1121.48}
                        x2={809.83}
                        y2={1121.48}
                        xlinkHref="#Degradado_sin_nombre_15"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_49-2"
                        data-name="Degradado sin nombre 49"
                        cx={1554.38}
                        cy={2149.93}
                        fx={1570.59}
                        fy={2149.93}
                        r={16.21}
                        gradientTransform="translate(71469.4 158697.92) rotate(-8.9) scale(.98 -77.58) skewX(-87.43)"
                        xlinkHref="#Degradado_sin_nombre_49"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_3-5"
                        data-name="Degradado sin nombre 3"
                        x1={1861.78}
                        y1={1489.33}
                        x2={1887.92}
                        y2={1489.33}
                        gradientTransform="translate(-905.15 2321.91) rotate(-6.59) scale(1.26 -.79) skewX(-15.3)"
                        xlinkHref="#Degradado_sin_nombre_3"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_58"
                        data-name="Degradado sin nombre 58"
                        x1={964.53}
                        y1={560.17}
                        x2={964.53}
                        y2={436.85}
                        gradientTransform="translate(0 490)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#fbb03b" />
                        <stop offset={1} stopColor="#f05a24" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_59"
                        data-name="Degradado sin nombre 59"
                        x1={987.98}
                        y1={594.16}
                        x2={987.98}
                        y2={489.82}
                        gradientTransform="translate(0 490)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#5f2583" />
                        <stop offset={1} stopColor="#ed1e79" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_57"
                        data-name="Degradado sin nombre 57"
                        x1={964.99}
                        y1={1153.97}
                        x2={964.99}
                        y2={1014.88}
                        gradientTransform="translate(0 2067.23) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#5f2583" />
                        <stop offset={1} stopColor="#8e9aab" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_58-2"
                        data-name="Degradado sin nombre 58"
                        x1={528.4}
                        y1={239.33}
                        x2={528.4}
                        y2={169.38}
                        gradientTransform="translate(1416.07 960.84) rotate(-150.09) scale(1 -1.26) skewX(-36.04)"
                        xlinkHref="#Degradado_sin_nombre_58"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_59-2"
                        data-name="Degradado sin nombre 59"
                        x1={1067.67}
                        y1={-28.15}
                        x2={1067.67}
                        y2={-83.99}
                        gradientTransform="translate(34.35 655.09) rotate(15) scale(.9 -1.62) skewX(-38.7)"
                        xlinkHref="#Degradado_sin_nombre_59"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_72"
                        data-name="Degradado sin nombre 72"
                        x1={580.35}
                        y1={-126.29}
                        x2={580.35}
                        y2={-170.1}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#af533c" />
                        <stop offset={0.03} stopColor="#b65a3b" />
                        <stop offset={0.06} stopColor="#c96e38" />
                        <stop offset={0.1} stopColor="#dd8436" />
                        <stop offset={0.21} stopColor="#f1df4f" />
                        <stop offset={0.41} stopColor="#e89419" />
                        <stop offset={0.51} stopColor="#e78d22" />
                        <stop offset={0.62} stopColor="#e68331" />
                        <stop offset={0.71} stopColor="#cc722e" />
                        <stop offset={0.9} stopColor="#8d4727" />
                        <stop offset={0.96} stopColor="#793a25" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_72-2"
                        data-name="Degradado sin nombre 72"
                        x1={1040.89}
                        y1={-126.29}
                        x2={1040.89}
                        y2={-170.1}
                        xlinkHref="#Degradado_sin_nombre_72"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_72-3"
                        data-name="Degradado sin nombre 72"
                        x1={1040.89}
                        y1={-126.29}
                        x2={1040.89}
                        y2={-170.1}
                        xlinkHref="#Degradado_sin_nombre_72"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71"
                        data-name="Degradado sin nombre 71"
                        x1={593.36}
                        y1={-78.78}
                        x2={593.36}
                        y2={-211.89}
                        gradientTransform="translate(1.16 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#29283c" />
                        <stop offset={0.03} stopColor="#313044" />
                        <stop offset={0.09} stopColor="#494959" />
                        <stop offset={0.15} stopColor="#71707d" />
                        <stop offset={0.23} stopColor="#a7a7af" />
                        <stop offset={0.31} stopColor="#ececed" />
                        <stop offset={0.34} stopColor="#fff" />
                        <stop offset={0.38} stopColor="#d0d0d5" />
                        <stop offset={0.43} stopColor="#aaaab2" />
                        <stop offset={0.47} stopColor="#92929c" />
                        <stop offset={0.49} stopColor="#8a8a95" />
                        <stop offset={0.49} stopColor="#8a8a95" />
                        <stop offset={0.57} stopColor="#a5a5ad" />
                        <stop offset={0.63} stopColor="#b6b6bc" />
                        <stop offset={0.68} stopColor="#bcbcc2" />
                        <stop offset={0.74} stopColor="#9998a2" />
                        <stop offset={0.86} stopColor="#5c5c6b" />
                        <stop offset={0.94} stopColor="#373649" />
                        <stop offset={0.99} stopColor="#29283c" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_71-2"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-3"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-4"
                        data-name="Degradado sin nombre 71"
                        x1={1024.98}
                        y1={-78.78}
                        x2={1024.98}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-5"
                        data-name="Degradado sin nombre 71"
                        x1={1012}
                        y1={-78.78}
                        x2={1012}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-6"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-7"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-8"
                        data-name="Degradado sin nombre 71"
                        x1={1024.98}
                        y1={-78.78}
                        x2={1024.98}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-9"
                        data-name="Degradado sin nombre 71"
                        x1={1012}
                        y1={-78.78}
                        x2={1012}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-10"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-11"
                        data-name="Degradado sin nombre 71"
                        x1={993.84}
                        y1={-78.78}
                        x2={993.84}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-12"
                        data-name="Degradado sin nombre 71"
                        x1={1024.98}
                        y1={-78.78}
                        x2={1024.98}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_71-13"
                        data-name="Degradado sin nombre 71"
                        x1={1012}
                        y1={-78.78}
                        x2={1012}
                        y2={-211.89}
                        xlinkHref="#Degradado_sin_nombre_71"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.95}
                        fx={830.8}
                        fy={19.95}
                        r={264.5}
                        gradientTransform="translate(-12.72 2330.54) scale(.99 -1.08)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.82} stopColor="#201f34" stopOpacity={0} />
                        <stop offset={0.84} stopColor="#1e1e32" stopOpacity={0.14} />
                        <stop offset={0.87} stopColor="#1b1d2c" stopOpacity={0.55} />
                        <stop offset={0.9} stopColor="#181c26" />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_70-2"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-3"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-4"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.95}
                        fx={830.8}
                        fy={19.95}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-5"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-6"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-7"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-8"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.95}
                        fx={830.8}
                        fy={19.95}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-9"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-10"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-11"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-12"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.95}
                        fx={830.8}
                        fy={19.95}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_70-13"
                        data-name="Degradado sin nombre 70"
                        cx={830.8}
                        cy={19.98}
                        fx={830.8}
                        fy={19.98}
                        r={264.49}
                        xlinkHref="#Degradado_sin_nombre_70"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_39"
                        data-name="Degradado sin nombre 39"
                        x1={624.69}
                        y1={-81.6}
                        x2={624.69}
                        y2={-214.74}
                        gradientTransform="translate(1.16 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#29283c" />
                        <stop offset={0} stopColor="#343346" />
                        <stop offset={0.03} stopColor="#636271" />
                        <stop offset={0.05} stopColor="#8d8c97" />
                        <stop offset={0.08} stopColor="#b0b0b7" />
                        <stop offset={0.1} stopColor="#cdccd1" />
                        <stop offset={0.13} stopColor="#e3e3e5" />
                        <stop offset={0.16} stopColor="#f2f2f3" />
                        <stop offset={0.2} stopColor="#fcfcfc" />
                        <stop offset={0.25} stopColor="#fff" />
                        <stop offset={0.27} stopColor="#e4e4e6" />
                        <stop offset={0.3} stopColor="#c3c3c9" />
                        <stop offset={0.34} stopColor="#aaaab2" />
                        <stop offset={0.37} stopColor="#9898a1" />
                        <stop offset={0.41} stopColor="#8d8d98" />
                        <stop offset={0.45} stopColor="#8a8a95" />
                        <stop offset={0.7} stopColor="#bcbcc2" />
                        <stop offset={0.74} stopColor="#b2b1b8" />
                        <stop offset={0.8} stopColor="#9797a0" />
                        <stop offset={0.88} stopColor="#6b6b78" />
                        <stop offset={0.98} stopColor="#2f2f42" />
                        <stop offset={0.99} stopColor="#29283c" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_39-2"
                        data-name="Degradado sin nombre 39"
                        x1={993.62}
                        y1={-81.6}
                        x2={993.62}
                        y2={-214.74}
                        xlinkHref="#Degradado_sin_nombre_39"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_39-3"
                        data-name="Degradado sin nombre 39"
                        x1={993.62}
                        y1={-81.6}
                        x2={993.62}
                        y2={-214.74}
                        xlinkHref="#Degradado_sin_nombre_39"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_39-4"
                        data-name="Degradado sin nombre 39"
                        x1={809.28}
                        y1={-81.6}
                        x2={809.28}
                        y2={-214.74}
                        xlinkHref="#Degradado_sin_nombre_39"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_44"
                        data-name="Degradado sin nombre 44"
                        cx={830.46}
                        cy={-82.52}
                        fx={830.46}
                        fy={-82.52}
                        r={217.55}
                        gradientTransform="translate(-12.72 2224.3) scale(.99 -1.03)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.23} stopColor="#363548" stopOpacity={0} />
                        <stop offset={0.81} stopColor="#363548" stopOpacity={0} />
                        <stop offset={0.86} stopColor="#323143" stopOpacity={0.13} />
                        <stop offset={0.92} stopColor="#272835" stopOpacity={0.5} />
                        <stop offset={0.97} stopColor="#181c23" />
                    </radialGradient>
                    <radialGradient
                        id="Degradado_sin_nombre_44-2"
                        data-name="Degradado sin nombre 44"
                        cx={830.46}
                        fx={830.46}
                        r={217.55}
                        xlinkHref="#Degradado_sin_nombre_44"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_44-3"
                        data-name="Degradado sin nombre 44"
                        cx={830.46}
                        fx={830.46}
                        r={217.55}
                        xlinkHref="#Degradado_sin_nombre_44"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_44-4"
                        data-name="Degradado sin nombre 44"
                        r={217.55}
                        xlinkHref="#Degradado_sin_nombre_44"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_48"
                        data-name="Degradado sin nombre 48"
                        x1={618.54}
                        y1={-79.68}
                        x2={618.54}
                        y2={-217.59}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.16} stopColor="#000" />
                        <stop offset={0.78} stopColor="#000" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_48-2"
                        data-name="Degradado sin nombre 48"
                        x1={1001.89}
                        y1={-79.66}
                        x2={1001.89}
                        y2={-217.61}
                        xlinkHref="#Degradado_sin_nombre_48"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_48-3"
                        data-name="Degradado sin nombre 48"
                        x1={1001.89}
                        y1={-79.66}
                        x2={1001.89}
                        y2={-217.61}
                        xlinkHref="#Degradado_sin_nombre_48"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_50"
                        data-name="Degradado sin nombre 50"
                        x1={612.81}
                        y1={-79.68}
                        x2={612.81}
                        y2={-217.59}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#363548" />
                        <stop offset={0.03} stopColor="#474657" />
                        <stop offset={0.08} stopColor="#626270" />
                        <stop offset={0.12} stopColor="#73737f" />
                        <stop offset={0.15} stopColor="#797985" />
                        <stop offset={0.21} stopColor="#72727f" />
                        <stop offset={0.3} stopColor="#60606e" />
                        <stop offset={0.4} stopColor="#434253" />
                        <stop offset={0.44} stopColor="#353446" />
                        <stop offset={0.65} stopColor="#000" />
                        <stop offset={0.92} stopColor="#000" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_50-2"
                        data-name="Degradado sin nombre 50"
                        x1={1007.64}
                        y1={-79.63}
                        x2={1007.64}
                        xlinkHref="#Degradado_sin_nombre_50"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_56"
                        data-name="Degradado sin nombre 56"
                        x1={974.33}
                        y1={-70.98}
                        x2={974.33}
                        y2={-222.38}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.13} stopColor="#000" />
                        <stop offset={0.78} stopColor="#000" />
                        <stop offset={1} stopColor="#363548" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_56-2"
                        data-name="Degradado sin nombre 56"
                        x1={646.47}
                        y1={-70.98}
                        x2={646.47}
                        y2={-222.38}
                        xlinkHref="#Degradado_sin_nombre_56"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_56-3"
                        data-name="Degradado sin nombre 56"
                        x1={646.47}
                        y1={-70.98}
                        x2={646.47}
                        y2={-222.38}
                        xlinkHref="#Degradado_sin_nombre_56"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_56-4"
                        data-name="Degradado sin nombre 56"
                        x1={974.45}
                        y1={-70.98}
                        x2={974.45}
                        y2={-222.38}
                        xlinkHref="#Degradado_sin_nombre_56"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_56-5"
                        data-name="Degradado sin nombre 56"
                        x1={974.45}
                        y1={-70.98}
                        x2={974.45}
                        y2={-222.38}
                        xlinkHref="#Degradado_sin_nombre_56"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_60"
                        data-name="Degradado sin nombre 60"
                        x1={979.97}
                        y1={-72.36}
                        x2={979.97}
                        y2={-233.95}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#353446" />
                        <stop offset={0.12} stopColor="#bcbcc2" />
                        <stop offset={0.15} stopColor="#b0b0b7" />
                        <stop offset={0.21} stopColor="#91919b" />
                        <stop offset={0.24} stopColor="#797985" />
                        <stop offset={0.34} stopColor="#605f6e" />
                        <stop offset={0.45} stopColor="#484859" />
                        <stop offset={0.55} stopColor="#3a394c" />
                        <stop offset={0.64} stopColor="#363548" />
                        <stop offset={0.68} stopColor="#2c2b3b" />
                        <stop offset={0.82} stopColor="#14141b" />
                        <stop offset={0.93} stopColor="#050507" />
                        <stop offset={1} stopColor="#000" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_60-2"
                        data-name="Degradado sin nombre 60"
                        x1={640.89}
                        x2={640.89}
                        y2={-233.95}
                        xlinkHref="#Degradado_sin_nombre_60"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_60-3"
                        data-name="Degradado sin nombre 60"
                        x1={640.89}
                        x2={640.89}
                        y2={-233.95}
                        xlinkHref="#Degradado_sin_nombre_60"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_64"
                        data-name="Degradado sin nombre 64"
                        x1={648.28}
                        y1={-82.12}
                        x2={648.28}
                        y2={-215.2}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.02} stopColor="#1f57da" />
                        <stop offset={0.07} stopColor="#3884db" />
                        <stop offset={0.15} stopColor="#65d5dd" />
                        <stop offset={0.19} stopColor="#77f5df" />
                        <stop offset={0.23} stopColor="#65e1de" />
                        <stop offset={0.29} stopColor="#39b0dc" />
                        <stop offset={0.3} stopColor="#34aadc" />
                        <stop offset={0.39} stopColor="#3398e6" />
                        <stop offset={0.52} stopColor="#337ff5" />
                        <stop offset={0.58} stopColor="#3481f4" />
                        <stop offset={0.61} stopColor="#3989f3" />
                        <stop offset={0.63} stopColor="#4197f0" />
                        <stop offset={0.65} stopColor="#4cabec" />
                        <stop offset={0.67} stopColor="#5bc4e7" />
                        <stop offset={0.69} stopColor="#6ce3e2" />
                        <stop offset={0.7} stopColor="#76f4df" />
                        <stop offset={0.75} stopColor="#5cc6dd" />
                        <stop offset={0.85} stopColor="#1f57da" />
                        <stop offset={0.85} stopColor="#1f53d5" />
                        <stop offset={0.89} stopColor="#1f3bb5" />
                        <stop offset={0.92} stopColor="#1f2a9d" />
                        <stop offset={0.95} stopColor="#1f1f8f" />
                        <stop offset={0.98} stopColor="#1f1c8b" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_64-2"
                        data-name="Degradado sin nombre 64"
                        x1={972.58}
                        y1={-82.14}
                        x2={972.58}
                        xlinkHref="#Degradado_sin_nombre_64"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_64-3"
                        data-name="Degradado sin nombre 64"
                        x1={972.58}
                        y1={-82.14}
                        x2={972.58}
                        xlinkHref="#Degradado_sin_nombre_64"
                    />
                    <linearGradient
                        id="Degradado_sin_nombre_66"
                        data-name="Degradado sin nombre 66"
                        x1={650}
                        y1={-131.57}
                        x2={650}
                        y2={-165.7}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#9f3a38" />
                        <stop offset={0.26} stopColor="#dd8436" />
                        <stop offset={0.31} stopColor="#e09032" />
                        <stop offset={0.4} stopColor="#e7af28" />
                        <stop offset={0.4} stopColor="#e8b028" />
                        <stop offset={0.47} stopColor="#e7a929" />
                        <stop offset={0.57} stopColor="#e6972c" />
                        <stop offset={0.66} stopColor="#e68331" />
                        <stop offset={0.74} stopColor="#d47132" />
                        <stop offset={0.9} stopColor="#a84437" />
                        <stop offset={0.93} stopColor="#9f3a38" />
                    </linearGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_66-2"
                        data-name="Degradado sin nombre 66"
                        x1={971.09}
                        x2={971.09}
                        xlinkHref="#Degradado_sin_nombre_66"
                    />
                    <radialGradient
                        id="Degradado_sin_nombre_67"
                        data-name="Degradado sin nombre 67"
                        cx={671.24}
                        cy={-4188.35}
                        fx={671.24}
                        fy={-4188.35}
                        r={183.21}
                        gradientTransform="translate(94.66 800.97) rotate(.08) scale(1.07 -.36)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#242b7d" />
                        <stop offset={0.08} stopColor="#2441a7" />
                        <stop offset={0.14} stopColor="#2750b9" />
                        <stop offset={0.27} stopColor="#2f74e4" />
                        <stop offset={0.34} stopColor="#3382f5" />
                        <stop offset={0.37} stopColor="#2f77ef" />
                        <stop offset={0.45} stopColor="#295fe5" />
                        <stop offset={0.49} stopColor="#2757e1" />
                        <stop offset={0.54} stopColor="#2b6be8" />
                        <stop offset={0.62} stopColor="#3085f1" />
                        <stop offset={0.67} stopColor="#338ff5" />
                        <stop offset={0.72} stopColor="#2d6dd5" />
                        <stop offset={0.8} stopColor="#242e9b" />
                        <stop offset={0.81} stopColor="#1f2a8f" />
                        <stop offset={0.84} stopColor="#112170" />
                        <stop offset={0.87} stopColor="#071a59" />
                        <stop offset={0.9} stopColor="#02164b" />
                        <stop offset={0.92} stopColor="#001547" />
                    </radialGradient>
                    <linearGradient
                        id="Degradado_sin_nombre_69"
                        data-name="Degradado sin nombre 69"
                        x1={811.53}
                        y1={-104.31}
                        x2={811.53}
                        y2={-202.54}
                        gradientTransform="translate(0 2160.36) scale(1 -1)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#0efff5" />
                        <stop offset={0.17} stopColor="#1de0f5" />
                        <stop offset={0.36} stopColor="#33b4f5" />
                        <stop offset={0.61} stopColor="#2ebdf5" />
                        <stop offset={0.79} stopColor="#1a65be" />
                        <stop offset={0.88} stopColor="#1341a7" />
                        <stop offset={1} stopColor="#001578" />
                    </linearGradient>
                </defs>

                <g transform="translate(25, 1600)" ref={tokenRef} style={{
                    fontSize: "2em",
                    opacity: 0,
                    transition: "opacity 1.5s ease",
                    textAlign: "left",
                }}>
                    <foreignObject width="400" height="400">
                        <div  {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
                            <AnimatedToken />
                        </div>
                    </foreignObject>
                </g>

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

                <text
                    ref={list1Ref}
                    x="55%"
                    y="16%"
                    fill="#BCBCC2"
                    style={{
                        fontSize: "2em",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "left",
                    }}
                >
                    <tspan x="55%" dy="1.67em">-Wallet Link</tspan>
                    <tspan x="55%" dy="1.67em">-Reward integration</tspan>
                    <tspan x="55%" dy="1.67em">-Mission-Event integration</tspan>
                    <tspan x="55%" dy="1.67em">-More than 10 integrations</tspan>
                </text>

                <text
                    ref={list2Ref}
                    x="8%"
                    y="36.75%"
                    fill="#BCBCC2"
                    style={{
                        fontSize: "2em",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "right",
                    }}
                >
                    <tspan x="8%" dy="1.67em">-Konecta Events release</tspan>
                    <tspan x="8%" dy="1.67em">-Strategic partnerships</tspan>
                    <tspan x="8%" dy="1.67em">-SNS preparation</tspan>
                    <tspan x="8%" dy="1.67em">-More than 20 integrations</tspan>
                </text>

                <text
                    ref={list3Ref}
                    x="55%"
                    y="58%"
                    fill="#BCBCC2"
                    style={{
                        fontSize: "2em",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "left",
                    }}
                >
                    <tspan x="55%" dy="1.67em">-AI Agents PoC release</tspan>
                    <tspan x="55%" dy="1.67em">-SNS preparation</tspan>
                    <tspan x="55%" dy="1.67em">-Cross-chain integration</tspan>
                    <tspan x="55%" dy="1.67em">-Initial Airdrop closure</tspan>
                    <tspan x="55%" dy="1.67em">-SNS init Proposal</tspan>
                </text>

                <text
                    ref={list4Ref}
                    x="8%"
                    y="79%"
                    fill="#BCBCC2"
                    style={{
                        fontSize: "2em",
                        opacity: 0,
                        transition: "opacity 1.5s ease",
                        textAlign: "right",
                    }}
                >
                    <tspan x="8%" dy="1.67em">-SNS Launch</tspan>
                    <tspan x="8%" dy="1.67em">-Browser Extension v0.1</tspan>
                    <tspan x="8%" dy="1.67em">&nbsp;&nbsp;release</tspan>
                    <tspan x="8%" dy="1.67em">-AI Agent v0.1 release</tspan>
                </text>

                <g style={{ isolation: 'isolate' }}>
                    <g id="Sphere">
                        <g id="Spheres">
                            <g id="Sphere4" ref={sphere4Ref} style={{ opacity: 0, transition: "opacity 1s" }}>
                                <path
                                    d="M531.1,1936.3v748.68c206.74,0,374.34-167.6,374.34-374.34,0-206.74-167.6-374.34-374.34-374.34Z"
                                    fill="url(#Degradado_sin_nombre_10)"
                                    opacity={0.6}
                                    strokeWidth={0}
                                />
                            </g>
                            <g id="Sphere3" ref={sphere3Ref} style={{ opacity: 0, transition: "opacity 1s" }}>
                                <path
                                    d="M532.91,1319.27v748.68c-206.74,0-374.34-167.6-374.34-374.34s167.6-374.34,374.34-374.34Z"
                                    fill="url(#Degradado_sin_nombre_10-2)"
                                    opacity={0.6}
                                    strokeWidth={0}
                                />
                            </g>
                            <g id="Sphere2" ref={sphere2Ref} style={{ opacity: 0, transition: "opacity 1s" }}>
                                <path
                                    d="M533.59,706.34v748.68c206.74,0,374.34-167.6,374.34-374.34s-167.6-374.34-374.34-374.34Z"
                                    fill="url(#Degradado_sin_nombre_10-3)"
                                    opacity={0.6}
                                    strokeWidth={0}
                                />
                            </g>
                            <g id="Sphere1" ref={sphere1Ref} style={{ opacity: 0, transition: "opacity 1s" }}>
                                <path
                                    d="M531.1,109.01v748.68c-206.74,0-374.34-167.6-374.34-374.34S324.36,109.01,531.1,109.01Z"
                                    fill="url(#Degradado_sin_nombre_10-4)"
                                    opacity={0.6}
                                    strokeWidth={0}
                                />
                            </g>
                        </g>
                    </g>
                    <g id="Lines">
                        <g id="Q2Line">
                            <path
                                d="M523.1,2229.05c-147.85,0-295.7,0-443.55,0-23.85-23.85-47.7-47.7-71.56-71.56"
                                fill="none"
                                stroke="url(#Degradado_sin_nombre_51)"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={16}
                            />
                        </g>
                        <g id="MarchLine">
                            <path
                                d="M539.1,1626.21h443.55c23.85-23.85,47.7-47.7,71.56-71.56"
                                fill="none"
                                stroke="url(#Degradado_sin_nombre_46)"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={16}
                            />
                        </g>
                        <g id="FebruaryLine">
                            <path
                                d="M523.1,1019.36c-147.85,0-295.7,0-443.55,0-23.85-23.85-47.7-47.7-71.56-71.56"
                                fill="none"
                                stroke="url(#Degradado_sin_nombre_47)"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={16}
                            />
                        </g>
                        <g id="JanuaryLine">
                            <path
                                d="M539.1,415.14h443.55l71.56-71.56"
                                fill="none"
                                stroke="url(#Degradado_sin_nombre_43)"
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                strokeWidth={16}
                            />
                        </g>
                        <g id="MainLine">
                            <rect
                                x={523.1}
                                width={16}
                                height={2644.2}
                                fill="url(#Degradado_sin_nombre_12)"
                                strokeWidth={0}
                            />
                            <path
                                d="M531.1,2637.71c-62.36,0-112.91,50.55-112.91,112.91s50.55,112.91,112.91,112.91,112.91-50.55,112.91-112.91-50.55-112.91-112.91-112.91ZM531.1,2847.53c-53.44,0-96.91-43.47-96.91-96.91s43.47-96.91,96.91-96.91,96.91,43.47,96.91,96.91-43.47,96.91-96.91,96.91Z"
                                fill="url(#Degradado_sin_nombre_19)"
                                strokeWidth={0}
                            />
                            <g>
                                <path
                                    d="M594.44,2751.76c4.82,1.74,4.95,1.9,5.01,6.66.02,1.65-.02,3.3,0,4.96.03,2.48.18,4.87-2.26,6.67-.9.66-1.21,2.29-1.55,3.54-3.13,11.58-15.1,22.77-30.33,22.67-22.8-.15-45.6.06-68.41-.06-14.17-.08-25.8-8.8-30.08-22.27-.61-1.91-1.17-3.62-2.69-5.13-.91-.9-1.13-2.68-1.28-4.1-.21-1.96-.09-3.96-.06-5.94.08-4.95.38-5.35,5.26-7.09,4.21-8.63,10.72-14.91,20.24-17.46,3.62-.97,7.47-1.44,11.22-1.46,20.98-.14,41.97,0,62.95-.09,14.37-.06,25.1,5.85,31.97,19.1ZM532.03,2778.08h0c3.47,0,6.94.01,10.41,0,4.79,0,9.59.11,14.38-.04,5.58-.17,10.22-3.76,11.88-8.9,1.77-5.51.07-11.06-4.45-14.61-2.74-2.15-5.92-2.84-9.28-2.88-5.12-.05-10.25-.02-15.37-.02-10.25,0-20.49-.01-30.74,0-4.66,0-8.89,1.24-11.89,5.01-3.39,4.27-3.81,9.15-1.62,14,2.14,4.76,6.19,7.29,11.41,7.38,8.43.15,16.86.04,25.28.04Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                                <path
                                    d="M501.89,2723.3h-9.66c-.75-5.94,1.77-10.44,5.53-14.27,3.32-3.39,7.53-5.49,12.37-5.52,14.05-.1,28.09-.17,42.14,0,9.66.12,18.76,9.58,18.04,19.78-1.51.07-3.09.19-4.67.22-1.64.04-3.28,0-4.79,0-.41-.47-.72-.68-.82-.97-2.39-6.91-4.61-8.51-11.98-8.56-3.59-.03-7.19,0-11.09,0-.11,1.99-.17,3.44-.27,4.89-.09,1.29-.22,2.58-.36,4.25h-10.21c-.16-2.92-.32-5.8-.5-9.05-5,0-9.77-.24-14.5.08-3.69.25-6.45,2.37-7.92,5.9-.43,1.04-.84,2.1-1.3,3.25Z"
                                    fill="#fff"
                                    strokeWidth={0}
                                />
                            </g>
                        </g>
                    </g>
                    <g id="Kami" ref={kamiRef} style={{ opacity: 0, transition: "opacity 1.5s" }}>
                        <g id="Kami-2" data-name="Kami">
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M233.94,432.24c-3.96,1.1-9.59,2.23-16.33,1.98-23.84-.9-39.5-18.21-42.53-21.72-8.29-9.61-11.28-19.05-15.21-31.48-4.85-15.34-6.17-28.71-6.47-37.9-.12-.93-.83-7.31,3.47-11.23.71-.65,3.41-3.11,6.57-2.52.45.09,1.78.4,3.66,2.25,3.2,3.16,4.31,7.18,4.74,9.73.64,4.67,1.72,11.26,3.59,19.06,1.96,8.19,2.95,12.27,4.88,16.12,1.52,3.03,7.5,14.89,20.61,19.26,4.03,1.35,7.9,1.69,11.47,1.48,5.67,3.91,10.33,9.34,13.8,15.32,3.55,6.1,5.94,12.79,7.73,19.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M341.64,372.7c-1.37,3.49-6.98,4.28-9,4.59-16.68,2.62-36.53,12-41.62,14.64-6.77,3.52-1.99,2.65-25.72,21.74-11.05,8.89-17.06,13.07-23.24,15.76-1.54-5.36-4.2-10.48-6.87-15.42-2.27-4.2-4.61-8.41-7.73-12.03-2.04-2.37-4.46-4.49-7.19-6.01,2.57-.68,4.84-1.51,6.75-2.21,4.68-1.69,13.66-5.75,21.04-14.72,4.02-4.88,8.83-10.73,8.54-18.49-.11-2.99.14-9.64-4.44-14.06-1.93-1.86-4.7-3.94-3.9-6.5.4-1.28,1.57-2.02,1.97-2.25,4-2.3,10.04,1.06,12.23,2.32,8.35,4.78,7.68,9.06,12.42,11.53,11.72,6.14,35.44-9.74,50.85-11.85,2.01-.27,5.27-.51,7.19,1.45,1.31,1.34,1.99,3.69,1.16,5.28-.84,1.6-3,1.98-3.67,2.11-3.42.68-9.58,3.09-21.24,9.6,7.23-1.1,13.6-1.86,18.89-2.4,4.16-.42,8.32-.78,10.75,1.78.26.27,1.73,1.82,1.48,3.79-.25,1.94-2.08,3.63-4.64,4.23.44-.1,2.6-.53,4.36.77,2.07,1.53,2.33,4.52,1.62,6.34Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M233.94,432.24c-3.96,1.1-9.59,2.23-16.33,1.98-23.84-.9-39.5-18.21-42.53-21.72-8.29-9.61-11.28-19.05-15.21-31.48-4.85-15.34-6.17-28.71-6.47-37.9-.12-.93-.83-7.31,3.47-11.23.71-.65,3.41-3.11,6.57-2.52.45.09,1.78.4,3.66,2.25,3.2,3.16,4.31,7.18,4.74,9.73.64,4.67,1.72,11.26,3.59,19.06,1.96,8.19,2.95,12.27,4.88,16.12,1.52,3.03,7.5,14.89,20.61,19.26,4.03,1.35,7.9,1.69,11.47,1.48,5.67,3.91,10.33,9.34,13.8,15.32,3.55,6.1,5.94,12.79,7.73,19.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M341.64,372.7c-1.37,3.49-6.98,4.28-9,4.59-16.68,2.62-36.53,12-41.62,14.64-6.77,3.52-1.99,2.65-25.72,21.74-11.05,8.89-17.06,13.07-23.24,15.76-1.54-5.36-4.2-10.48-6.87-15.42-2.27-4.2-4.61-8.41-7.73-12.03-2.04-2.37-4.46-4.49-7.19-6.01,2.57-.68,4.84-1.51,6.75-2.21,4.68-1.69,13.66-5.75,21.04-14.72,4.02-4.88,8.83-10.73,8.54-18.49-.11-2.99.14-9.64-4.44-14.06-1.93-1.86-4.7-3.94-3.9-6.5.4-1.28,1.57-2.02,1.97-2.25,4-2.3,10.04,1.06,12.23,2.32,8.35,4.78,7.68,9.06,12.42,11.53,11.72,6.14,35.44-9.74,50.85-11.85,2.01-.27,5.27-.51,7.19,1.45,1.31,1.34,1.99,3.69,1.16,5.28-.84,1.6-3,1.98-3.67,2.11-3.42.68-9.58,3.09-21.24,9.6,7.23-1.1,13.6-1.86,18.89-2.4,4.16-.42,8.32-.78,10.75,1.78.26.27,1.73,1.82,1.48,3.79-.25,1.94-2.08,3.63-4.64,4.23.44-.1,2.6-.53,4.36.77,2.07,1.53,2.33,4.52,1.62,6.34Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M233.94,432.24c-3.96,1.1-9.59,2.23-16.33,1.98-23.84-.9-39.5-18.21-42.53-21.72-8.29-9.61-11.28-19.05-15.21-31.48-4.85-15.34-6.17-28.71-6.47-37.9-.12-.93-.83-7.31,3.47-11.23.71-.65,3.41-3.11,6.57-2.52.45.09,1.78.4,3.66,2.25,3.2,3.16,4.31,7.18,4.74,9.73.64,4.67,1.72,11.26,3.59,19.06,1.96,8.19,2.95,12.27,4.88,16.12,1.52,3.03,7.5,14.89,20.61,19.26,4.03,1.35,7.9,1.69,11.47,1.48,5.67,3.91,10.33,9.34,13.8,15.32,3.55,6.1,5.94,12.79,7.73,19.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M341.64,372.7c-1.37,3.49-6.98,4.28-9,4.59-16.68,2.62-36.53,12-41.62,14.64-6.77,3.52-1.99,2.65-25.72,21.74-11.05,8.89-17.06,13.07-23.24,15.76-1.54-5.36-4.2-10.48-6.87-15.42-2.27-4.2-4.61-8.41-7.73-12.03-2.04-2.37-4.46-4.49-7.19-6.01,2.57-.68,4.84-1.51,6.75-2.21,4.68-1.69,13.66-5.75,21.04-14.72,4.02-4.88,8.83-10.73,8.54-18.49-.11-2.99.14-9.64-4.44-14.06-1.93-1.86-4.7-3.94-3.9-6.5.4-1.28,1.57-2.02,1.97-2.25,4-2.3,10.04,1.06,12.23,2.32,8.35,4.78,7.68,9.06,12.42,11.53,11.72,6.14,35.44-9.74,50.85-11.85,2.01-.27,5.27-.51,7.19,1.45,1.31,1.34,1.99,3.69,1.16,5.28-.84,1.6-3,1.98-3.67,2.11-3.42.68-9.58,3.09-21.24,9.6,7.23-1.1,13.6-1.86,18.89-2.4,4.16-.42,8.32-.78,10.75,1.78.26.27,1.73,1.82,1.48,3.79-.25,1.94-2.08,3.63-4.64,4.23.44-.1,2.6-.53,4.36.77,2.07,1.53,2.33,4.52,1.62,6.34Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M242.05,429.44c-1.4.61-2.8,1.13-4.28,1.62-1,.33-2.29.75-3.84,1.18-1.79-6.85-4.18-13.53-7.73-19.64-3.48-5.99-8.13-11.41-13.8-15.32,2.83-.16,5.47-.68,7.86-1.31h0c2.73,1.52,5.14,3.64,7.19,6.01,3.12,3.62,5.46,7.83,7.73,12.03,2.67,4.94,5.33,10.06,6.87,15.42Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M206.63,519.9c-.14,6.46-.62,14.24-1.43,24.78-3.02,5.53-7.23,10.4-12.27,14.18-.84-.97-1.98-1.55-3.24-1.55-2.62,0-4.74,2.56-4.74,5.72s2.13,5.72,4.74,5.72,4.74-2.56,4.74-5.72c0-.44-.04-.87-.12-1.28,3.9-2.49,7.39-5.64,10.25-9.27-.88,10.61-2.04,23.68-3.51,40.22-1.74,19.55-3.48,37.17-5.06,52.32-8.16-3.45-14.92-9.97-19.43-17.64-4.22-7.18-6.6-15.31-7.74-23.58,1.45-38.89.38-73.55-.36-79.75-.17-1.4-.66-5.3-2.31-5.72-2.43-.62-4.05,2.4-4.71,4.81-1.65,6-3.31,12.01-4.95,18.03-11.23,15.3-26.74,27.43-44.29,34.63,9.87-67.67,8.79-96.7,8.79-96.7-1.14-30.75-4.67-76.94-6.37-99.35-.7-9.24-1.31-16.85-1.73-21.94-.9-4.03-3.04-16.08,3.5-27.97,1.61-2.93,5.29-9.64,13.06-13.42,10.41-5.06,21.12-1.45,24.02-.48,18.06,6.08,26.53,31.46,33.83,60.59.66,2.65,1.33,5.29,1.98,7.9-1.5-.34-3.06-.39-4.59-.16-.97-2.25-2.8-3.73-4.66-3.76-6.29-9.51-14.75-17.55-24.56-23.37h0c.17-.56.26-1.14.26-1.75,0-3.26-2.63-5.89-5.89-5.89s-5.88,2.63-5.88,5.89,2.63,5.88,5.88,5.88c1.34,0,2.58-.45,3.57-1.21,9.27,5.6,17.36,13.15,23.58,22.01-1.05,1.39-1.47,3.57-.97,5.82.38,1.7,1.21,3.14,2.27,4.09-4.2,10.68-9.39,20.97-15.5,30.69-.47-.12-.97-.19-1.48-.19-3.25,0-5.88,2.63-5.88,5.89s2.63,5.88,5.88,5.88,5.89-2.63,5.89-5.88c0-1.49-.55-2.86-1.47-3.89,6.52-9.76,11.88-20.28,15.96-31.28.11-.01.21-.03.32-.05,2.05-.45,3.37-2.68,3.39-5.35,1.67-.15,3.38.14,4.91.82,9.78,39.5,17.6,76.23,16.32,131.27Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M152.48,555.94c-11.93,44.41-22.72,89.16-27.59,134.84-.39,3.66-.79,7.46-2.66,10.62-1.35,2.28-3.37,4.06-5.38,5.78-8.46,7.17-17.73,13.8-28.39,16.84-10.66,3.05-23,2.01-31.61-4.98-2.38-1.93-4.46-4.33-5.52-7.21-2.07-5.63.26-12.18,4.46-16.46,4.21-4.28,9.97-6.65,15.74-8.32,6.14-1.78,12.8-3.06,17.48-7.41,5.35-4.97,6.97-11.55,7.76-15.51,2.25-11.3,4.3-22.03,6.15-32.2,2.38,6.67,5.86,12.95,10.26,18.49-2.23,2.87-2.56,6.37-.66,8.07,2.02,1.8,5.8.86,8.45-2.11,2.65-2.96,3.15-6.83,1.13-8.63-1.44-1.28-3.76-1.18-5.94.06-5.41-8.08-9.26-17.19-11.3-26.69,2.46-13.89,4.53-26.66,6.3-38.34,15.16-6.52,29.19-15.64,41.31-26.82Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M236.55,718.24c-2.95,8.56-12.93,11.31-15.32,11.97-12.21,3.36-23.38-2.69-33.72-8.28-5.75-3.11-14.23-8.5-22.95-17.5-1.24-1.05-3.05-2.84-4.16-5.54-1.72-4.18-.81-8.23-.5-9.63,4.36-19.66,6.86-44.92,8.22-69.79,1.47,5.52,3.49,10.87,6.34,15.81,4.7,8.15,11.88,15.16,20.62,18.44-.91,8.48-1.75,16.05-2.49,22.58,7.37,6.37,14.12,10.28,19.06,12.72,10.55,5.2,15.78,5.08,20.59,11.01.65.8,7.35,9.34,4.31,18.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M206.63,519.9c-.14,6.46-.62,14.24-1.43,24.78-3.02,5.53-7.23,10.4-12.27,14.18-.84-.97-1.98-1.55-3.24-1.55-2.62,0-4.74,2.56-4.74,5.72s2.13,5.72,4.74,5.72,4.74-2.56,4.74-5.72c0-.44-.04-.87-.12-1.28,3.9-2.49,7.39-5.64,10.25-9.27-.88,10.61-2.04,23.68-3.51,40.22-1.74,19.55-3.48,37.17-5.06,52.32-8.16-3.45-14.92-9.97-19.43-17.64-4.22-7.18-6.6-15.31-7.74-23.58,1.45-38.89.38-73.55-.36-79.75-.17-1.4-.66-5.3-2.31-5.72-2.43-.62-4.05,2.4-4.71,4.81-1.65,6-3.31,12.01-4.95,18.03-11.23,15.3-26.74,27.43-44.29,34.63,9.87-67.67,8.79-96.7,8.79-96.7-1.14-30.75-4.67-76.94-6.37-99.35-.7-9.24-1.31-16.85-1.73-21.94-.9-4.03-3.04-16.08,3.5-27.97,1.61-2.93,5.29-9.64,13.06-13.42,10.41-5.06,21.12-1.45,24.02-.48,18.06,6.08,26.53,31.46,33.83,60.59.66,2.65,1.33,5.29,1.98,7.9-1.5-.34-3.06-.39-4.59-.16-.97-2.25-2.8-3.73-4.66-3.76-6.29-9.51-14.75-17.55-24.56-23.37h0c.17-.56.26-1.14.26-1.75,0-3.26-2.63-5.89-5.89-5.89s-5.88,2.63-5.88,5.89,2.63,5.88,5.88,5.88c1.34,0,2.58-.45,3.57-1.21,9.27,5.6,17.36,13.15,23.58,22.01-1.05,1.39-1.47,3.57-.97,5.82.38,1.7,1.21,3.14,2.27,4.09-4.2,10.68-9.39,20.97-15.5,30.69-.47-.12-.97-.19-1.48-.19-3.25,0-5.88,2.63-5.88,5.89s2.63,5.88,5.88,5.88,5.89-2.63,5.89-5.88c0-1.49-.55-2.86-1.47-3.89,6.52-9.76,11.88-20.28,15.96-31.28.11-.01.21-.03.32-.05,2.05-.45,3.37-2.68,3.39-5.35,1.67-.15,3.38.14,4.91.82,9.78,39.5,17.6,76.23,16.32,131.27Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M152.48,555.94c-11.93,44.41-22.72,89.16-27.59,134.84-.39,3.66-.79,7.46-2.66,10.62-1.35,2.28-3.37,4.06-5.38,5.78-8.46,7.17-17.73,13.8-28.39,16.84-10.66,3.05-23,2.01-31.61-4.98-2.38-1.93-4.46-4.33-5.52-7.21-2.07-5.63.26-12.18,4.46-16.46,4.21-4.28,9.97-6.65,15.74-8.32,6.14-1.78,12.8-3.06,17.48-7.41,5.35-4.97,6.97-11.55,7.76-15.51,2.25-11.3,4.3-22.03,6.15-32.2,2.38,6.67,5.86,12.95,10.26,18.49-2.23,2.87-2.56,6.37-.66,8.07,2.02,1.8,5.8.86,8.45-2.11,2.65-2.96,3.15-6.83,1.13-8.63-1.44-1.28-3.76-1.18-5.94.06-5.41-8.08-9.26-17.19-11.3-26.69,2.46-13.89,4.53-26.66,6.3-38.34,15.16-6.52,29.19-15.64,41.31-26.82Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M236.55,718.24c-2.95,8.56-12.93,11.31-15.32,11.97-12.21,3.36-23.38-2.69-33.72-8.28-5.75-3.11-14.23-8.5-22.95-17.5-1.24-1.05-3.05-2.84-4.16-5.54-1.72-4.18-.81-8.23-.5-9.63,4.36-19.66,6.86-44.92,8.22-69.79,1.47,5.52,3.49,10.87,6.34,15.81,4.7,8.15,11.88,15.16,20.62,18.44-.91,8.48-1.75,16.05-2.49,22.58,7.37,6.37,14.12,10.28,19.06,12.72,10.55,5.2,15.78,5.08,20.59,11.01.65.8,7.35,9.34,4.31,18.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M206.63,519.9c-.14,6.46-.62,14.24-1.43,24.78-3.02,5.53-7.23,10.4-12.27,14.18-.84-.97-1.98-1.55-3.24-1.55-2.62,0-4.74,2.56-4.74,5.72s2.13,5.72,4.74,5.72,4.74-2.56,4.74-5.72c0-.44-.04-.87-.12-1.28,3.9-2.49,7.39-5.64,10.25-9.27-.88,10.61-2.04,23.68-3.51,40.22-1.74,19.55-3.48,37.17-5.06,52.32-8.16-3.45-14.92-9.97-19.43-17.64-4.22-7.18-6.6-15.31-7.74-23.58,1.45-38.89.38-73.55-.36-79.75-.17-1.4-.66-5.3-2.31-5.72-2.43-.62-4.05,2.4-4.71,4.81-1.65,6-3.31,12.01-4.95,18.03-11.23,15.3-26.74,27.43-44.29,34.63,9.87-67.67,8.79-96.7,8.79-96.7-1.14-30.75-4.67-76.94-6.37-99.35-.7-9.24-1.31-16.85-1.73-21.94-.9-4.03-3.04-16.08,3.5-27.97,1.61-2.93,5.29-9.64,13.06-13.42,10.41-5.06,21.12-1.45,24.02-.48,18.06,6.08,26.53,31.46,33.83,60.59.66,2.65,1.33,5.29,1.98,7.9-1.5-.34-3.06-.39-4.59-.16-.97-2.25-2.8-3.73-4.66-3.76-6.29-9.51-14.75-17.55-24.56-23.37h0c.17-.56.26-1.14.26-1.75,0-3.26-2.63-5.89-5.89-5.89s-5.88,2.63-5.88,5.89,2.63,5.88,5.88,5.88c1.34,0,2.58-.45,3.57-1.21,9.27,5.6,17.36,13.15,23.58,22.01-1.05,1.39-1.47,3.57-.97,5.82.38,1.7,1.21,3.14,2.27,4.09-4.2,10.68-9.39,20.97-15.5,30.69-.47-.12-.97-.19-1.48-.19-3.25,0-5.88,2.63-5.88,5.89s2.63,5.88,5.88,5.88,5.89-2.63,5.89-5.88c0-1.49-.55-2.86-1.47-3.89,6.52-9.76,11.88-20.28,15.96-31.28.11-.01.21-.03.32-.05,2.05-.45,3.37-2.68,3.39-5.35,1.67-.15,3.38.14,4.91.82,9.78,39.5,17.6,76.23,16.32,131.27Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M152.48,555.94c-11.93,44.41-22.72,89.16-27.59,134.84-.39,3.66-.79,7.46-2.66,10.62-1.35,2.28-3.37,4.06-5.38,5.78-8.46,7.17-17.73,13.8-28.39,16.84-10.66,3.05-23,2.01-31.61-4.98-2.38-1.93-4.46-4.33-5.52-7.21-2.07-5.63.26-12.18,4.46-16.46,4.21-4.28,9.97-6.65,15.74-8.32,6.14-1.78,12.8-3.06,17.48-7.41,5.35-4.97,6.97-11.55,7.76-15.51,2.25-11.3,4.3-22.03,6.15-32.2,2.38,6.67,5.86,12.95,10.26,18.49-2.23,2.87-2.56,6.37-.66,8.07,2.02,1.8,5.8.86,8.45-2.11,2.65-2.96,3.15-6.83,1.13-8.63-1.44-1.28-3.76-1.18-5.94.06-5.41-8.08-9.26-17.19-11.3-26.69,2.46-13.89,4.53-26.66,6.3-38.34,15.16-6.52,29.19-15.64,41.31-26.82Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M236.55,718.24c-2.95,8.56-12.93,11.31-15.32,11.97-12.21,3.36-23.38-2.69-33.72-8.28-5.75-3.11-14.23-8.5-22.95-17.5-1.24-1.05-3.05-2.84-4.16-5.54-1.72-4.18-.81-8.23-.5-9.63,4.36-19.66,6.86-44.92,8.22-69.79,1.47,5.52,3.49,10.87,6.34,15.81,4.7,8.15,11.88,15.16,20.62,18.44-.91,8.48-1.75,16.05-2.49,22.58,7.37,6.37,14.12,10.28,19.06,12.72,10.55,5.2,15.78,5.08,20.59,11.01.65.8,7.35,9.34,4.31,18.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M156.49,541.17c-1.34,4.92-2.68,9.84-4.01,14.77h0c-12.13,11.19-26.16,20.31-41.31,26.83.35-2.37.7-4.69,1.03-6.97,17.55-7.2,33.06-19.33,44.29-34.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M120.98,656.37c-2.65,2.97-6.43,3.91-8.45,2.11-1.9-1.69-1.57-5.19.66-8.07-4.41-5.54-7.89-11.82-10.26-18.49h0c.68-3.69,1.32-7.28,1.94-10.81,2.04,9.5,5.9,18.61,11.3,26.69,2.17-1.24,4.5-1.34,5.94-.06,2.02,1.8,1.52,5.67-1.13,8.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M195.99,645.02c-.31,3-.62,5.9-.91,8.7-8.74-3.29-15.93-10.29-20.62-18.44-2.85-4.95-4.87-10.29-6.34-15.81h0c.28-5.26.52-10.5.71-15.66,1.14,8.27,3.51,16.39,7.74,23.58,4.51,7.67,11.27,14.19,19.43,17.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M190.31,388.63c-1.53-.69-3.24-.97-4.91-.82-.02,2.66-1.34,4.89-3.39,5.35-.11.02-.21.04-.32.05-4.07,11-9.44,21.52-15.96,31.28.92,1.03,1.47,2.4,1.47,3.89,0,3.25-2.63,5.88-5.89,5.88s-5.88-2.63-5.88-5.88,2.63-5.89,5.88-5.89c.51,0,1,.07,1.48.19,6.11-9.71,11.3-20,15.5-30.69-1.06-.95-1.89-2.38-2.27-4.09-.5-2.25-.08-4.43.97-5.82-6.23-8.86-14.32-16.41-23.58-22.01-.99.76-2.23,1.21-3.57,1.21-3.25,0-5.88-2.63-5.88-5.88s2.63-5.89,5.88-5.89,5.89,2.63,5.89,5.89c0,.61-.09,1.19-.26,1.74h0c9.8,5.82,18.26,13.87,24.56,23.37,1.86.03,3.69,1.52,4.66,3.76,1.52-.23,3.09-.18,4.59.16.35,1.4.7,2.8,1.05,4.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M205.19,544.67c-.19,2.44-.4,5.04-.63,7.8-2.86,3.63-6.35,6.78-10.25,9.27.08.41.12.84.12,1.28,0,3.16-2.13,5.72-4.74,5.72s-4.74-2.56-4.74-5.72,2.13-5.72,4.74-5.72c1.25,0,2.4.59,3.24,1.55,5.04-3.78,9.25-8.65,12.27-14.18Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M156.49,541.17c-1.34,4.92-2.68,9.84-4.01,14.77h0c-12.13,11.19-26.16,20.31-41.31,26.83.35-2.37.7-4.69,1.03-6.97,17.55-7.2,33.06-19.33,44.29-34.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M120.98,656.37c-2.65,2.97-6.43,3.91-8.45,2.11-1.9-1.69-1.57-5.19.66-8.07-4.41-5.54-7.89-11.82-10.26-18.49h0c.68-3.69,1.32-7.28,1.94-10.81,2.04,9.5,5.9,18.61,11.3,26.69,2.17-1.24,4.5-1.34,5.94-.06,2.02,1.8,1.52,5.67-1.13,8.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M195.99,645.02c-.31,3-.62,5.9-.91,8.7-8.74-3.29-15.93-10.29-20.62-18.44-2.85-4.95-4.87-10.29-6.34-15.81h0c.28-5.26.52-10.5.71-15.66,1.14,8.27,3.51,16.39,7.74,23.58,4.51,7.67,11.27,14.19,19.43,17.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M190.31,388.63c-1.53-.69-3.24-.97-4.91-.82-.02,2.66-1.34,4.89-3.39,5.35-.11.02-.21.04-.32.05-4.07,11-9.44,21.52-15.96,31.28.92,1.03,1.47,2.4,1.47,3.89,0,3.25-2.63,5.88-5.89,5.88s-5.88-2.63-5.88-5.88,2.63-5.89,5.88-5.89c.51,0,1,.07,1.48.19,6.11-9.71,11.3-20,15.5-30.69-1.06-.95-1.89-2.38-2.27-4.09-.5-2.25-.08-4.43.97-5.82-6.23-8.86-14.32-16.41-23.58-22.01-.99.76-2.23,1.21-3.57,1.21-3.25,0-5.88-2.63-5.88-5.88s2.63-5.89,5.88-5.89,5.89,2.63,5.89,5.89c0,.61-.09,1.19-.26,1.74h0c9.8,5.82,18.26,13.87,24.56,23.37,1.86.03,3.69,1.52,4.66,3.76,1.52-.23,3.09-.18,4.59.16.35,1.4.7,2.8,1.05,4.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M205.19,544.67c-.19,2.44-.4,5.04-.63,7.8-2.86,3.63-6.35,6.78-10.25,9.27.08.41.12.84.12,1.28,0,3.16-2.13,5.72-4.74,5.72s-4.74-2.56-4.74-5.72,2.13-5.72,4.74-5.72c1.25,0,2.4.59,3.24,1.55,5.04-3.78,9.25-8.65,12.27-14.18Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M156.49,541.17c-1.34,4.92-2.68,9.84-4.01,14.77h0c-12.13,11.19-26.16,20.31-41.31,26.83.35-2.37.7-4.69,1.03-6.97,17.55-7.2,33.06-19.33,44.29-34.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M120.98,656.37c-2.65,2.97-6.43,3.91-8.45,2.11-1.9-1.69-1.57-5.19.66-8.07-4.41-5.54-7.89-11.82-10.26-18.49h0c.68-3.69,1.32-7.28,1.94-10.81,2.04,9.5,5.9,18.61,11.3,26.69,2.17-1.24,4.5-1.34,5.94-.06,2.02,1.8,1.52,5.67-1.13,8.63Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M195.99,645.02c-.31,3-.62,5.9-.91,8.7-8.74-3.29-15.93-10.29-20.62-18.44-2.85-4.95-4.87-10.29-6.34-15.81h0c.28-5.26.52-10.5.71-15.66,1.14,8.27,3.51,16.39,7.74,23.58,4.51,7.67,11.27,14.19,19.43,17.64Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M190.31,388.63c-1.53-.69-3.24-.97-4.91-.82-.02,2.66-1.34,4.89-3.39,5.35-.11.02-.21.04-.32.05-4.07,11-9.44,21.52-15.96,31.28.92,1.03,1.47,2.4,1.47,3.89,0,3.25-2.63,5.88-5.89,5.88s-5.88-2.63-5.88-5.88,2.63-5.89,5.88-5.89c.51,0,1,.07,1.48.19,6.11-9.71,11.3-20,15.5-30.69-1.06-.95-1.89-2.38-2.27-4.09-.5-2.25-.08-4.43.97-5.82-6.23-8.86-14.32-16.41-23.58-22.01-.99.76-2.23,1.21-3.57,1.21-3.25,0-5.88-2.63-5.88-5.88s2.63-5.89,5.88-5.89,5.89,2.63,5.89,5.89c0,.61-.09,1.19-.26,1.74h0c9.8,5.82,18.26,13.87,24.56,23.37,1.86.03,3.69,1.52,4.66,3.76,1.52-.23,3.09-.18,4.59.16.35,1.4.7,2.8,1.05,4.2Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M205.19,544.67c-.19,2.44-.4,5.04-.63,7.8-2.86,3.63-6.35,6.78-10.25,9.27.08.41.12.84.12,1.28,0,3.16-2.13,5.72-4.74,5.72s-4.74-2.56-4.74-5.72,2.13-5.72,4.74-5.72c1.25,0,2.4.59,3.24,1.55,5.04-3.78,9.25-8.65,12.27-14.18Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M155.61,442.76c-11.93,3.18-24.29,4.72-36.64,4.58-4.51-11.23-6.93-22.73-9.17-33.39-.48-2.3-.97-4.8-1.42-7.5,3.85-5.14,8.97-9.34,14.76-12.12,1.28,2.97,3.47,4.83,5.32,4.31,2.16-.6,3.03-4.25,1.94-8.14-1.09-3.89-3.72-6.55-5.88-5.94-1.65.46-2.55,2.7-2.4,5.47-5.62,2.41-10.66,6.17-14.6,10.85-1.8-12.85-2.8-29.28-.85-48.38.73-8.29,4.42-14.36,8.79-15.05,1.7-.26,3.2.33,3.83.58,6.18,2.51,7.02,10.86,7.07,11.42.59,4.86,1.5,11.92,2.82,20.4,4.01,25.78,6.02,38.67,10.22,48.3,4.15,9.52,9.83,17.94,16.21,24.6Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M254.59,472.53c-3.7,4-8.46,9.02-14.16,14.8.78.29,1.7.78,2.06,1.67,1.48,3.64-7.7,10.34-8.36,10.81-2.43,1.74-10.08,6.66-28.89,5.71-20.46-1.03-36.03-8.1-44.02-12.36-4.68-2.5-13.47-7.27-22.12-15.52-7.73-7.38-13.22-15.51-17.29-23.91,13.78.43,27.62-1.08,40.99-4.46,4.98,3.9,10.18,6.71,15.26,8.17,2.99.86,6.97,2.01,11.89,1.08,7.02-1.34,8.69-5.64,19.66-11.38,4.19-2.19,11.4-5.96,13.77-3.63,1.3,1.28.65,3.88.44,4.7-1.2,4.83-5.52,5.42-11.12,12.03-2.59,3.06-3.89,4.64-3.93,6.78-.09,4.72,5.41,9,10.25,10.52,5.34,1.67,10.14.07,12.74-.84,13.11-4.58,16.73-16.26,24.4-14.97.5.08,2.75.47,3.43,2,1,2.27-2.05,5.62-5,8.8Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M155.61,442.76c-11.93,3.18-24.29,4.72-36.64,4.58-4.51-11.23-6.93-22.73-9.17-33.39-.48-2.3-.97-4.8-1.42-7.5,3.85-5.14,8.97-9.34,14.76-12.12,1.28,2.97,3.47,4.83,5.32,4.31,2.16-.6,3.03-4.25,1.94-8.14-1.09-3.89-3.72-6.55-5.88-5.94-1.65.46-2.55,2.7-2.4,5.47-5.62,2.41-10.66,6.17-14.6,10.85-1.8-12.85-2.8-29.28-.85-48.38.73-8.29,4.42-14.36,8.79-15.05,1.7-.26,3.2.33,3.83.58,6.18,2.51,7.02,10.86,7.07,11.42.59,4.86,1.5,11.92,2.82,20.4,4.01,25.78,6.02,38.67,10.22,48.3,4.15,9.52,9.83,17.94,16.21,24.6Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M254.59,472.53c-3.7,4-8.46,9.02-14.16,14.8.78.29,1.7.78,2.06,1.67,1.48,3.64-7.7,10.34-8.36,10.81-2.43,1.74-10.08,6.66-28.89,5.71-20.46-1.03-36.03-8.1-44.02-12.36-4.68-2.5-13.47-7.27-22.12-15.52-7.73-7.38-13.22-15.51-17.29-23.91,13.78.43,27.62-1.08,40.99-4.46,4.98,3.9,10.18,6.71,15.26,8.17,2.99.86,6.97,2.01,11.89,1.08,7.02-1.34,8.69-5.64,19.66-11.38,4.19-2.19,11.4-5.96,13.77-3.63,1.3,1.28.65,3.88.44,4.7-1.2,4.83-5.52,5.42-11.12,12.03-2.59,3.06-3.89,4.64-3.93,6.78-.09,4.72,5.41,9,10.25,10.52,5.34,1.67,10.14.07,12.74-.84,13.11-4.58,16.73-16.26,24.4-14.97.5.08,2.75.47,3.43,2,1,2.27-2.05,5.62-5,8.8Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M155.61,442.76c-11.93,3.18-24.29,4.72-36.64,4.58-4.51-11.23-6.93-22.73-9.17-33.39-.48-2.3-.97-4.8-1.42-7.5,3.85-5.14,8.97-9.34,14.76-12.12,1.28,2.97,3.47,4.83,5.32,4.31,2.16-.6,3.03-4.25,1.94-8.14-1.09-3.89-3.72-6.55-5.88-5.94-1.65.46-2.55,2.7-2.4,5.47-5.62,2.41-10.66,6.17-14.6,10.85-1.8-12.85-2.8-29.28-.85-48.38.73-8.29,4.42-14.36,8.79-15.05,1.7-.26,3.2.33,3.83.58,6.18,2.51,7.02,10.86,7.07,11.42.59,4.86,1.5,11.92,2.82,20.4,4.01,25.78,6.02,38.67,10.22,48.3,4.15,9.52,9.83,17.94,16.21,24.6Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M254.59,472.53c-3.7,4-8.46,9.02-14.16,14.8.78.29,1.7.78,2.06,1.67,1.48,3.64-7.7,10.34-8.36,10.81-2.43,1.74-10.08,6.66-28.89,5.71-20.46-1.03-36.03-8.1-44.02-12.36-4.68-2.5-13.47-7.27-22.12-15.52-7.73-7.38-13.22-15.51-17.29-23.91,13.78.43,27.62-1.08,40.99-4.46,4.98,3.9,10.18,6.71,15.26,8.17,2.99.86,6.97,2.01,11.89,1.08,7.02-1.34,8.69-5.64,19.66-11.38,4.19-2.19,11.4-5.96,13.77-3.63,1.3,1.28.65,3.88.44,4.7-1.2,4.83-5.52,5.42-11.12,12.03-2.59,3.06-3.89,4.64-3.93,6.78-.09,4.72,5.41,9,10.25,10.52,5.34,1.67,10.14.07,12.74-.84,13.11-4.58,16.73-16.26,24.4-14.97.5.08,2.75.47,3.43,2,1,2.27-2.05,5.62-5,8.8Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M128.46,398.64c-1.85.51-4.03-1.34-5.32-4.31-5.8,2.77-10.91,6.97-14.76,12.12-.3-1.77-.59-3.63-.86-5.56,3.94-4.68,8.98-8.44,14.6-10.85-.16-2.77.74-5.01,2.4-5.47,2.16-.61,4.8,2.05,5.88,5.94,1.09,3.89.22,7.53-1.94,8.14Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M162.79,449.28c-13.37,3.38-27.21,4.89-40.99,4.46-1.03-2.12-1.97-4.26-2.83-6.4,12.34.14,24.7-1.4,36.64-4.58,2.31,2.42,4.72,4.61,7.18,6.52Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M128.46,398.64c-1.85.51-4.03-1.34-5.32-4.31-5.8,2.77-10.91,6.97-14.76,12.12-.3-1.77-.59-3.63-.86-5.56,3.94-4.68,8.98-8.44,14.6-10.85-.16-2.77.74-5.01,2.4-5.47,2.16-.61,4.8,2.05,5.88,5.94,1.09,3.89.22,7.53-1.94,8.14Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M162.79,449.28c-13.37,3.38-27.21,4.89-40.99,4.46-1.03-2.12-1.97-4.26-2.83-6.4,12.34.14,24.7-1.4,36.64-4.58,2.31,2.42,4.72,4.61,7.18,6.52Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M128.46,398.64c-1.85.51-4.03-1.34-5.32-4.31-5.8,2.77-10.91,6.97-14.76,12.12-.3-1.77-.59-3.63-.86-5.56,3.94-4.68,8.98-8.44,14.6-10.85-.16-2.77.74-5.01,2.4-5.47,2.16-.61,4.8,2.05,5.88,5.94,1.09,3.89.22,7.53-1.94,8.14Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M162.79,449.28c-13.37,3.38-27.21,4.89-40.99,4.46-1.03-2.12-1.97-4.26-2.83-6.4,12.34.14,24.7-1.4,36.64-4.58,2.31,2.42,4.72,4.61,7.18,6.52Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path
                                        d="M187.08,273.39c2.77,28.52-18.1,53.89-46.62,56.66-28.53,2.77-53.89-18.1-56.66-46.62-1.42-14.66,3.4-28.5,12.31-38.86,2.14-2.49,4.51-4.78,7.1-6.83.88-.7,1.79-1.37,2.72-2.01,2.37-1.65,4.9-3.11,7.56-4.34,5.2-2.43,10.9-4.04,16.95-4.62,28.52-2.77,53.89,18.11,56.66,46.63Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                    <path
                                        d="M187.08,273.39c2.77,28.52-18.1,53.89-46.62,56.66-28.53,2.77-53.89-18.1-56.66-46.62-1.42-14.66,3.4-28.5,12.31-38.86,2.14-2.49,4.51-4.78,7.1-6.83.88-.7,1.79-1.37,2.72-2.01,2.37-1.65,4.9-3.11,7.56-4.34,5.2-2.43,10.9-4.04,16.95-4.62,28.52-2.77,53.89,18.11,56.66,46.63Z"
                                        fill="none"
                                        stroke="#0071bc"
                                        strokeWidth={1.19}
                                    />
                                    <g>
                                        <g>
                                            <path
                                                d="M144.57,202.55c.08.55.18,1.73.06,2.24l-1.55,31.36c-.05.42-.18.99-.56,1.51-1.25,1.71-4.07,1.42-5.51,1.27-1.31-.14-2.84-.32-4.01-1.55-.52-.55-.81-1.13-.96-1.53l.09-.66,4.41-30.87c.41-2.56,1.24-4.51,3.5-4.82,2.25-.31,4.21.71,4.53,3.06Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M118.3,232.16c-5.59-22.84-9.59-39.55-10.01-41.63-.09-.42-.29-1.45.2-2.46.13-.28.59-1.24,1.71-1.66.17-.06,1.2-.43,2.3.1,1.3.63,1.59,1.97,1.63,2.12,4.37,13.6,8.74,27.21,13.12,40.81-.62.88-1.29,1.43-1.74,1.76-2,1.41-4.14,1.37-4.88,1.35-.99-.03-1.79-.23-2.31-.4Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M113.47,231.39c-2.65,1.24-5.18,2.69-7.56,4.34-9.62-18.33-16.46-31.52-17.29-33.26-.17-.37-.6-1.28-.39-2.34.06-.29.26-1.29,1.21-1.94.15-.1,1.02-.68,2.17-.44,1.36.28,1.94,1.47,2.01,1.61,6.61,10.68,13.23,21.36,19.84,32.04Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M103.2,237.74c-2.59,2.05-4.96,4.34-7.1,6.83l-14.6-16.16c-1.53-1.75-2.38-3.48-1.27-5.34,1.11-1.85,2.97-2.74,4.79-1.65.43.25,1.3.85,1.58,1.22l16.59,15.1Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M144.57,202.55c.08.55.18,1.73.06,2.24l-1.55,31.36c-.05.42-.18.99-.56,1.51-1.25,1.71-4.07,1.42-5.51,1.27-1.31-.14-2.84-.32-4.01-1.55-.52-.55-.81-1.13-.96-1.53l.09-.66,4.41-30.87c.41-2.56,1.24-4.51,3.5-4.82,2.25-.31,4.21.71,4.53,3.06Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M118.3,232.16c-5.59-22.84-9.59-39.55-10.01-41.63-.09-.42-.29-1.45.2-2.46.13-.28.59-1.24,1.71-1.66.17-.06,1.2-.43,2.3.1,1.3.63,1.59,1.97,1.63,2.12,4.37,13.6,8.74,27.21,13.12,40.81-.62.88-1.29,1.43-1.74,1.76-2,1.41-4.14,1.37-4.88,1.35-.99-.03-1.79-.23-2.31-.4Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M113.47,231.39c-2.65,1.24-5.18,2.69-7.56,4.34-9.62-18.33-16.46-31.52-17.29-33.26-.17-.37-.6-1.28-.39-2.34.06-.29.26-1.29,1.21-1.94.15-.1,1.02-.68,2.17-.44,1.36.28,1.94,1.47,2.01,1.61,6.61,10.68,13.23,21.36,19.84,32.04Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M103.2,237.74c-2.59,2.05-4.96,4.34-7.1,6.83l-14.6-16.16c-1.53-1.75-2.38-3.48-1.27-5.34,1.11-1.85,2.97-2.74,4.79-1.65.43.25,1.3.85,1.58,1.22l16.59,15.1Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M144.57,202.55c.08.55.18,1.73.06,2.24l-1.55,31.36c-.05.42-.18.99-.56,1.51-1.25,1.71-4.07,1.42-5.51,1.27-1.31-.14-2.84-.32-4.01-1.55-.52-.55-.81-1.13-.96-1.53l.09-.66,4.41-30.87c.41-2.56,1.24-4.51,3.5-4.82,2.25-.31,4.21.71,4.53,3.06Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M118.3,232.16c-5.59-22.84-9.59-39.55-10.01-41.63-.09-.42-.29-1.45.2-2.46.13-.28.59-1.24,1.71-1.66.17-.06,1.2-.43,2.3.1,1.3.63,1.59,1.97,1.63,2.12,4.37,13.6,8.74,27.21,13.12,40.81-.62.88-1.29,1.43-1.74,1.76-2,1.41-4.14,1.37-4.88,1.35-.99-.03-1.79-.23-2.31-.4Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M113.47,231.39c-2.65,1.24-5.18,2.69-7.56,4.34-9.62-18.33-16.46-31.52-17.29-33.26-.17-.37-.6-1.28-.39-2.34.06-.29.26-1.29,1.21-1.94.15-.1,1.02-.68,2.17-.44,1.36.28,1.94,1.47,2.01,1.61,6.61,10.68,13.23,21.36,19.84,32.04Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                            <path
                                                d="M103.2,237.74c-2.59,2.05-4.96,4.34-7.1,6.83l-14.6-16.16c-1.53-1.75-2.38-3.48-1.27-5.34,1.11-1.85,2.97-2.74,4.79-1.65.43.25,1.3.85,1.58,1.22l16.59,15.1Z"
                                                fill="none"
                                                stroke="#0071bc"
                                                strokeWidth={1.19}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="none"
                                                        stroke="#0071bc"
                                                        strokeWidth={1.19}
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="none"
                                                    stroke="#0071bc"
                                                    strokeWidth={1.19}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path
                                            d="M180.19,272.12c-2.62,1.61-5.24,3.22-7.87,4.83.27,3.65.55,7.3.82,10.95,2.54-1.55,5.08-3.11,7.62-4.66-.19-3.71-.38-7.42-.58-11.12Z"
                                            fill="none"
                                            stroke="#0071bc"
                                            strokeWidth={1.19}
                                        />
                                        <path
                                            d="M156.3,286.81c-2.62,1.61-5.24,3.22-7.87,4.83.27,3.65.55,7.3.82,10.95,2.56-1.59,5.12-3.18,7.68-4.77-.21-3.67-.42-7.34-.64-11.01Z"
                                            fill="none"
                                            stroke="#0071bc"
                                            strokeWidth={1.19}
                                        />
                                    </g>
                                </g>
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
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M233.94,432.24c-3.96,1.1-9.59,2.23-16.33,1.98-23.84-.9-39.5-18.21-42.53-21.72-8.29-9.61-11.28-19.05-15.21-31.48-4.85-15.34-6.17-28.71-6.47-37.9-.12-.93-.83-7.31,3.47-11.23.71-.65,3.41-3.11,6.57-2.52.45.09,1.78.4,3.66,2.25,3.2,3.16,4.31,7.18,4.74,9.73.64,4.67,1.72,11.26,3.59,19.06,1.96,8.19,2.95,12.27,4.88,16.12,1.52,3.03,7.5,14.89,20.61,19.26,4.03,1.35,7.9,1.69,11.47,1.48,5.67,3.91,10.33,9.34,13.8,15.32,3.55,6.1,5.94,12.79,7.73,19.64Z"
                                                fill="url(#Degradado_sin_nombre_17)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M341.64,372.7c-1.37,3.49-6.98,4.28-9,4.59-16.68,2.62-36.53,12-41.62,14.64-6.77,3.52-1.99,2.65-25.72,21.74-11.05,8.89-17.06,13.07-23.24,15.76-1.54-5.36-4.2-10.48-6.87-15.42-2.27-4.2-4.61-8.41-7.73-12.03-2.04-2.37-4.46-4.49-7.19-6.01,2.57-.68,4.84-1.51,6.75-2.21,4.68-1.69,13.66-5.75,21.04-14.72,4.02-4.88,8.83-10.73,8.54-18.49-.11-2.99.14-9.64-4.44-14.06-1.93-1.86-4.7-3.94-3.9-6.5.4-1.28,1.57-2.02,1.97-2.25,4-2.3,10.04,1.06,12.23,2.32,8.35,4.78,7.68,9.06,12.42,11.53,11.72,6.14,35.44-9.74,50.85-11.85,2.01-.27,5.27-.51,7.19,1.45,1.31,1.34,1.99,3.69,1.16,5.28-.84,1.6-3,1.98-3.67,2.11-3.42.68-9.58,3.09-21.24,9.6,7.23-1.1,13.6-1.86,18.89-2.4,4.16-.42,8.32-.78,10.75,1.78.26.27,1.73,1.82,1.48,3.79-.25,1.94-2.08,3.63-4.64,4.23.44-.1,2.6-.53,4.36.77,2.07,1.53,2.33,4.52,1.62,6.34Z"
                                                fill="url(#Degradado_sin_nombre_17-2)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M233.94,432.24c-3.96,1.1-9.59,2.23-16.33,1.98-23.84-.9-39.5-18.21-42.53-21.72-8.29-9.61-11.28-19.05-15.21-31.48-4.85-15.34-6.17-28.71-6.47-37.9-.12-.93-.83-7.31,3.47-11.23.71-.65,3.41-3.11,6.57-2.52.45.09,1.78.4,3.66,2.25,3.2,3.16,4.31,7.18,4.74,9.73.64,4.67,1.72,11.26,3.59,19.06,1.96,8.19,2.95,12.27,4.88,16.12,1.52,3.03,7.5,14.89,20.61,19.26,4.03,1.35,7.9,1.69,11.47,1.48,5.67,3.91,10.33,9.34,13.8,15.32,3.55,6.1,5.94,12.79,7.73,19.64Z"
                                                fill="url(#Degradado_sin_nombre_24)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M341.64,372.7c-1.37,3.49-6.98,4.28-9,4.59-16.68,2.62-36.53,12-41.62,14.64-6.77,3.52-1.99,2.65-25.72,21.74-11.05,8.89-17.06,13.07-23.24,15.76-1.54-5.36-4.2-10.48-6.87-15.42-2.27-4.2-4.61-8.41-7.73-12.03-2.04-2.37-4.46-4.49-7.19-6.01,2.57-.68,4.84-1.51,6.75-2.21,4.68-1.69,13.66-5.75,21.04-14.72,4.02-4.88,8.83-10.73,8.54-18.49-.11-2.99.14-9.64-4.44-14.06-1.93-1.86-4.7-3.94-3.9-6.5.4-1.28,1.57-2.02,1.97-2.25,4-2.3,10.04,1.06,12.23,2.32,8.35,4.78,7.68,9.06,12.42,11.53,11.72,6.14,35.44-9.74,50.85-11.85,2.01-.27,5.27-.51,7.19,1.45,1.31,1.34,1.99,3.69,1.16,5.28-.84,1.6-3,1.98-3.67,2.11-3.42.68-9.58,3.09-21.24,9.6,7.23-1.1,13.6-1.86,18.89-2.4,4.16-.42,8.32-.78,10.75,1.78.26.27,1.73,1.82,1.48,3.79-.25,1.94-2.08,3.63-4.64,4.23.44-.1,2.6-.53,4.36.77,2.07,1.53,2.33,4.52,1.62,6.34Z"
                                                fill="url(#Degradado_sin_nombre_24)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <path
                                        d="M242.05,429.44c-1.4.61-2.8,1.13-4.28,1.62-1,.33-2.29.75-3.84,1.18-1.79-6.85-4.18-13.53-7.73-19.64-3.48-5.99-8.13-11.41-13.8-15.32,2.83-.16,5.47-.68,7.86-1.31h0c2.73,1.52,5.14,3.64,7.19,6.01,3.12,3.62,5.46,7.83,7.73,12.03,2.67,4.94,5.33,10.06,6.87,15.42Z"
                                        fill="url(#Degradado_sin_nombre_25)"
                                        strokeWidth={0}
                                    />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M206.63,519.9c-.14,6.46-.62,14.24-1.43,24.78-3.02,5.53-7.23,10.4-12.27,14.18-.84-.97-1.98-1.55-3.24-1.55-2.62,0-4.74,2.56-4.74,5.72s2.13,5.72,4.74,5.72,4.74-2.56,4.74-5.72c0-.44-.04-.87-.12-1.28,3.9-2.49,7.39-5.64,10.25-9.27-.88,10.61-2.04,23.68-3.51,40.22-1.74,19.55-3.48,37.17-5.06,52.32-8.16-3.45-14.92-9.97-19.43-17.64-4.22-7.18-6.6-15.31-7.74-23.58,1.45-38.89.38-73.55-.36-79.75-.17-1.4-.66-5.3-2.31-5.72-2.43-.62-4.05,2.4-4.71,4.81-1.65,6-3.31,12.01-4.95,18.03-11.23,15.3-26.74,27.43-44.29,34.63,9.87-67.67,8.79-96.7,8.79-96.7-1.14-30.75-4.67-76.94-6.37-99.35-.7-9.24-1.31-16.85-1.73-21.94-.9-4.03-3.04-16.08,3.5-27.97,1.61-2.93,5.29-9.64,13.06-13.42,10.41-5.06,21.12-1.45,24.02-.48,18.06,6.08,26.53,31.46,33.83,60.59.66,2.65,1.33,5.29,1.98,7.9-1.5-.34-3.06-.39-4.59-.16-.97-2.25-2.8-3.73-4.66-3.76-6.29-9.51-14.75-17.55-24.56-23.37h0c.17-.56.26-1.14.26-1.75,0-3.26-2.63-5.89-5.89-5.89s-5.88,2.63-5.88,5.89,2.63,5.88,5.88,5.88c1.34,0,2.58-.45,3.57-1.21,9.27,5.6,17.36,13.15,23.58,22.01-1.05,1.39-1.47,3.57-.97,5.82.38,1.7,1.21,3.14,2.27,4.09-4.2,10.68-9.39,20.97-15.5,30.69-.47-.12-.97-.19-1.48-.19-3.25,0-5.88,2.63-5.88,5.89s2.63,5.88,5.88,5.88,5.89-2.63,5.89-5.88c0-1.49-.55-2.86-1.47-3.89,6.52-9.76,11.88-20.28,15.96-31.28.11-.01.21-.03.32-.05,2.05-.45,3.37-2.68,3.39-5.35,1.67-.15,3.38.14,4.91.82,9.78,39.5,17.6,76.23,16.32,131.27Z"
                                                fill="url(#Degradado_sin_nombre_17-3)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M152.48,555.94c-11.93,44.41-22.72,89.16-27.59,134.84-.39,3.66-.79,7.46-2.66,10.62-1.35,2.28-3.37,4.06-5.38,5.78-8.46,7.17-17.73,13.8-28.39,16.84-10.66,3.05-23,2.01-31.61-4.98-2.38-1.93-4.46-4.33-5.52-7.21-2.07-5.63.26-12.18,4.46-16.46,4.21-4.28,9.97-6.65,15.74-8.32,6.14-1.78,12.8-3.06,17.48-7.41,5.35-4.97,6.97-11.55,7.76-15.51,2.25-11.3,4.3-22.03,6.15-32.2,2.38,6.67,5.86,12.95,10.26,18.49-2.23,2.87-2.56,6.37-.66,8.07,2.02,1.8,5.8.86,8.45-2.11,2.65-2.96,3.15-6.83,1.13-8.63-1.44-1.28-3.76-1.18-5.94.06-5.41-8.08-9.26-17.19-11.3-26.69,2.46-13.89,4.53-26.66,6.3-38.34,15.16-6.52,29.19-15.64,41.31-26.82Z"
                                                fill="url(#Degradado_sin_nombre_17-4)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M236.55,718.24c-2.95,8.56-12.93,11.31-15.32,11.97-12.21,3.36-23.38-2.69-33.72-8.28-5.75-3.11-14.23-8.5-22.95-17.5-1.24-1.05-3.05-2.84-4.16-5.54-1.72-4.18-.81-8.23-.5-9.63,4.36-19.66,6.86-44.92,8.22-69.79,1.47,5.52,3.49,10.87,6.34,15.81,4.7,8.15,11.88,15.16,20.62,18.44-.91,8.48-1.75,16.05-2.49,22.58,7.37,6.37,14.12,10.28,19.06,12.72,10.55,5.2,15.78,5.08,20.59,11.01.65.8,7.35,9.34,4.31,18.2Z"
                                                fill="url(#Degradado_sin_nombre_17-5)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M206.63,519.9c-.14,6.46-.62,14.24-1.43,24.78-3.02,5.53-7.23,10.4-12.27,14.18-.84-.97-1.98-1.55-3.24-1.55-2.62,0-4.74,2.56-4.74,5.72s2.13,5.72,4.74,5.72,4.74-2.56,4.74-5.72c0-.44-.04-.87-.12-1.28,3.9-2.49,7.39-5.64,10.25-9.27-.88,10.61-2.04,23.68-3.51,40.22-1.74,19.55-3.48,37.17-5.06,52.32-8.16-3.45-14.92-9.97-19.43-17.64-4.22-7.18-6.6-15.31-7.74-23.58,1.45-38.89.38-73.55-.36-79.75-.17-1.4-.66-5.3-2.31-5.72-2.43-.62-4.05,2.4-4.71,4.81-1.65,6-3.31,12.01-4.95,18.03-11.23,15.3-26.74,27.43-44.29,34.63,9.87-67.67,8.79-96.7,8.79-96.7-1.14-30.75-4.67-76.94-6.37-99.35-.7-9.24-1.31-16.85-1.73-21.94-.9-4.03-3.04-16.08,3.5-27.97,1.61-2.93,5.29-9.64,13.06-13.42,10.41-5.06,21.12-1.45,24.02-.48,18.06,6.08,26.53,31.46,33.83,60.59.66,2.65,1.33,5.29,1.98,7.9-1.5-.34-3.06-.39-4.59-.16-.97-2.25-2.8-3.73-4.66-3.76-6.29-9.51-14.75-17.55-24.56-23.37h0c.17-.56.26-1.14.26-1.75,0-3.26-2.63-5.89-5.89-5.89s-5.88,2.63-5.88,5.89,2.63,5.88,5.88,5.88c1.34,0,2.58-.45,3.57-1.21,9.27,5.6,17.36,13.15,23.58,22.01-1.05,1.39-1.47,3.57-.97,5.82.38,1.7,1.21,3.14,2.27,4.09-4.2,10.68-9.39,20.97-15.5,30.69-.47-.12-.97-.19-1.48-.19-3.25,0-5.88,2.63-5.88,5.89s2.63,5.88,5.88,5.88,5.89-2.63,5.89-5.88c0-1.49-.55-2.86-1.47-3.89,6.52-9.76,11.88-20.28,15.96-31.28.11-.01.21-.03.32-.05,2.05-.45,3.37-2.68,3.39-5.35,1.67-.15,3.38.14,4.91.82,9.78,39.5,17.6,76.23,16.32,131.27Z"
                                                fill="url(#Degradado_sin_nombre_30)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M152.48,555.94c-11.93,44.41-22.72,89.16-27.59,134.84-.39,3.66-.79,7.46-2.66,10.62-1.35,2.28-3.37,4.06-5.38,5.78-8.46,7.17-17.73,13.8-28.39,16.84-10.66,3.05-23,2.01-31.61-4.98-2.38-1.93-4.46-4.33-5.52-7.21-2.07-5.63.26-12.18,4.46-16.46,4.21-4.28,9.97-6.65,15.74-8.32,6.14-1.78,12.8-3.06,17.48-7.41,5.35-4.97,6.97-11.55,7.76-15.51,2.25-11.3,4.3-22.03,6.15-32.2,2.38,6.67,5.86,12.95,10.26,18.49-2.23,2.87-2.56,6.37-.66,8.07,2.02,1.8,5.8.86,8.45-2.11,2.65-2.96,3.15-6.83,1.13-8.63-1.44-1.28-3.76-1.18-5.94.06-5.41-8.08-9.26-17.19-11.3-26.69,2.46-13.89,4.53-26.66,6.3-38.34,15.16-6.52,29.19-15.64,41.31-26.82Z"
                                                fill="url(#Degradado_sin_nombre_30)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M236.55,718.24c-2.95,8.56-12.93,11.31-15.32,11.97-12.21,3.36-23.38-2.69-33.72-8.28-5.75-3.11-14.23-8.5-22.95-17.5-1.24-1.05-3.05-2.84-4.16-5.54-1.72-4.18-.81-8.23-.5-9.63,4.36-19.66,6.86-44.92,8.22-69.79,1.47,5.52,3.49,10.87,6.34,15.81,4.7,8.15,11.88,15.16,20.62,18.44-.91,8.48-1.75,16.05-2.49,22.58,7.37,6.37,14.12,10.28,19.06,12.72,10.55,5.2,15.78,5.08,20.59,11.01.65.8,7.35,9.34,4.31,18.2Z"
                                                fill="url(#Degradado_sin_nombre_30)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M156.49,541.17c-1.34,4.92-2.68,9.84-4.01,14.77h0c-12.13,11.19-26.16,20.31-41.31,26.83.35-2.37.7-4.69,1.03-6.97,17.55-7.2,33.06-19.33,44.29-34.63Z"
                                                fill="url(#Degradado_sin_nombre_362)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M120.98,656.37c-2.65,2.97-6.43,3.91-8.45,2.11-1.9-1.69-1.57-5.19.66-8.07-4.41-5.54-7.89-11.82-10.26-18.49h0c.68-3.69,1.32-7.28,1.94-10.81,2.04,9.5,5.9,18.61,11.3,26.69,2.17-1.24,4.5-1.34,5.94-.06,2.02,1.8,1.52,5.67-1.13,8.63Z"
                                                fill="url(#Degradado_sin_nombre_362-2)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M195.99,645.02c-.31,3-.62,5.9-.91,8.7-8.74-3.29-15.93-10.29-20.62-18.44-2.85-4.95-4.87-10.29-6.34-15.81h0c.28-5.26.52-10.5.71-15.66,1.14,8.27,3.51,16.39,7.74,23.58,4.51,7.67,11.27,14.19,19.43,17.64Z"
                                                fill="url(#Degradado_sin_nombre_362-3)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M190.31,388.63c-1.53-.69-3.24-.97-4.91-.82-.02,2.66-1.34,4.89-3.39,5.35-.11.02-.21.04-.32.05-4.07,11-9.44,21.52-15.96,31.28.92,1.03,1.47,2.4,1.47,3.89,0,3.25-2.63,5.88-5.89,5.88s-5.88-2.63-5.88-5.88,2.63-5.89,5.88-5.89c.51,0,1,.07,1.48.19,6.11-9.71,11.3-20,15.5-30.69-1.06-.95-1.89-2.38-2.27-4.09-.5-2.25-.08-4.43.97-5.82-6.23-8.86-14.32-16.41-23.58-22.01-.99.76-2.23,1.21-3.57,1.21-3.25,0-5.88-2.63-5.88-5.88s2.63-5.89,5.88-5.89,5.89,2.63,5.89,5.89c0,.61-.09,1.19-.26,1.74h0c9.8,5.82,18.26,13.87,24.56,23.37,1.86.03,3.69,1.52,4.66,3.76,1.52-.23,3.09-.18,4.59.16.35,1.4.7,2.8,1.05,4.2Z"
                                                fill="url(#Degradado_sin_nombre_362-4)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M205.19,544.67c-.19,2.44-.4,5.04-.63,7.8-2.86,3.63-6.35,6.78-10.25,9.27.08.41.12.84.12,1.28,0,3.16-2.13,5.72-4.74,5.72s-4.74-2.56-4.74-5.72,2.13-5.72,4.74-5.72c1.25,0,2.4.59,3.24,1.55,5.04-3.78,9.25-8.65,12.27-14.18Z"
                                                fill="url(#Degradado_sin_nombre_362-5)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M156.49,541.17c-1.34,4.92-2.68,9.84-4.01,14.77h0c-12.13,11.19-26.16,20.31-41.31,26.83.35-2.37.7-4.69,1.03-6.97,17.55-7.2,33.06-19.33,44.29-34.63Z"
                                                fill="url(#Degradado_sin_nombre_2)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M120.98,656.37c-2.65,2.97-6.43,3.91-8.45,2.11-1.9-1.69-1.57-5.19.66-8.07-4.41-5.54-7.89-11.82-10.26-18.49h0c.68-3.69,1.32-7.28,1.94-10.81,2.04,9.5,5.9,18.61,11.3,26.69,2.17-1.24,4.5-1.34,5.94-.06,2.02,1.8,1.52,5.67-1.13,8.63Z"
                                                fill="url(#Degradado_sin_nombre_2)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M195.99,645.02c-.31,3-.62,5.9-.91,8.7-8.74-3.29-15.93-10.29-20.62-18.44-2.85-4.95-4.87-10.29-6.34-15.81h0c.28-5.26.52-10.5.71-15.66,1.14,8.27,3.51,16.39,7.74,23.58,4.51,7.67,11.27,14.19,19.43,17.64Z"
                                                fill="url(#Degradado_sin_nombre_2)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M190.31,388.63c-1.53-.69-3.24-.97-4.91-.82-.02,2.66-1.34,4.89-3.39,5.35-.11.02-.21.04-.32.05-4.07,11-9.44,21.52-15.96,31.28.92,1.03,1.47,2.4,1.47,3.89,0,3.25-2.63,5.88-5.89,5.88s-5.88-2.63-5.88-5.88,2.63-5.89,5.88-5.89c.51,0,1,.07,1.48.19,6.11-9.71,11.3-20,15.5-30.69-1.06-.95-1.89-2.38-2.27-4.09-.5-2.25-.08-4.43.97-5.82-6.23-8.86-14.32-16.41-23.58-22.01-.99.76-2.23,1.21-3.57,1.21-3.25,0-5.88-2.63-5.88-5.88s2.63-5.89,5.88-5.89,5.89,2.63,5.89,5.89c0,.61-.09,1.19-.26,1.74h0c9.8,5.82,18.26,13.87,24.56,23.37,1.86.03,3.69,1.52,4.66,3.76,1.52-.23,3.09-.18,4.59.16.35,1.4.7,2.8,1.05,4.2Z"
                                                fill="url(#Degradado_sin_nombre_2)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M205.19,544.67c-.19,2.44-.4,5.04-.63,7.8-2.86,3.63-6.35,6.78-10.25,9.27.08.41.12.84.12,1.28,0,3.16-2.13,5.72-4.74,5.72s-4.74-2.56-4.74-5.72,2.13-5.72,4.74-5.72c1.25,0,2.4.59,3.24,1.55,5.04-3.78,9.25-8.65,12.27-14.18Z"
                                                fill="url(#Degradado_sin_nombre_2)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M155.61,442.76c-11.93,3.18-24.29,4.72-36.64,4.58-4.51-11.23-6.93-22.73-9.17-33.39-.48-2.3-.97-4.8-1.42-7.5,3.85-5.14,8.97-9.34,14.76-12.12,1.28,2.97,3.47,4.83,5.32,4.31,2.16-.6,3.03-4.25,1.94-8.14-1.09-3.89-3.72-6.55-5.88-5.94-1.65.46-2.55,2.7-2.4,5.47-5.62,2.41-10.66,6.17-14.6,10.85-1.8-12.85-2.8-29.28-.85-48.38.73-8.29,4.42-14.36,8.79-15.05,1.7-.26,3.2.33,3.83.58,6.18,2.51,7.02,10.86,7.07,11.42.59,4.86,1.5,11.92,2.82,20.4,4.01,25.78,6.02,38.67,10.22,48.3,4.15,9.52,9.83,17.94,16.21,24.6Z"
                                                fill="url(#Degradado_sin_nombre_17-6)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M254.59,472.53c-3.7,4-8.46,9.02-14.16,14.8.78.29,1.7.78,2.06,1.67,1.48,3.64-7.7,10.34-8.36,10.81-2.43,1.74-10.08,6.66-28.89,5.71-20.46-1.03-36.03-8.1-44.02-12.36-4.68-2.5-13.47-7.27-22.12-15.52-7.73-7.38-13.22-15.51-17.29-23.91,13.78.43,27.62-1.08,40.99-4.46,4.98,3.9,10.18,6.71,15.26,8.17,2.99.86,6.97,2.01,11.89,1.08,7.02-1.34,8.69-5.64,19.66-11.38,4.19-2.19,11.4-5.96,13.77-3.63,1.3,1.28.65,3.88.44,4.7-1.2,4.83-5.52,5.42-11.12,12.03-2.59,3.06-3.89,4.64-3.93,6.78-.09,4.72,5.41,9,10.25,10.52,5.34,1.67,10.14.07,12.74-.84,13.11-4.58,16.73-16.26,24.4-14.97.5.08,2.75.47,3.43,2,1,2.27-2.05,5.62-5,8.8Z"
                                                fill="url(#Degradado_sin_nombre_17-7)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M155.61,442.76c-11.93,3.18-24.29,4.72-36.64,4.58-4.51-11.23-6.93-22.73-9.17-33.39-.48-2.3-.97-4.8-1.42-7.5,3.85-5.14,8.97-9.34,14.76-12.12,1.28,2.97,3.47,4.83,5.32,4.31,2.16-.6,3.03-4.25,1.94-8.14-1.09-3.89-3.72-6.55-5.88-5.94-1.65.46-2.55,2.7-2.4,5.47-5.62,2.41-10.66,6.17-14.6,10.85-1.8-12.85-2.8-29.28-.85-48.38.73-8.29,4.42-14.36,8.79-15.05,1.7-.26,3.2.33,3.83.58,6.18,2.51,7.02,10.86,7.07,11.42.59,4.86,1.5,11.92,2.82,20.4,4.01,25.78,6.02,38.67,10.22,48.3,4.15,9.52,9.83,17.94,16.21,24.6Z"
                                                fill="url(#Degradado_sin_nombre_22)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M254.59,472.53c-3.7,4-8.46,9.02-14.16,14.8.78.29,1.7.78,2.06,1.67,1.48,3.64-7.7,10.34-8.36,10.81-2.43,1.74-10.08,6.66-28.89,5.71-20.46-1.03-36.03-8.1-44.02-12.36-4.68-2.5-13.47-7.27-22.12-15.52-7.73-7.38-13.22-15.51-17.29-23.91,13.78.43,27.62-1.08,40.99-4.46,4.98,3.9,10.18,6.71,15.26,8.17,2.99.86,6.97,2.01,11.89,1.08,7.02-1.34,8.69-5.64,19.66-11.38,4.19-2.19,11.4-5.96,13.77-3.63,1.3,1.28.65,3.88.44,4.7-1.2,4.83-5.52,5.42-11.12,12.03-2.59,3.06-3.89,4.64-3.93,6.78-.09,4.72,5.41,9,10.25,10.52,5.34,1.67,10.14.07,12.74-.84,13.11-4.58,16.73-16.26,24.4-14.97.5.08,2.75.47,3.43,2,1,2.27-2.05,5.62-5,8.8Z"
                                                fill="url(#Degradado_sin_nombre_22)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M128.46,398.64c-1.85.51-4.03-1.34-5.32-4.31-5.8,2.77-10.91,6.97-14.76,12.12-.3-1.77-.59-3.63-.86-5.56,3.94-4.68,8.98-8.44,14.6-10.85-.16-2.77.74-5.01,2.4-5.47,2.16-.61,4.8,2.05,5.88,5.94,1.09,3.89.22,7.53-1.94,8.14Z"
                                                fill="url(#Degradado_sin_nombre_362-6)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M162.79,449.28c-13.37,3.38-27.21,4.89-40.99,4.46-1.03-2.12-1.97-4.26-2.83-6.4,12.34.14,24.7-1.4,36.64-4.58,2.31,2.42,4.72,4.61,7.18,6.52Z"
                                                fill="url(#Degradado_sin_nombre_362-7)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M128.46,398.64c-1.85.51-4.03-1.34-5.32-4.31-5.8,2.77-10.91,6.97-14.76,12.12-.3-1.77-.59-3.63-.86-5.56,3.94-4.68,8.98-8.44,14.6-10.85-.16-2.77.74-5.01,2.4-5.47,2.16-.61,4.8,2.05,5.88,5.94,1.09,3.89.22,7.53-1.94,8.14Z"
                                                fill="url(#Degradado_sin_nombre_362-8)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M162.79,449.28c-13.37,3.38-27.21,4.89-40.99,4.46-1.03-2.12-1.97-4.26-2.83-6.4,12.34.14,24.7-1.4,36.64-4.58,2.31,2.42,4.72,4.61,7.18,6.52Z"
                                                fill="url(#Degradado_sin_nombre_362-9)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <path
                                        d="M187.08,273.39c2.77,28.52-18.1,53.89-46.62,56.66-28.53,2.77-53.89-18.1-56.66-46.62-1.42-14.66,3.4-28.5,12.31-38.86,2.14-2.49,4.51-4.78,7.1-6.83.88-.7,1.79-1.37,2.72-2.01,2.37-1.65,4.9-3.11,7.56-4.34,5.2-2.43,10.9-4.04,16.95-4.62,28.52-2.77,53.89,18.11,56.66,46.63Z"
                                        fill="url(#Degradado_sin_nombre_13)"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M187.08,273.39c2.77,28.52-18.1,53.89-46.62,56.66-28.53,2.77-53.89-18.1-56.66-46.62-1.42-14.66,3.4-28.5,12.31-38.86,2.14-2.49,4.51-4.78,7.1-6.83.88-.7,1.79-1.37,2.72-2.01,2.37-1.65,4.9-3.11,7.56-4.34,5.2-2.43,10.9-4.04,16.95-4.62,28.52-2.77,53.89,18.11,56.66,46.63Z"
                                        fill="url(#Degradado_sin_nombre_36)"
                                        strokeWidth={0}
                                    />
                                    <g>
                                        <g>
                                            <path
                                                d="M144.57,202.55c.08.55.18,1.73.06,2.24l-1.55,31.36c-.05.42-.18.99-.56,1.51-1.25,1.71-4.07,1.42-5.51,1.27-1.31-.14-2.84-.32-4.01-1.55-.52-.55-.81-1.13-.96-1.53l.09-.66,4.41-30.87c.41-2.56,1.24-4.51,3.5-4.82,2.25-.31,4.21.71,4.53,3.06Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M118.3,232.16c-5.59-22.84-9.59-39.55-10.01-41.63-.09-.42-.29-1.45.2-2.46.13-.28.59-1.24,1.71-1.66.17-.06,1.2-.43,2.3.1,1.3.63,1.59,1.97,1.63,2.12,4.37,13.6,8.74,27.21,13.12,40.81-.62.88-1.29,1.43-1.74,1.76-2,1.41-4.14,1.37-4.88,1.35-.99-.03-1.79-.23-2.31-.4Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M113.47,231.39c-2.65,1.24-5.18,2.69-7.56,4.34-9.62-18.33-16.46-31.52-17.29-33.26-.17-.37-.6-1.28-.39-2.34.06-.29.26-1.29,1.21-1.94.15-.1,1.02-.68,2.17-.44,1.36.28,1.94,1.47,2.01,1.61,6.61,10.68,13.23,21.36,19.84,32.04Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M103.2,237.74c-2.59,2.05-4.96,4.34-7.1,6.83l-14.6-16.16c-1.53-1.75-2.38-3.48-1.27-5.34,1.11-1.85,2.97-2.74,4.79-1.65.43.25,1.3.85,1.58,1.22l16.59,15.1Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M144.57,202.55c.08.55.18,1.73.06,2.24l-1.55,31.36c-.05.42-.18.99-.56,1.51-1.25,1.71-4.07,1.42-5.51,1.27-1.31-.14-2.84-.32-4.01-1.55-.52-.55-.81-1.13-.96-1.53l.09-.66,4.41-30.87c.41-2.56,1.24-4.51,3.5-4.82,2.25-.31,4.21.71,4.53,3.06Z"
                                                fill="url(#Degradado_sin_nombre_139)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M118.3,232.16c-5.59-22.84-9.59-39.55-10.01-41.63-.09-.42-.29-1.45.2-2.46.13-.28.59-1.24,1.71-1.66.17-.06,1.2-.43,2.3.1,1.3.63,1.59,1.97,1.63,2.12,4.37,13.6,8.74,27.21,13.12,40.81-.62.88-1.29,1.43-1.74,1.76-2,1.41-4.14,1.37-4.88,1.35-.99-.03-1.79-.23-2.31-.4Z"
                                                fill="url(#Degradado_sin_nombre_139)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M113.47,231.39c-2.65,1.24-5.18,2.69-7.56,4.34-9.62-18.33-16.46-31.52-17.29-33.26-.17-.37-.6-1.28-.39-2.34.06-.29.26-1.29,1.21-1.94.15-.1,1.02-.68,2.17-.44,1.36.28,1.94,1.47,2.01,1.61,6.61,10.68,13.23,21.36,19.84,32.04Z"
                                                fill="url(#Degradado_sin_nombre_139)"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M103.2,237.74c-2.59,2.05-4.96,4.34-7.1,6.83l-14.6-16.16c-1.53-1.75-2.38-3.48-1.27-5.34,1.11-1.85,2.97-2.74,4.79-1.65.43.25,1.3.85,1.58,1.22l16.59,15.1Z"
                                                fill="url(#Degradado_sin_nombre_139)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                    fill="#fff"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                    fill="#797985"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                    fill="#201f34"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <path
                                                d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                fill="#f2f2f2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                fill="#f2f2f2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g mix-blend-mode="multiply">
                                            <g>
                                                <g>
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M203.43,260.21c-.11-.06-.21-.11-.32-.16-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26-.27-.2-.56-.38-.85-.54,0,0-.02-.01-.03-.02-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45.3,1.84.59,3.68.89,5.51.08.47.22.88.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85.01,0,.03,0,.04,0,2,.26,4.18-.23,6.38-1.58,13.32-8.13,26.7-16.29,40.13-24.48,5.25-3.21,9.4-10.45,10.8-18.05.02,0,.05-.02.07-.04l1.74-1.08c1.54-.94,2.66-3.45,2.51-5.62l-.41-5.88c-.08-1.16-.5-1.99-1.1-2.37ZM187.83,284.38l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c2.99-1.76,5.69.41,6.06,4.83.37,4.42-1.74,9.47-4.7,11.29Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M192.53,273.09c.37,4.42-1.74,9.47-4.7,11.29l-38.3,23.42c-2.29,1.41-4.55.51-5.71-1.98.09-.04.18-.1.27-.15l38.29-23.42c2.96-1.82,5.07-6.87,4.7-11.29-.09-1.03-.3-1.93-.61-2.7,2.99-1.76,5.69.41,6.06,4.83Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M187.07,270.96c.37,4.42-1.73,9.47-4.7,11.29l-38.29,23.42c-.09.06-.18.11-.27.15-.33-.69-.57-1.5-.7-2.42-.62-4.29,1.28-9.29,4.26-11.12l38.99-23.96s.07-.04.1-.06c.31.76.52,1.67.61,2.7Z"
                                                        fill="url(#Degradado_sin_nombre_86)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                            </g>
                                            <g>
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M203.12,260.05c-.49-.19-1.07-.11-1.68.27l-1.77,1.09s-.06.04-.1.06c-.82-1.85-1.94-3.29-3.27-4.26,1.26.42,2.6.92,4,1.52,1,.42,1.94.87,2.82,1.32Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M195.42,256.66c-2.49-1.35-5.57-1.19-8.78.79-14,8.62-27.92,17.2-41.79,25.75-5.38,3.33-9.28,10.73-10.19,18.28-.02.01-.05.03-.07.04l-.07.04c-5.83-.8-10.61-1.78-13.95-2.55-8.98-2.04-20-4.64-31.94-11.56-2.96-1.72-5.27-3.29-6.71-4.31h-.02c-.13-1.3-.18-2.37-.22-3.18-.02-.45-.11-2.3.1-4.72.19-2.15.44-4.72,1.54-5.01.32-.08.62.04.84.16,1.06.89,2.57,2.07,4.49,3.29.81.5,4.25,2.64,10.21,4.63,6.74,2.25,12.3,2.84,14.1,2.99,6.96.59,12.3-.1,16.44-.64,2.74-.36,6.35-.85,10.98-2.18,3.95-1.14,6.78-2.36,9.49-3.54,4.55-1.97,7.73-3.73,11.49-5.83,5.18-2.89,8.23-4.9,11.11-7.12,0,0,4.37-3.38,5.95-7.43.57-1.46.53-2.57.51-2.95-.09-1.34-.59-2.35-.93-2.92,2.44.83,4.46,1.6,5.94,2.18,3.07,1.22,5.6,2.24,8.66,4,1.21.7,2.19,1.33,2.83,1.77Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M143.27,319.31c-5.12-.23-9.58-.8-13.21-1.44-4.21-.73-7.9-1.64-10.97-2.52-5-1.43-8.65-2.89-11.7-4.1,0,0-4.61-1.83-10.4-4.47h0s-3.59-1.69-5.83-3.16c-.56-.36-.87-.57-1.69-1.12-1.4-.93-1.59-1.07-1.91-1.33-.66-.54-1.2-1.08-1.48-1.63-.04-.07-.2-.41-.39-.84,1.15.69,2.79,1.64,4.78,2.69,3.47,1.82,6.12,2.96,9.18,4.26,2.69,1.14,6.32,2.68,11.29,4.4,2.24.78,5.78,2,10.56,3.26,4.28,1.13,8.23,1.94,11.75,2.54.51.14,1.07.05,1.65-.3l1.71-1.05s.06-.04.08-.06c1.59,2.8,3.92,4.49,6.57,4.85Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M130.71,308.04c.3,1.84.59,3.68.89,5.51.02.26.09.72.4,1.22,0,0,0,.01,0,.02,0,.01.02.03.03.04.3.53.73.89,1.22,1.03-3.53-.59-7.48-1.4-11.75-2.54-4.78-1.26-8.33-2.48-10.56-3.26-4.96-1.73-8.59-3.26-11.29-4.4-3.06-1.31-5.72-2.44-9.18-4.26-1.99-1.05-3.63-1.99-4.78-2.69-.5-.23-.99-.45-1.48-.67-.32-.18-.82-.51-1.27-1.1-.34-.45-.52-.88-.62-1.19-.31-1.79-.61-3.6-.9-5.44-.3-1.93-.59-3.83-.86-5.72-.02-.04-.24-.64,0-1.06.1-.18.25-.29.25-.29.12-.1.23-.13.34-.17.17-.05.33-.1.51-.06.11.03.19.09.23.13h.02c1.44,1.02,3.75,2.59,6.71,4.31,11.94,6.93,22.95,9.52,31.94,11.56,3.35.76,8.12,1.74,13.95,2.55l-1.67,1.03c-1.52.93-2.48,3.38-2.15,5.45Z"
                                                    fill="url(#Degradado_sin_nombre_86)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path
                                            d="M180.19,272.12c-2.62,1.61-5.24,3.22-7.87,4.83.27,3.65.55,7.3.82,10.95,2.54-1.55,5.08-3.11,7.62-4.66-.19-3.71-.38-7.42-.58-11.12Z"
                                            fill="url(#Degradado_sin_nombre_123)"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M156.3,286.81c-2.62,1.61-5.24,3.22-7.87,4.83.27,3.65.55,7.3.82,10.95,2.56-1.59,5.12-3.18,7.68-4.77-.21-3.67-.42-7.34-.64-11.01Z"
                                            fill="url(#Degradado_sin_nombre_101)"
                                            strokeWidth={0}
                                        />
                                    </g>
                                </g>
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
                    <g id="Canister" ref={canisterRef} style={{ opacity: 0, transition: "opacity 1.5s" }}                    >
                        <g id="Canister-2" data-name="Canister">
                            <path
                                id="Grid"
                                d="M1054.2,838.09v-.75l-7.54-4.35,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.82-7.39,6.33-3.67h-1.71l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.78,7.39-12.82-7.39,6.34-3.67h-1.71l-5.49,3.2-5.48-3.2h-1.71l6.34,3.67-12.83,7.39-12.82-7.39,6.34-3.67h-1.71l-5.49,3.2-5.48-3.2h-1.71l6.34,3.67-12.83,7.39-12.82-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.71l6.34,3.67-12.83,7.39-12.82-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.87,7.39-12.82-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.67l6.34,3.67-12.82,7.39-12.83-7.39,6.34-3.67h-1.71l-5.48,3.2-5.48-3.2h-1.67l6.29,3.67-12.82,7.39-12.83-7.39,6.34-3.67h-1.71l-5.48,3.2-5.49-3.2h-1.66l6.34,3.67-12.83,7.39-12.87-7.39,6.34-3.67h-1.71l-5.48,3.2-5.49-3.2h-1.66l6.34,3.67-12.83,7.39-12.87-7.39,6.34-3.67h-1.67l-5.48,3.2-5.48-3.2h-1.71l6.33,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.67l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.67l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.67l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.67l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.77,7.39-12.87-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.2h-1.72l6.34,3.67-12.82,7.39-12.77-7.39,6.34-3.67h-1.72l-5.48,3.2-5.53-3.2h-1.72l6.34,3.67-12.77,7.39-12.82-7.39,6.34-3.67h-1.72l-5.48,3.2-5.48-3.39h-1.67l6.34,3.67-12.87,7.39-10.87-6.24v1l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.44-10.87-6.3v.96l10.01,5.76-10.01,5.82v1l10.87-6.29,12.82,7.44-12.82,7.38-10.87-6.29v1l10.01,5.77-10.01,5.82v1l10.87-6.3,12.82,7.39-12.82,7.39-10.87-6.24v1l10.01,5.77-10.01,5.76v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1.01l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.82v1l10.87-6.3,12.82,7.39-12.82,7.39-10.87-6.24v1l10.01,5.77-10.01,5.76v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v.96l10.01,5.77-10.01,5.86v1l10.87-6.29,12.82,7.39-12.82,7.38-10.87-6.29v1l10.01,5.77-10.01,5.82v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.24v1l10.01,5.77-10.01,5.76v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.24v.95l10.01,5.77-10.01,5.86v1l10.87-6.29,12.82,7.39-12.82,7.38-10.87-6.24v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.24v1l10.01,5.77-10.01,5.76v1.01l10.87-6.3,12.82,7.39-12.82,7.44-10.87-6.29v.95l10.01,5.81-10.01,5.82v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.24v1l10.01,5.77-10.01,5.81v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v.96l10.01,5.76-10.01,5.82v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.38-10.87-6.24v1l10.01,5.77-10.01,5.81v.96l10.87-6.3,12.82,7.39-12.82,7.39-10.87-6.2v1.01l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.43-10.87-6.29v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.38-10.87-6.24v.95l10.01,5.77-10.01,5.86v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1.01l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.43-12.82,7.39-10.87-6.29v.95l10.01,5.77-10.01,5.86v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.24v1l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.82v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.24v.95l10.01,5.77-10.01,5.81v1.01l10.87-6.3,12.82,7.39-12.82,7.39-10.87-6.24v1l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.82v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.24v.95l10.01,5.77-10.01,5.77v1l10.87-6.29,12.82,7.38-12.82,7.39-10.87-6.19v1l10.01,5.76-10.01,5.77v1l10.87-6.29,12.82,7.39-12.82,7.39-10.87-6.25v1l10.01,5.77-10.01,5.77v1l10.87-6.29,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.07,6.96.75.43h1.72l.75-.43,12.07-6.96,12.07,6.96.75.43h1.72l.75-.43,12.07-6.96,12.07,6.96.75.43h1.72l.75-.43,12.07-6.96,12.07,6.96.75.43h1.67l.75-.43,12.08-6.96,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.08,6.96.75.43h1.66l.75-.43,12.08-6.96,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.07,6.96.75.43h1.67l.75-.43,12.07-6.96,12.08,6.96.75.43h1.66l.75-.43,12.08-6.96,12.07,6.96.75.43h1.71l.74-.43,12.09-7.01,12.16,7.01.66.38h1.71l.66-.38,12.17-7.01,12.16,7.01.66.38h1.67l.66-.38,12.16-7.01,12.16,7.01.66.38h1.67l.66-.38,12.16-7.01,12.16,7.01.66.38h1.67l.66-.38,12.17-7.01,12.16,7.01.66.38h1.71l.66-.38,12.17-7.01,12.16,7.01.66.38h1.71l.66-.38,12.17-7.01,12.16,7.01.66.38h1.72l.66-.38,12.16-7.01,12.16,7.01.66.38h1.72l.66-.38,12.16-7.01,12.16,7.01.66.38h1.72l.66-.38,12.16-7.01,12.16,7.01.66.38h1.72l.66-.38,7.31-4.21v-.6l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.01l-7.5-4.32,7.5-4.32v-1.06l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.34v-.99l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.93l-7.54-4.35,7.54-4.35v-1.03l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.34v-.99l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.98l-7.54-4.35,7.54-4.35v-.99l-8.35,4.81-12.83-7.38,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.34v-.99l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.98l-7.54-4.35,7.54-4.35v-.94l-8.35,4.81-12.83-7.39,12.83-7.38,8.35,4.81v-.99l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.97l-7.5-4.31,7.5-4.32v-1.07l-8.35,4.81-12.83-7.38,12.83-7.39,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.97l-7.5-4.32,7.5-4.32v-1.01l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.98l-7.54-4.35,7.54-4.35v-.94l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.98l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.99l-7.54-4.35,7.54-4.34v-.94l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.98l-7.54-4.35,7.54-4.35v-.99l-8.35,4.81-12.83-7.39,12.83-7.38,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.98l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.99l-7.54-4.35,7.54-4.34v-.94l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-.99l-7.54-4.34,7.54-4.35v-.99l-8.35,4.81-12.83-7.39,12.83-7.38,8.35,4.81v-.94l-7.54-4.35,7.54-4.35v-.99l-8.35,4.81-12.83-7.38,12.83-7.39,8.35,4.81v-.99l-7.54-4.35,7.54-4.34v-.94l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.02l-7.5-4.31,7.5-4.32v-.97l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.06l-7.5-4.32,7.5-4.32v-.97l-8.35,4.81-12.83-7.38,12.83-7.39,8.35,4.81v-1.02l-7.5-4.32,7.5-4.32v-.96l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.02l-7.5-4.31,7.5-4.32v-.97l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.06l-7.5-4.32,7.5-4.32v-.97l-8.35,4.81-12.83-7.38,12.83-7.39,8.35,4.81v-1.02l-7.5-4.32,7.5-4.32v-.96l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.01l-7.54-4.32,7.54-4.35v-.99l-8.35,4.81-12.83-7.39,12.83-7.39,8.35,4.81v-1.01l-7.5-4.32,7.5-4.32v-1.01l-8.35,4.81-12.83-7.39s12.83-7.39,12.83-7.39l8.35,4.81ZM1018.48,833.28l12.83,7.39-12.83,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM800.51,1085.53l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM812.42,1093.44l-12.77,7.39-12.87-7.39,12.82-7.39,12.82,7.39ZM799.65,1085.01l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM785.06,1093.39l-12.77,7.44-12.87-7.44,12.82-7.38,12.82,7.38ZM772.29,1085.01l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,1085.53l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM757.75,1093.39l-12.82,7.44-12.83-7.44,12.83-7.38,12.82,7.38ZM744.93,1085.01l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,1085.53l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM730.39,1093.39l-12.82,7.44-12.83-7.44,12.83-7.38,12.82,7.38ZM717.57,1085.01l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,1085.53l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM703.03,1093.39l-12.82,7.44-12.83-7.44,12.83-7.38,12.82,7.38ZM690.21,1085.01l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,1085.53l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM675.67,1093.39l-12.82,7.44-12.83-7.44,12.83-7.38,12.82,7.38ZM662.85,1085.01l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,1085.53l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM661.99,1101.31l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM662.85,1101.78l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1101.31l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1101.78l12.82,7.39-12.82,7.44-12.83-7.39,12.83-7.44ZM691.06,1101.31l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1101.78l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1101.31l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1101.78l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1101.31l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1101.78l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1101.31l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1101.78l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1101.31l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1101.78l12.82,7.39-12.82,7.44-12.87-7.39,12.87-7.44ZM814.14,1093.44l12.82-7.39,12.82,7.39-12.77,7.39-12.87-7.39ZM814.14,1077.62l12.82-7.39,12.82,7.39-12.77,7.39-12.87-7.39ZM814.14,1061.84l12.82-7.39,12.82,7.39-12.77,7.39-12.87-7.39ZM826.15,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM799.65,1069.23l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM772.29,1069.23l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,1069.7l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM744.93,1069.23l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,1069.7l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM717.57,1069.23l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,1069.7l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM690.21,1069.23l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,1069.7l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM662.85,1069.23l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,1069.7l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM635.48,1069.23l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM648.31,1077.62l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM648.31,1093.39l-12.83,7.44-12.82-7.39,12.82-7.39,12.83,7.34ZM648.31,1109.22l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM648.31,1125l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM636.34,1117.13l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1117.61l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1117.13l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1117.61l12.82,7.39-12.82,7.43-12.83-7.38,12.83-7.44ZM691.06,1117.13l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1117.61l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1117.13l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1117.61l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1117.13l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1117.61l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1117.13l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1117.61l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1117.13l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1117.61l12.82,7.39-12.82,7.43-12.87-7.43,12.87-7.39ZM827.82,1117.13l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.82,1101.31l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.87,1085.53l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.87,1069.7l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM827.87,1053.93l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1053.45l-12.87-7.44,12.82-7.38,12.82,7.38-12.77,7.44ZM826.15,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,1053.45l-12.87-7.44,12.82-7.38,12.82,7.38-12.77,7.44ZM798.79,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,1053.45l-12.87-7.44,12.82-7.38,12.82,7.38-12.77,7.44ZM771.43,1053.93l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,1053.45l-12.83-7.44,12.83-7.38,12.82,7.38-12.82,7.44ZM744.07,1053.93l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,1053.45l-12.83-7.44,12.83-7.38,12.82,7.38-12.82,7.44ZM716.71,1053.93l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,1053.45l-12.83-7.44,12.83-7.38,12.82,7.38-12.82,7.44ZM689.35,1053.93l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,1053.45l-12.83-7.44,12.83-7.38,12.82,7.38-12.82,7.44ZM661.99,1053.93l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,1053.45l-12.82-7.44,12.82-7.38,12.83,7.38-12.83,7.44ZM634.67,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM634.67,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM634.67,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM634.67,1101.31l-12.82,7.39-12.87-7.39,12.82-7.39,12.87,7.39ZM634.67,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM634.67,1132.91l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM635.48,1133.39l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM636.34,1132.91l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1133.39l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM663.7,1132.91l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1133.39l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM691.06,1132.91l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1133.39l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM718.42,1132.91l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1133.39l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM745.78,1132.91l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1133.39l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM773.15,1132.91l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1133.39l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM800.46,1132.91l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1133.39l12.82,7.39-12.82,7.43-12.87-7.43,12.87-7.39ZM827.82,1132.91l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1133.39l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM841.5,1125l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM841.5,1109.17l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM841.5,1093.44l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM841.5,1077.62l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM841.5,1061.84l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM841.5,1046.01l12.82-7.38,12.82,7.38-12.82,7.44-12.82-7.44ZM841.5,1030.24l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM853.51,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,1037.63l-12.87-7.39,12.82-7.39,12.82,7.39-12.77,7.39ZM826.15,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,1037.63l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,1037.63l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,1038.15l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,1037.63l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,1038.15l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,1037.63l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,1038.15l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,1037.63l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,1038.15l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,1037.63l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,1038.15l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,1037.63l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,1038.15l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM608.12,1037.63l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM620.95,1046.01l-12.83,7.44-12.82-7.44,12.82-7.38,12.83,7.38ZM608.17,1054.45l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM620.99,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM620.99,1093.39l-12.87,7.44-12.82-7.39,12.82-7.39,12.87,7.34ZM608.17,1101.83l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM620.99,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM620.99,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM620.95,1156.6l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM608.98,1148.69l12.82-7.39,12.83,7.39-12.83,7.43-12.82-7.43ZM635.48,1149.21l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1148.69l12.82-7.39,12.83,7.39-12.83,7.43-12.82-7.43ZM662.85,1149.21l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1148.69l12.83-7.39,12.82,7.39-12.82,7.43-12.83-7.43ZM690.21,1149.21l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM691.06,1148.69l12.83-7.39,12.82,7.39-12.82,7.43-12.83-7.43ZM717.57,1149.21l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1148.69l12.83-7.39,12.82,7.39-12.82,7.43-12.83-7.43ZM744.93,1149.21l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1148.69l12.83-7.39,12.82,7.39-12.82,7.43-12.83-7.43ZM772.29,1149.21l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM773.15,1148.69l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM799.65,1149.21l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM800.46,1148.69l12.82-7.39,12.82,7.39-12.77,7.43-12.87-7.43ZM827.01,1149.21l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM827.82,1148.69l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM854.32,1149.21l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1148.69l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM855.18,1132.91l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM855.18,1117.13l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM855.18,1101.31l12.82-7.39,12.87,7.39-12.87,7.39-12.82-7.39ZM855.18,1085.53l12.82-7.39,12.87,7.39-12.87,7.39-12.82-7.39ZM855.18,1069.75l12.82-7.39,12.87,7.34-12.87,7.44-12.82-7.39ZM855.18,1053.93l12.82-7.39,12.87,7.39-12.87,7.39-12.82-7.39ZM855.18,1038.15l12.82-7.39,12.87,7.39-12.87,7.39-12.82-7.39ZM855.18,1022.37l12.82-7.39,12.87,7.34-12.87,7.44-12.82-7.39ZM854.32,1021.85l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM827.01,1021.85l-12.87-7.39,12.82-7.39,12.82,7.39-12.77,7.39ZM826.15,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM799.65,1021.85l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM772.29,1021.85l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,1022.32l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM744.93,1021.85l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,1022.32l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM717.57,1021.85l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,1022.32l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM690.21,1021.85l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,1022.32l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM662.85,1021.85l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,1022.32l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM635.48,1021.85l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM608.12,1021.85l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM607.31,1038.15l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM594.49,1046.54l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM607.31,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM607.31,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM607.31,1101.31l-12.82,7.39-12.87-7.39,12.82-7.39,12.87,7.39ZM607.31,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM607.31,1132.91l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM607.31,1148.69l-12.87,7.43-12.82-7.38,12.82-7.39,12.87,7.34ZM594.49,1157.12l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM608.12,1164.99l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1164.51l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1164.99l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1164.51l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1164.99l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1164.51l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1164.99l12.82,7.39-12.82,7.43-12.83-7.38,12.83-7.44ZM691.06,1164.51l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1164.99l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1164.51l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1164.99l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1164.51l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1164.99l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1164.51l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1164.99l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1164.51l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1164.99l12.82,7.39-12.82,7.43-12.87-7.43,12.87-7.39ZM827.82,1164.51l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1164.99l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1164.51l12.82-7.43,12.82,7.39-12.82,7.43-12.82-7.39ZM881.68,1164.99l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM868.86,1156.6l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1140.78l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM868.86,1125l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1109.17l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1093.44l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1077.62l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1061.84l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1046.01l12.82-7.38,12.82,7.38-12.82,7.44-12.82-7.44ZM868.86,1030.24l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,1014.46l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM868.86,998.68l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM880.87,1006.55l-12.87,7.38-12.82-7.38,12.82-7.39,12.87,7.39ZM854.32,1006.07l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM827.01,1006.07l-12.87-7.44,12.82-7.38,12.82,7.38-12.77,7.44ZM826.15,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM799.65,1006.07l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM772.29,1006.07l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,1006.55l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM744.93,1006.07l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,1006.55l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM717.57,1006.07l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,1006.55l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM690.21,1006.07l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,1006.55l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM662.85,1006.07l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,1006.55l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM635.48,1006.07l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM608.12,1006.07l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM580.81,1006.07l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM593.63,1014.46l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1030.24l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1046.01l-12.82,7.39-12.87-7.39,12.82-7.38,12.87,7.38ZM593.63,1061.84l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1093.39l-12.87,7.44-12.82-7.39,12.82-7.39,12.87,7.34ZM580.81,1101.83l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM593.63,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM593.63,1156.6l-12.82,7.39-12.87-7.39,12.87-7.39,12.82,7.39ZM593.63,1172.38l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM593.63,1188.2l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM581.62,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1180.77l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM608.98,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1180.77l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM636.34,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1180.77l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM663.7,1180.29l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1180.77l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM691.06,1180.29l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1180.77l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM718.42,1180.29l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1180.77l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM745.78,1180.29l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1180.77l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM773.15,1180.29l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1180.77l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM800.46,1180.29l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1180.77l12.82,7.39-12.82,7.43-12.87-7.39,12.87-7.43ZM827.82,1180.29l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1180.77l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM855.18,1180.29l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1180.77l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM882.54,1180.29l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1164.51l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1148.69l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM882.54,1132.91l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1117.13l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1101.31l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1085.53l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1069.7l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM882.54,1053.93l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1038.15l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM882.54,1022.32l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM882.54,1006.55l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM882.54,990.77l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,990.24l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM880.87,990.77l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM854.32,990.24l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM853.51,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,990.24l-12.87-7.38,12.82-7.39,12.82,7.39-12.77,7.38ZM826.15,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,990.24l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM798.79,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,990.24l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM771.43,990.77l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,990.24l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM744.07,990.77l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,990.24l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM716.71,990.77l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,990.24l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM689.35,990.77l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,990.24l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM661.99,990.77l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,990.24l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM634.67,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM608.12,990.24l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM607.31,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,990.24l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM579.95,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM579.95,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM579.95,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM579.95,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1101.31l-12.82,7.39-12.87-7.39,12.82-7.39,12.87,7.39ZM579.95,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1132.91l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1148.69l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM579.95,1164.51l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1180.29l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM579.95,1196.07l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1196.59l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1196.59l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1196.59l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1196.07l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1196.59l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM691.06,1196.07l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1196.59l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1196.07l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1196.59l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1196.07l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1196.07l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1196.07l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1196.59l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM827.82,1196.07l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1196.07l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM881.68,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1196.07l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1196.59l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM896.22,1188.16l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM896.22,1172.38l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1156.6l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1140.78l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM896.22,1125l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1109.17l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1093.44l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1077.62l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1061.84l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1046.06l12.82-7.39,12.82,7.34-12.82,7.44-12.82-7.39ZM896.22,1030.24l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,1014.46l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,998.68l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM896.22,982.86l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM896.22,967.08l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM908.18,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM881.68,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM880.87,974.94l-12.87,7.44-12.82-7.39,12.82-7.39,12.87,7.34ZM854.32,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM827.01,974.47l-12.87-7.39,12.82-7.39,12.82,7.39-12.77,7.39ZM826.15,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM799.65,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM772.29,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,974.94l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM744.93,974.47l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,974.94l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM717.57,974.47l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,974.94l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM690.21,974.47l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,974.94l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM662.85,974.47l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,974.94l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM635.48,974.47l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM608.12,974.47l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM580.81,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM579.95,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM553.45,974.47l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM566.27,982.86l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM566.27,998.63l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM566.27,1014.46l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1030.24l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1046.01l-12.82,7.39-12.87-7.39,12.82-7.38,12.87,7.38ZM566.27,1061.84l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1093.39l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM566.27,1109.22l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM566.27,1156.6l-12.82,7.39-12.87-7.39,12.87-7.39,12.82,7.39ZM566.27,1172.38l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1188.2l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM566.27,1203.98l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM566.27,1219.76l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM554.26,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM580.81,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM608.12,1212.37l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM635.48,1212.37l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM662.85,1212.37l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1211.89l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM690.21,1212.37l12.82,7.39-12.82,7.43-12.83-7.38,12.83-7.44ZM691.06,1211.89l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM717.57,1212.37l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1211.89l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM744.93,1212.37l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1211.89l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM772.29,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1211.89l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM799.65,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1211.89l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM827.01,1212.37l12.82,7.39-12.82,7.43-12.87-7.43,12.87-7.39ZM827.82,1211.89l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM854.32,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1211.89l12.82-7.38,12.87,7.38-12.87,7.39-12.82-7.39ZM881.68,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1211.89l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.04,1212.37l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM909.9,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1164.51l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1148.69l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1132.91l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1117.13l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1101.31l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM909.9,1085.53l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.9,1069.7l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.9,1053.93l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.9,1038.15l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.9,1022.32l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.9,1006.55l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM909.9,990.77l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.9,974.94l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.9,959.17l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM909.04,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM908.18,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM881.68,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM880.87,959.17l-12.87,7.38-12.82-7.38,12.82-7.39,12.87,7.39ZM854.32,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM827.01,958.69l-12.87-7.44,12.82-7.38,12.82,7.38-12.77,7.44ZM826.15,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM799.65,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM772.29,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,959.17l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM744.93,958.69l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,959.17l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM717.57,958.69l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,959.17l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM690.21,958.69l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,959.17l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM662.85,958.69l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,959.17l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM635.48,958.69l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM608.12,958.69l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM580.81,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM579.95,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM553.45,958.69l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM552.59,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM552.59,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM552.59,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM552.59,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM552.59,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM552.59,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1101.31l-12.82,7.39-12.87-7.39,12.82-7.39,12.87,7.39ZM552.59,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1132.91l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1148.69l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM552.59,1164.47l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM552.59,1180.29l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1196.07l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM552.59,1211.89l-12.82,7.39-12.87-7.39,12.82-7.38,12.87,7.38ZM552.59,1227.67l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM554.26,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM580.81,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM581.62,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1228.15l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM608.98,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1228.15l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM636.34,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1228.15l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM663.7,1227.67l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1228.15l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM691.06,1227.67l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1228.15l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM718.42,1227.67l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1228.15l12.82,7.39-12.82,7.38-12.83-7.38,12.83-7.39ZM745.78,1227.67l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM773.15,1227.67l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM800.46,1227.67l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1228.15l12.82,7.39-12.82,7.43-12.87-7.39,12.87-7.43ZM827.82,1227.67l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM855.18,1227.67l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM882.54,1227.67l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1228.15l12.82,7.39-12.82,7.38-12.82-7.38,12.82-7.39ZM909.9,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1228.15l12.83,7.39-12.83,7.38-12.82-7.38,12.82-7.39ZM923.58,1219.76l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1203.98l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1188.16l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM923.58,1172.38l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1156.6l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1140.78l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM923.58,1125l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1109.17l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1093.44l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1077.62l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1061.84l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1046.06l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1030.24l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,1014.46l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,998.68l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,982.86l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM923.58,967.08l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,951.3l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM923.58,935.48l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM935.54,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM909.04,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM908.18,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM881.68,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM880.87,943.34l-12.87,7.44-12.82-7.39,12.82-7.39,12.87,7.34ZM854.32,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM853.51,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,942.86l-12.87-7.38,12.82-7.39,12.82,7.39-12.77,7.38ZM826.15,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM798.79,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM771.43,943.34l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,942.86l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM744.07,943.34l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,942.86l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM716.71,943.34l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,942.86l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM689.35,943.34l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,942.86l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM661.99,943.34l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,942.86l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM634.67,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM608.12,942.86l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM607.31,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM579.95,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM552.59,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.09,942.86l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM538.91,951.3l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,967.08l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,982.86l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM538.91,998.63l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM538.91,1014.46l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1030.24l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1046.01l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM538.91,1061.84l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1093.39l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM538.91,1109.22l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM538.91,1156.6l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1172.38l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1188.2l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM538.91,1203.98l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1219.76l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM538.91,1235.58l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM538.91,1251.36l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.9,1243.45l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM553.45,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM580.81,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1243.97l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1243.97l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1243.97l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1243.45l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1243.97l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM691.06,1243.45l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1243.97l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1243.45l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1243.97l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1243.45l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1243.45l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1243.45l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1243.97l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM827.82,1243.45l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1243.45l12.82-7.39,12.82,7.39-12.82,7.43-12.82-7.43ZM881.68,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1243.45l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1243.97l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1243.97l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM937.26,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1164.51l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1148.69l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1132.91l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1117.13l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1101.31l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1085.53l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1069.7l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM937.26,1053.93l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1038.15l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,1022.32l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM937.26,1006.55l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM937.26,990.77l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,974.94l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM937.26,959.17l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM937.26,943.34l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM937.26,927.56l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,927.09l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM935.54,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM909.04,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM908.18,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM881.68,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM880.87,927.56l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM854.32,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,927.09l-12.87-7.44,12.82-7.39,12.82,7.39-12.77,7.44ZM826.15,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,927.56l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,927.09l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,927.56l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,927.09l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,927.56l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,927.09l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,927.56l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,927.09l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,927.56l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,927.09l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,927.56l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM608.12,927.09l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,927.56l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM580.81,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM579.95,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM552.59,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.09,927.09l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM525.23,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,943.34l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM525.23,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM525.23,974.94l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM525.23,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM525.23,1022.32l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM525.23,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1069.7l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM525.23,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1101.31l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1132.86l-12.82,7.44-12.82-7.39,12.82-7.44,12.82,7.39ZM525.23,1148.69l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM525.23,1164.51l-12.82,7.39-12.82-7.39,12.82-7.43,12.82,7.43ZM525.23,1180.29l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1196.07l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM525.23,1211.89l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM525.23,1227.67l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM525.23,1243.45l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM525.23,1259.27l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM526.09,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM526.9,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM553.45,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM580.81,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM608.12,1259.75l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM635.48,1259.75l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM662.85,1259.75l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1259.27l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM690.21,1259.75l12.82,7.39-12.82,7.44-12.83-7.39,12.83-7.44ZM691.06,1259.27l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM717.57,1259.75l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1259.27l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM744.93,1259.75l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1259.27l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM772.29,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM799.65,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM827.01,1259.75l12.82,7.39-12.82,7.44-12.87-7.44,12.87-7.39ZM827.82,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM854.32,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM881.68,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1259.27l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.04,1259.75l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM936.4,1259.75l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM963.76,1259.75l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM950.94,1251.36l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1235.54l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM950.94,1219.76l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1203.98l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1188.16l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM950.94,1172.38l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1156.6l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1140.78l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM950.94,1125l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1109.17l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1093.44l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1077.62l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1061.84l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1046.01l12.82-7.38,12.83,7.38-12.83,7.44-12.82-7.44ZM950.94,1030.24l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,1014.46l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,998.68l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,982.86l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM950.94,967.08l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,951.3l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,935.48l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM950.94,919.7l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM950.94,903.92l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM962.91,911.79l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM936.4,911.31l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM935.54,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM909.04,911.31l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM908.18,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM881.68,911.31l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM880.87,911.79l-12.87,7.38-12.82-7.38,12.82-7.39,12.87,7.39ZM854.32,911.31l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM827.01,911.31l-12.87-7.44,12.82-7.39,12.82,7.39-12.77,7.44ZM826.15,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM799.65,911.31l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM772.29,911.26l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,911.79l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM744.93,911.26l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,911.79l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM717.57,911.26l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,911.79l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM690.21,911.26l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM689.35,911.79l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM662.85,911.26l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,911.79l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM635.48,911.26l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM608.12,911.26l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM580.81,911.26l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM579.95,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM553.45,911.26l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM552.59,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM526.09,911.26l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM525.23,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM498.73,911.26l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM511.55,919.7l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,935.48l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM511.55,951.25l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM511.55,967.08l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,982.86l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM511.55,998.63l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM511.55,1014.46l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1030.24l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1046.01l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM511.55,1061.84l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1093.39l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM511.55,1109.22l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM511.55,1156.6l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1172.38l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1188.2l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM511.55,1203.98l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1219.76l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1235.58l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM511.55,1251.36l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1267.14l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM511.55,1282.96l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM499.59,1275.05l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM526.09,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM526.9,1275.05l12.82-7.39,12.82,7.39-12.77,7.39-12.87-7.39ZM553.45,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1275.05l12.82-7.39,12.83,7.39-12.78,7.39-12.87-7.39ZM580.81,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1275.53l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1275.53l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1275.53l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1275.05l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1275.53l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM691.06,1275.05l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1275.53l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1275.05l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1275.53l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1275.05l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1275.05l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1275.05l12.82-7.39,12.82,7.39-12.77,7.39-12.87-7.39ZM827.01,1275.53l12.82,7.39-12.82,7.43-12.87-7.39,12.87-7.43ZM827.82,1275.05l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1275.05l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1275.05l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1275.53l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1275.53l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM963.76,1275.53l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM964.62,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM964.62,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM964.62,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1164.51l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1148.69l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1132.91l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1117.13l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1101.31l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1085.53l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1069.7l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM964.62,1053.93l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1038.15l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,1022.32l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM964.62,1006.55l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM964.62,990.77l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,974.94l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM964.62,959.17l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM964.62,943.34l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,927.56l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM964.62,911.79l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM964.62,895.96l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM963.76,895.48l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM962.91,895.96l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM936.4,895.48l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM935.54,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM909.04,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM908.18,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM881.68,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM880.87,895.96l-12.87,7.44-12.82-7.39,12.82-7.39,12.87,7.34ZM854.32,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM853.51,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,895.48l-12.87-7.38,12.82-7.39,12.82,7.39-12.77,7.38ZM826.15,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM798.79,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM771.43,895.96l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,895.48l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM744.07,895.96l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,895.48l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM716.71,895.96l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,895.48l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM689.35,895.96l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,895.48l-12.83-7.38,12.83-7.39,12.82,7.39-12.82,7.38ZM661.99,895.96l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,895.48l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM634.67,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM608.12,895.48l-12.82-7.38,12.82-7.39,12.83,7.39-12.83,7.38ZM607.31,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM579.95,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM552.59,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.09,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM525.23,895.96l-12.82,7.44-12.82-7.39,12.82-7.39,12.82,7.34ZM498.73,895.48l-12.82-7.38,12.82-7.39,12.82,7.39-12.82,7.38ZM497.87,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM497.87,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM497.87,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM497.87,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM497.87,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM497.87,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM497.87,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1101.31l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1132.86l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1148.69l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM497.87,1164.51l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1180.29l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1196.07l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1211.89l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM497.87,1227.67l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1243.45l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1259.27l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM497.87,1275.05l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM497.87,1290.88l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM498.73,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM499.59,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM526.09,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM526.9,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM553.45,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM580.81,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1291.35l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1291.35l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1291.35l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1290.88l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1291.35l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM691.06,1290.88l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1291.35l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1290.88l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1291.35l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1290.88l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1291.35l12.82,7.39-12.82,7.39-12.87-7.39,12.87-7.39ZM827.82,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1290.88l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1291.35l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1291.35l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM963.76,1291.35l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM964.62,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.12,1291.35l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM978.3,1282.92l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1267.14l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1251.36l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1235.54l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,1219.76l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1203.98l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1188.16l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,1172.38l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1156.6l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1140.78l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,1125l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1109.22l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1093.44l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1077.62l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1061.84l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1046.01l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM978.3,1030.24l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,1014.46l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,998.68l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,982.86l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,967.08l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,951.3l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,935.48l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,919.7l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,903.92l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM978.3,888.1l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM978.3,872.32l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM990.27,880.18l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM963.76,879.71l-12.82-7.44,12.82-7.39,12.83,7.39-12.83,7.44ZM962.91,880.18l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM936.4,879.71l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM935.54,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM909.04,879.71l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM908.18,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM881.68,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM880.87,880.18l-12.87,7.39-12.82-7.39,12.82-7.39,12.87,7.39ZM854.32,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM853.51,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,879.71l-12.87-7.44,12.87-7.39,12.82,7.39-12.82,7.44ZM826.15,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM798.79,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM771.43,880.18l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,879.71l-12.83-7.39,12.83-7.44,12.82,7.39-12.82,7.44ZM744.07,880.18l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,879.71l-12.83-7.39,12.83-7.44,12.82,7.39-12.82,7.44ZM716.71,880.18l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,879.71l-12.83-7.39,12.83-7.44,12.82,7.39-12.82,7.44ZM689.35,880.18l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,879.71l-12.83-7.39,12.83-7.44,12.82,7.39-12.82,7.44ZM661.99,880.18l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,879.71l-12.82-7.39,12.82-7.44,12.83,7.39-12.83,7.44ZM634.67,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM608.12,879.71l-12.82-7.39,12.82-7.44,12.83,7.39-12.83,7.44ZM607.31,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM579.95,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM552.59,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.09,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM525.23,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM498.73,879.71l-12.82-7.39,12.82-7.44,12.82,7.39-12.82,7.44ZM497.87,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM471.37,879.71l-12.82-7.44,12.82-7.39,12.82,7.39-12.82,7.44ZM484.19,888.1l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM484.19,903.87l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,919.65l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,935.48l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM484.19,951.25l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,967.08l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,982.86l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM484.19,998.63l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,1014.46l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1030.24l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1046.01l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,1061.84l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1077.62l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1093.39l-12.82,7.44-12.82-7.44,12.82-7.38,12.82,7.38ZM484.19,1109.22l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1125l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1140.78l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM484.19,1156.6l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1172.38l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1188.2l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,1203.98l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1219.76l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1235.58l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,1251.36l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1267.14l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1282.96l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM484.19,1298.74l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM484.19,1314.52l-12.82,7.39-12.82-7.34,12.82-7.39,12.82,7.34ZM472.23,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM498.73,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM499.59,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM526.09,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM526.9,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM553.45,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM580.81,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM608.12,1307.13l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM635.48,1307.13l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM662.85,1307.13l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1306.65l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM690.21,1307.13l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM691.06,1306.65l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM717.57,1307.13l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1306.65l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM744.93,1307.13l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1306.65l12.83-7.38,12.82,7.38-12.82,7.39-12.83-7.39ZM772.29,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM799.65,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM827.01,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM827.82,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM854.32,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM881.68,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1306.65l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM909.04,1307.13l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM936.4,1307.13l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM963.76,1307.13l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM964.62,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.12,1307.13l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM991.98,1306.65l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,1290.88l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1275.05l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1259.27l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,1243.45l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1227.67l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1211.89l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,1196.07l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1180.29l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1164.51l12.82-7.43,12.83,7.39-12.83,7.38-12.82-7.34ZM991.98,1148.69l12.82-7.39,12.83,7.39-12.83,7.43-12.82-7.43ZM991.98,1132.91l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1117.13l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1101.31l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1085.53l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1069.7l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,1053.93l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1038.15l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,1022.32l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,1006.55l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM991.98,990.77l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,974.94l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM991.98,959.17l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM991.98,943.34l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,927.56l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,911.79l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM991.98,895.96l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,880.18l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.98,864.41l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM991.12,863.88l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM990.27,864.41l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM963.76,863.88l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM962.91,864.41l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM936.4,863.88l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM935.54,864.41l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM909.04,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM908.18,864.41l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM881.68,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM880.87,864.41l-12.87,7.38-12.82-7.38,12.82-7.44,12.87,7.44ZM854.32,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM853.51,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM827.01,863.88l-12.87-7.39,12.87-7.39,12.82,7.39-12.82,7.39ZM826.15,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM799.65,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM798.79,864.41l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM772.29,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM771.43,864.41l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM744.93,863.88l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM744.07,864.41l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM717.57,863.88l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM716.71,864.41l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM690.21,863.88l-12.83-7.39,12.83-7.43,12.82,7.38-12.82,7.44ZM689.35,864.41l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM662.85,863.88l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM661.99,864.41l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM635.48,863.88l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM634.67,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM608.12,863.88l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM607.31,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM580.81,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM579.95,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM553.45,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM552.59,864.41l-12.82,7.38-12.87-7.38,12.82-7.39,12.87,7.39ZM526.09,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM525.23,864.41l-12.82,7.38-12.82-7.38,12.82-7.44,12.82,7.44ZM498.73,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM497.87,864.41l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM471.37,863.88l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM470.51,864.41l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM470.51,880.18l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,895.96l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,911.79l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM470.51,927.56l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,943.34l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,959.17l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM470.51,974.94l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,990.77l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1006.55l-12.82,7.38-12.82-7.38,12.82-7.39,12.82,7.39ZM470.51,1022.32l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,1038.15l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1053.93l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1069.7l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,1085.53l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1101.31l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1117.13l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1132.86l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1148.69l-12.82,7.43-12.82-7.38,12.82-7.39,12.82,7.34ZM470.51,1164.51l-12.82,7.39-12.82-7.39,12.82-7.43,12.82,7.43ZM470.51,1180.29l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1196.07l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1211.89l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,1227.67l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1243.45l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1259.27l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,1275.05l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1290.88l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM470.51,1306.65l-12.82,7.39-12.82-7.39,12.82-7.38,12.82,7.38ZM470.51,1322.43l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM471.37,1322.91l12.82,7.39-12.82,7.39-12.82-7.35,12.82-7.43ZM472.23,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM498.73,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM499.59,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM526.09,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM526.9,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM553.45,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM554.26,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM580.81,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM581.62,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM608.98,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM636.34,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1322.91l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM663.7,1322.43l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1322.91l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM691.06,1322.43l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1322.91l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM718.42,1322.43l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1322.91l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM745.78,1322.43l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM773.15,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM800.46,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1322.91l12.82,7.39-12.82,7.43-12.82-7.39,12.82-7.43ZM827.82,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM855.18,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM882.54,1322.43l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1322.91l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM909.9,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM937.26,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM963.76,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM964.62,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.12,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM991.98,1322.43l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1018.48,1322.91l12.83,7.39-12.83,7.39-12.82-7.39,12.82-7.39ZM1005.66,1314.52l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1298.74l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1282.92l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1267.14l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1251.36l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1235.54l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,1219.76l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1203.98l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1188.16l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,1172.38l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1156.6l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1140.78l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,1125l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1109.22l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1093.44l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1077.62l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1061.84l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1046.01l12.82-7.38,12.83,7.38-12.83,7.39-12.82-7.39ZM1005.66,1030.24l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,1014.46l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,998.68l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,982.86l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,967.08l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,951.3l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,935.48l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,919.7l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,903.92l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,888.1l12.82-7.39,12.83,7.39-12.83,7.38-12.82-7.38ZM1005.66,872.32l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1005.66,856.49l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1017.63,848.58l-12.83,7.44-12.82-7.39,12.82-7.39,12.83,7.34ZM991.12,833.28l12.83,7.39-12.83,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM990.27,848.58l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM963.76,833.28l12.83,7.39-12.83,7.39-12.82-7.35,12.82-7.43ZM962.91,848.58l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM936.4,833.28l12.83,7.39-12.83,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM935.54,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM909.04,833.28l12.82,7.39-12.82,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM908.18,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM881.68,833.28l12.82,7.39-12.82,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM880.87,848.58l-12.87,7.44-12.82-7.39,12.82-7.44,12.87,7.39ZM854.32,833.28l12.82,7.39-12.82,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM853.51,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM827.01,833.28l12.82,7.39-12.82,7.43-12.87-7.39,12.87-7.43ZM826.15,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM799.65,833.28l12.82,7.39-12.82,7.39-12.82-7.39s12.82-7.39,12.82-7.39ZM798.79,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM772.29,833.28l12.82,7.39-12.82,7.39-12.82-7.39s12.82-7.39,12.82-7.39ZM771.43,848.58l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM744.93,833.28l12.82,7.39-12.82,7.39-12.83-7.39c.07,0,12.83-7.39,12.83-7.39ZM744.07,848.58l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM717.57,833.28l12.82,7.39-12.82,7.39-12.83-7.39c.07,0,12.83-7.39,12.83-7.39ZM716.71,848.58l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM690.21,833.28l12.82,7.39-12.82,7.43-12.83-7.39,12.83-7.43ZM689.35,848.58l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM662.85,833.28l12.82,7.39-12.82,7.39-12.83-7.39,12.83-7.39ZM661.99,848.58l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM635.48,833.28l12.83,7.39-12.83,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM634.67,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM608.12,833.28l12.83,7.39-12.83,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM607.31,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM580.81,833.28l12.82,7.39-12.82,7.39-12.82-7.39s12.82-7.39,12.82-7.39ZM579.95,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM553.45,833.28l12.82,7.43-12.82,7.39-12.82-7.39s12.82-7.43,12.82-7.43ZM552.59,848.58l-12.82,7.39-12.82-7.39,12.82-7.39,12.82,7.39ZM526.09,833.28l12.82,7.39-12.82,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM525.23,848.58l-12.82,7.44-12.82-7.39,12.82-7.44,12.82,7.39ZM498.73,833.28l12.82,7.39-12.82,7.39-12.82-7.39c.07,0,12.82-7.39,12.82-7.39ZM485.05,841.19l12.82,7.39-12.82,7.39-12.82-7.39,12.82-7.39ZM471.37,833.28l12.82,7.39-12.82,7.39-12.82-7.35,12.82-7.43ZM470.51,848.58l-12.82,7.44-12.82-7.44,12.82-7.39,12.82,7.39ZM431.19,840.71l12.82-7.43,12.82,7.39-12.82,7.43-12.82-7.39ZM431.19,856.49l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,872.27l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,888.1l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM431.19,903.87l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,919.65l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,935.48l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM431.19,951.25l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,967.08l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,982.86l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM431.19,998.63l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,1014.46l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1030.24l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1046.01l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,1061.84l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1077.62l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1093.39l12.82-7.38,12.82,7.38-12.82,7.44-12.82-7.44ZM431.19,1109.22l12.82-7.44,12.82,7.39-12.82,7.39-12.82-7.34ZM431.19,1125l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1140.78l12.82-7.39,12.82,7.39-12.82,7.38-12.82-7.38ZM431.19,1156.6l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1172.38l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1188.2l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,1203.98l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1219.76l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1235.58l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,1251.36l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1267.14l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1282.96l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM431.19,1298.74l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1314.52l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM431.19,1330.34l12.82-7.38,12.82,7.38-12.82,7.39-12.82-7.39ZM444.01,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM444.87,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM471.37,1353.56l-12.82-7.44,12.82-7.39,12.82,7.39-12.82,7.44ZM472.23,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM498.73,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM499.59,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM526.09,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM526.9,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM553.45,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM554.26,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM580.81,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM581.62,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM608.12,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM608.98,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM635.48,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM636.34,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM662.85,1353.56l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM663.7,1338.26l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM690.21,1353.56l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM691.06,1338.26l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM717.57,1353.56l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM718.42,1338.26l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM744.93,1353.56l-12.83-7.39,12.83-7.39,12.82,7.39-12.82,7.39ZM745.78,1338.26l12.83-7.39,12.82,7.39-12.82,7.39-12.83-7.39ZM772.29,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM773.15,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM799.65,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM800.51,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM827.01,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM827.82,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM854.32,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM855.18,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM881.68,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM882.54,1338.26l12.82-7.39,12.82,7.39-12.82,7.39-12.82-7.39ZM909.04,1353.56l-12.82-7.39,12.82-7.39,12.82,7.39-12.82,7.39ZM909.9,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM936.4,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM937.26,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM963.76,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM964.62,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM991.12,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM991.98,1338.26l12.82-7.39,12.83,7.39-12.83,7.39-12.82-7.39ZM1018.48,1353.56l-12.82-7.39,12.82-7.39,12.83,7.39-12.83,7.39ZM1044.99,1338.26l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1322.43l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1306.65l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM1044.99,1290.88l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1275.05l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1259.27l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM1044.94,1243.45l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM1044.94,1227.67l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM1044.94,1211.89l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM1044.99,1196.07l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1180.29l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1164.51l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1148.69l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1132.91l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1117.13l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,1101.31l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.94,1085.53l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM1044.94,1069.7l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM1044.94,1053.93l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM1044.94,1038.15l-12.82,7.39-12.83-7.39,12.83-7.39,12.82,7.39ZM1044.94,1022.32l-12.82,7.39-12.83-7.39,12.83-7.38,12.82,7.38ZM1044.94,1006.55l-12.82,7.38-12.83-7.38,12.83-7.39,12.82,7.39ZM1044.99,990.77l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,974.94l-12.83,7.39-12.82-7.39,12.82-7.38,12.83,7.38ZM1044.99,959.17l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM1044.99,943.34l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,927.56l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,911.79l-12.83,7.38-12.82-7.38,12.82-7.39,12.83,7.39ZM1044.99,895.96l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,880.18l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39ZM1044.99,864.41l-12.83,7.38-12.87-7.38,12.83-7.39,12.87,7.39ZM1044.99,848.58l-12.83,7.39-12.82-7.39,12.82-7.39,12.83,7.39Z"
                                fill="url(#Degradado_sin_nombre_7)"
                                strokeWidth={0}
                            />
                            <g id="BaseCompleta">
                                <g id="Circuitos">
                                    <g id="CirGoogle">
                                        <path
                                            d="M628.96,1045.68c35.51,20.5,71.02,40.99,106.49,61.49"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M638.73,1041.77c7.86,4.53,15.78,9.1,23.64,13.68,9.39.14,18.78.33,28.22.48,14.35,8.29,28.74,16.59,43.09,24.88"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-2)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M617.71,1048.25c17.97,10.68,35.89,21.4,53.86,32.08v14.82c16.73,9.68,33.51,19.35,50.24,29.03"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-3)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M624.72,1048.21c35.51,20.5,71.02,40.99,106.49,61.49"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M634.49,1044.35c7.86,4.53,15.78,9.1,23.64,13.68,9.39.14,18.78.33,28.22.48,14.35,8.29,28.74,16.59,43.09,24.88"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23-2)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M613.47,1050.78c17.97,10.68,35.89,21.4,53.86,32.08v14.82c16.73,9.68,33.51,19.35,50.24,29.03"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23-3)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                    </g>
                                    <g id="CirOpenChat">
                                        <path
                                            d="M964.82,1042.49c-8.34,4.81-16.68,9.63-25.02,14.44.29,5.1.57,10.2.86,15.3-13.97,7.72-27.93,15.49-41.9,23.21-8.34.48-16.64.91-24.98,1.38-6.1,3.48-12.25,6.96-18.4,10.49"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-4)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M954.76,1039.48c-11.3,6.53-22.55,13.01-33.84,19.54v15.78c-11.49,6.63-22.98,13.25-34.42,19.88"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-5)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M896.75,1109.84c17.21-9.63,34.42-19.21,51.62-28.84-.29-5.43-.57-10.87-.86-16.3,8.82-5.1,17.68-10.2,26.5-15.3"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-6)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M960.57,1039.96c-8.34,4.81-16.68,9.63-25.02,14.44.29,5.1.57,10.2.86,15.3-13.97,7.72-27.93,15.49-41.9,23.21-8.34.48-16.64.91-24.98,1.38-6.1,3.48-12.25,6.96-18.4,10.49"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23-4)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M950.52,1036.91c-11.3,6.53-22.55,13.01-33.84,19.54v15.78c-11.49,6.63-22.98,13.25-34.42,19.88"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23-5)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M892.51,1107.31c17.21-9.63,34.42-19.21,51.62-28.84-.29-5.43-.57-10.87-.86-16.3,8.82-5.1,17.68-10.2,26.5-15.3"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_23-6)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                    </g>
                                </g>
                                <g id="BaseTriangulo">
                                    <g id="LineasBase">
                                        <path
                                            id="tpath6"
                                            d="M925.35 1174.24 L691.31 1210.89 L754.8 1075.76 L925.35 1174.24 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={0.42}
                                        />
                                        <path
                                            id="tpath5"
                                            d="M925.35 1166.61 L691.31 1203.27 L754.8 1068.13 L925.35 1166.61 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={0.63}
                                        />
                                        <path
                                            id="tpath4"
                                            d="M925.35 1160.65 L691.31 1197.31 L754.8 1062.22 L925.35 1160.65 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={0.85}
                                        />
                                        <path
                                            id="tpath3"
                                            d="M925.35 1155.6 L691.31 1192.26 L754.8 1057.12 L925.35 1155.6 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.27}
                                        />
                                        <path
                                            id="tpath2"
                                            d="M925.35 1151.36 L691.31 1188.01 L754.8 1052.88 L925.35 1151.36 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            id="tpath1"
                                            d="M925.35 1147.11 L691.31 1183.77 L754.8 1048.64 L925.35 1147.11 Z"
                                            fill="none"
                                            stroke="#34aadc"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.54}
                                        />
                                    </g>
                                    <g id="Base">
                                        <path
                                            d="M691.31,1149.88v30.51c78.03-12.2,156.01-24.45,234.04-36.66v-30.51c-77.98,12.2-156.01,24.45-234.04,36.66h0Z"
                                            fill="url(#Degradado_sin_nombre_14)"
                                            stroke="url(#Degradado_sin_nombre_15)"
                                            strokeMiterlimit={10}
                                            strokeWidth={1.13}
                                        />
                                        <path
                                            d="M925.35 1113.22 L691.31 1149.88 L754.8 1014.75 L925.35 1113.22 Z"
                                            fill="url(#Degradado_sin_nombre_16)"
                                            stroke="url(#Degradado_sin_nombre_3)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.13}
                                        />
                                    </g>
                                </g>

                                <g id="CirCalendly">
                                    <path
                                        d="M845.32,1242.83c-11.34-27.41-22.74-54.86-34.08-82.27v-30.41c-2.05-3.24-4.15-6.48-6.2-9.72"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_28-7)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.69}
                                    />
                                    <path
                                        d="M849.65,1237.11c-5.86-14.25-11.73-28.46-17.59-42.71,3.38-5.24,6.77-10.53,10.11-15.83-3.43-7.1-6.86-14.16-10.3-21.26v-30.41c-2.91-3.15-5.77-6.24-8.68-9.39"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_28-8)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.69}
                                    />
                                    <path
                                        d="M836.07,1240.87c-3.67-8.91-7.29-17.78-10.96-26.69-7.1-1.48-14.2-3-21.31-4.48-3-8.48-5.96-16.97-8.96-25.45,4.34-2.86,8.68-5.67,13.06-8.48-1.62-4.34-3.29-8.63-4.91-12.97v-31.6c-2.96-3.57-5.86-7.15-8.82-10.68"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_28-9)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.69}
                                    />
                                    <path
                                        d="M841.07,1244.55c-11.34-27.41-22.74-54.86-34.08-82.27v-30.41c-2.05-3.24-4.15-6.48-6.2-9.72"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_23-7)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3.39}
                                    />
                                    <path
                                        d="M845.41,1238.83l-17.59-42.71c3.38-5.24,6.77-10.53,10.11-15.83-3.43-7.1-6.86-14.16-10.3-21.26v-30.41c-2.91-3.15-5.77-6.24-8.68-9.39"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_23-8)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3.39}
                                    />
                                    <path
                                        d="M831.87,1242.54c-3.67-8.91-7.29-17.78-10.96-26.69-7.1-1.48-14.2-3-21.31-4.48-3-8.48-5.96-16.97-8.96-25.45,4.34-2.86,8.68-5.67,13.06-8.48-1.62-4.34-3.29-8.63-4.91-12.97v-31.6c-2.96-3.57-5.86-7.15-8.82-10.68"
                                        fill="none"
                                        stroke="url(#Degradado_sin_nombre_23-9)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3.39}
                                    />
                                </g>
                                <g id="CircuitosBase">
                                    <g id="CirBGoogle">
                                        <path
                                            d="M719.29,1090.96c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-10)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M723.72,1079.81c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-11)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M729.44,1067.75c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-12)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M720.91,1086.96c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="#000c7e"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M725.29,1075.81c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="#000c7e"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M731.06,1063.75c6.77,3.34,13.58,6.72,20.35,10.06"
                                            fill="none"
                                            stroke="#000c7e"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                    </g>
                                    <g id="CirBOpenChat">
                                        <path
                                            d="M864,1077.14c-5.24,3.43-10.44,6.91-15.68,10.34"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-13)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M854.8,1071.52c-5.24,3.43-10.44,6.91-15.68,10.34"
                                            fill="none"
                                            stroke="url(#Degradado_sin_nombre_28-14)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.69}
                                        />
                                        <path
                                            d="M866.29,1079.09c-5.24,3.43-10.44,6.91-15.68,10.34"
                                            fill="none"
                                            stroke="#000c7e"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                        <path
                                            d="M859,1073.95c-5.24,3.43-10.44,6.91-15.68,10.34"
                                            fill="none"
                                            stroke="#000c7e"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3.39}
                                        />
                                    </g>
                                </g>
                            </g>
                            <g id="Canister-3" data-name="Canister">
                                <g id="CanisterBot">
                                    <path
                                        d="M852.28,1088.58h0v-23.12h-16.59c-.19-.1-.38-.24-.57-.33-22.78-13.16-59.63-13.25-82.22-.19-.29.19-.57.33-.86.52h-15.92v21.16c-.91,9.25,4.77,18.69,17.06,25.79,22.78,13.16,59.63,13.25,82.22.19,11.44-6.63,17.06-15.35,16.87-24.02h0Z"
                                        fill="url(#Degradado_sin_nombre_29)"
                                        stroke="url(#Degradado_sin_nombre_15-2)"
                                        strokeMiterlimit={10}
                                        strokeWidth={0.71}
                                    />
                                    <path
                                        d="M735.97,1065.08c.1-18.54,26.26-33.41,58.34-33.22,32.13.19,58.06,15.4,57.96,33.94-.1,18.54-26.26,33.41-58.34,33.22-32.13-.24-58.06-15.4-57.96-33.94Z"
                                        fill="url(#Degradado_sin_nombre_31)"
                                        stroke="url(#Degradado_sin_nombre_32)"
                                        strokeMiterlimit={10}
                                        strokeWidth={0.78}
                                    />
                                </g>
                                <ellipse
                                    id="SombraKonecta"
                                    cx={795.41}
                                    cy={1067.94}
                                    rx={62.25}
                                    ry={26.45}
                                    fill="url(#Degradado_sin_nombre_33)"
                                    mix-blend-mode="multiply"
                                    strokeWidth={0}
                                />
                                <g id="KonectaIcon">
                                    <g>
                                        <g>
                                            <path
                                                d="M795.27,1055.93h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1039.63c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1021.94h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1056.26h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44,0,15.68.05h0ZM833.97,1039.91c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1022.23h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1056.55h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1040.25c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1022.56h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1056.83h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1040.53c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1022.85h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14-1,.05-2.05,0-3,0-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1057.12h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1040.82c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1023.13h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1057.45h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1041.1c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.1,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1023.47h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.71-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1057.74h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1041.44c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1023.75h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1058.03h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1041.72c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1024.04h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1058.36h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1042.01c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.1,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1024.37h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1058.65h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1042.34c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1024.66h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1058.93h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1042.63c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1024.95h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14-1,.05-2.05,0-3,0-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1059.27h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44,0,15.68.05h0ZM833.97,1042.92c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1025.28h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1059.55h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1043.2c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.1,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1025.57h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1059.84h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1043.54c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1025.85h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14-1,.05-2.05,0-3,0-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1060.12h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1043.82c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.58,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1026.14h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1060.46h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1044.11c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.1,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1026.47h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1060.74h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1044.44c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1026.76h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1061.03h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1044.73c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1027.04h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14-1,.05-2.05,0-3,0-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1061.36h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1045.01c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.1,15.59,3.58,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1027.38h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1061.65h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.1,10.44.05,15.68.05h0ZM833.97,1045.35c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1027.66h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1061.94h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1045.63c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.53,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1027.95h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14-1,.05-2.05,0-3,0-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.76-.48,1.43-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M795.27,1062.22h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0ZM833.97,1045.92c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.57,19.88,11.77h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M776.49,1028.28h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <path
                                            d="M833.97,1045.92c3,1.1,3.05,1.19,3.1,4.15v3.1c.05,1.53.1,3-1.38,4.15-.57.43-.76,1.43-.95,2.19-1.95,7.2-9.39,14.11-18.83,14.06-14.11-.1-28.27.05-42.42-.05-8.77-.05-16.02-5.43-18.69-13.82-.38-1.19-.71-2.24-1.67-3.19-.57-.57-.71-1.67-.81-2.53-.14-1.19-.1-2.48-.05-3.67.1-3.1.24-3.29,3.24-4.39,2.62-5.34,6.67-9.25,12.58-10.82,2.24-.57,4.62-.91,6.96-.91,13.01-.05,26.03,0,39.04-.05,8.96-.14,15.59,3.57,19.88,11.77h0ZM795.27,1062.22h6.43c3,0,5.96.05,8.91-.05,3.48-.1,6.34-2.34,7.34-5.53,1.1-3.38.05-6.86-2.76-9.06-1.72-1.33-3.67-1.76-5.77-1.76-3.15-.05-6.34,0-9.53,0h-19.07c-2.86,0-5.53.76-7.34,3.1-2.1,2.62-2.38,5.67-1,8.68,1.33,2.96,3.86,4.53,7.1,4.58,5.24.14,10.44.05,15.68.05h0Z"
                                            fill="#fff"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M776.49,1028.28h-6.01c-.48-3.67,1.1-6.43,3.43-8.87,2.05-2.1,4.67-3.38,7.67-3.43,8.72-.05,17.45-.1,26.12,0,6.01.05,11.63,5.96,11.2,12.25-.95.05-1.91.1-2.91.14s-2.05,0-3,0c-.24-.29-.48-.43-.52-.57-1.48-4.29-2.86-5.29-7.44-5.29h-6.86c-.1,1.24-.1,2.14-.19,3-.1.81-.14,1.62-.19,2.62h-6.29c-.1-1.81-.19-3.62-.33-5.62-3.1,0-6.05-.14-9.01.05-2.29.14-4,1.48-4.91,3.62-.24.72-.48,1.38-.76,2.1h0Z"
                                            fill="#fff"
                                            strokeWidth={0}
                                        />
                                    </g>
                                </g>
                                <g id="CanisterCuerpo" style={{ mixBlendMode: "color" }} mix-blend-mode="color">
                                    <path
                                        d="M846.99,1064.32v-105.87h-105.72v105.91h0c.1,7.77,5.29,15.54,15.63,21.5,20.73,11.96,54.2,12.01,74.74.14,10.34-5.96,15.49-13.82,15.35-21.69h0Z"
                                        fill="url(#Degradado_sin_nombre_34)"
                                        strokeWidth={0}
                                    />
                                </g>
                                <path
                                    id="CanisterBrillo"
                                    d="M846.99,1064.32v-105.87h-105.72v105.91h0c.1,7.77,5.29,15.54,15.63,21.5,20.73,11.96,54.2,12.01,74.74.14,10.34-5.96,15.49-13.82,15.35-21.69h0Z"
                                    fill="#bcbcc2"
                                    style={{ isolation: 'isolate' }}
                                    opacity={0.3}
                                    stroke="#f2f2f2"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.71}
                                />
                            </g>
                            <g id="TapaSuperior">
                                <path
                                    d="M852.28,980.52h0v-23.12h-116.21v21.16c-.91,9.25,4.77,18.69,17.06,25.79,22.78,13.16,59.63,13.25,82.22.19,11.49-6.63,17.11-15.35,16.92-24.02h0Z"
                                    fill="url(#Degradado_sin_nombre_29-2)"
                                    stroke="url(#Degradado_sin_nombre_15-3)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.71}
                                />
                                <path
                                    d="M735.97,957.02c.1-18.54,26.26-33.41,58.34-33.22,32.08.19,58.06,15.4,57.96,33.94-.1,18.54-26.26,33.41-58.34,33.22-32.13-.19-58.06-15.4-57.96-33.94Z"
                                    fill="url(#Degradado_sin_nombre_31-2)"
                                    stroke="url(#Degradado_sin_nombre_32-2)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.78}
                                />
                            </g>
                            <g id="Engranaje1" style={{
                                opacity: 1,
                                animation: "switchEngranajes 1s steps(1) infinite",
                                animationDelay: "0s",
                            }}>
                                <path
                                    d="M846.08,935.43l-9.25,1.43c-1.62-1.86-3.57-3.57-5.86-5.15h-.05s-.14-.1-.19-.14l.24-.24-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-17.64-5.86-4.81,4.77c-5.53-1-11.39-1.48-17.4-1.29l-2.43-5.34-19.69,3.1.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05v.05c-4.39,1.48-8.25,3.29-11.54,5.43l-8.25-2.76-10.25,10.2.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29,5.86,1.95c-.05.43-.05.86-.05,1.24v1.14l-9.2,1.43.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05,5.2,11.34,9.25-1.43c1.62,1.86,3.57,3.57,5.82,5.15h.05s.14.1.19.14l-.24.24.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.14-.33.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.38.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29,17.64,5.86,4.81-4.77c5.53,1,11.39,1.48,17.4,1.29l2.43,5.34,19.69-3.1-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05v-.05c4.39-1.48,8.25-3.34,11.54-5.43l8.25,2.76,10.25-10.2-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-5.86-1.95c.05-.43.05-.86.05-1.24v-1.1l9.15-1.43-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-5.24-10.87h0ZM777.3,951.68v6.86c0,.52.05,1.05.19,1.57.05.14.1.29.14.43-3.15-1.57-5.58-3.67-6.91-6.1,1.33-2.34,3.72-4.48,6.91-6.1-.24.67-.33,1.38-.33,2.05v1.24c0-.19,0-.05,0,.05h0ZM767.05,947.06c-.33,1.1-.52,2.19-.43,3.34v8.53c0,.91.14,1.81.43,2.76-.43-.33-.86-.67-1.19-1-1.81-1.62-3.24-3.43-4.15-5.43-.1-.19-.19-.43-.24-.62.95-3.05,2.91-5.43,5.58-7.58h0ZM795.93,955.02c-3.05.48-6.15.05-8.39-1,1-.48,2.19-.86,3.57-1.05,3.05-.48,6.1-.05,8.39,1-1.05.48-2.24.86-3.57,1.05h0ZM809.71,956.35v-6.86c0-.52-.05-1.05-.19-1.57-.05-.14-.1-.29-.14-.43,3.15,1.57,5.58,3.67,6.91,6.1-1.33,2.34-3.72,4.48-6.91,6.1.24-.67.33-1.38.33-2.1v-1.29c0,.29,0,.14,0,.05h0ZM819.96,960.98c.33-1.1.52-2.19.43-3.34v-8.58c0-.91-.14-1.81-.43-2.76.43.33.86.67,1.19,1,1.81,1.62,3.24,3.43,4.15,5.43.1.19.19.43.24.62-.95,3.05-2.86,5.48-5.58,7.63h0Z"
                                    fill="url(#Degradado_sin_nombre_29-3)"
                                    stroke="url(#Degradado_sin_nombre_15-4)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.19}
                                />
                                <path
                                    d="M851.32,946.82l-5.24-11.39-9.25,1.43c-2.72-3.1-6.34-5.77-10.63-8.01l4.81-4.77-17.64-5.86-4.81,4.77c-5.53-1-11.39-1.48-17.4-1.29l-2.43-5.34-19.69,3.1,2.43,5.34c-5.34,1.57-10.06,3.72-13.97,6.2l-8.2-2.72-10.25,10.2,8.25,2.76c-1.81,3.19-2.62,6.58-2.34,10.06l-9.25,1.43,5.2,11.34,9.25-1.43c2.72,3.1,6.34,5.77,10.63,8.01l-4.81,4.77,17.64,5.86,4.81-4.77c5.53,1,11.39,1.48,17.4,1.29l2.43,5.34,19.69-3.1-2.43-5.34c5.34-1.57,10.06-3.72,13.97-6.2l8.25,2.76,10.25-10.2-8.25-2.76c1.81-3.19,2.67-6.58,2.38-10.06l9.2-1.43h0ZM791.07,944.48c5.05-.81,10.25.91,11.58,3.86,1.33,2.91-1.67,5.91-6.72,6.72-5.05.81-10.25-.95-11.58-3.86s1.67-5.91,6.72-6.72h0ZM778.35,953.16c1.14,1.72,3.1,3.15,5.58,4.19.91.38,1.91.71,2.96.95l2.34,5.05c-8.82-.91-16.4-4.67-18.83-10.01s.86-10.77,7.72-14.11l2.34,5.05c-.67.52-1.24,1.1-1.72,1.72-1.24,1.62-1.72,3.43-1.24,5.24.1.33.19.67.33.95s.33.67.52.95h0ZM808.66,946.39c-1.14-1.72-3.1-3.15-5.58-4.19-.91-.38-1.91-.71-2.96-1l-2.34-5.05c8.82.91,16.4,4.67,18.83,10.01,2.43,5.34-.91,10.77-7.77,14.16l-2.34-5.05c.67-.52,1.24-1.1,1.72-1.72,1.24-1.62,1.72-3.43,1.24-5.24-.1-.33-.19-.67-.33-.95s-.29-.67-.48-.95h0ZM786.54,968.37c-6.82-.81-12.97-2.86-17.64-5.86-1.14-.71-2.19-1.53-3.1-2.34-1.81-1.62-3.24-3.43-4.15-5.43-.91-2-1.24-4-1.05-5.91.1-1,.33-1.95.71-2.96,1.48-3.91,5.05-7.53,10.25-10.2,1.29-.67,2.62-1.29,4.1-1.81l1.62,3.57c-8.44,3.72-12.68,10.15-9.82,16.4,2.86,6.24,12.01,10.58,22.55,11.34l1.62,3.57c-1.72-.05-3.43-.19-5.1-.38h0ZM826.39,950.68c-.1,1-.33,2-.71,2.96-1.48,3.91-5.05,7.53-10.25,10.2-1.29.67-2.62,1.29-4.1,1.81l-1.62-3.57c8.44-3.72,12.68-10.15,9.82-16.4-2.86-6.24-12.01-10.58-22.55-11.34l-1.62-3.57c1.72.05,3.43.19,5.1.38,6.82.81,12.97,2.86,17.64,5.86,1.14.71,2.19,1.53,3.1,2.34,1.81,1.62,3.24,3.43,4.15,5.43.91,2,1.24,4,1.05,5.91h0Z"
                                    fill="url(#Degradado_sin_nombre_41)"
                                    stroke="url(#Degradado_sin_nombre_3-2)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.47}
                                />
                            </g>
                            <g id="Engranaje2" style={{
                                opacity: 0,
                                animation: "switchEngranajes 1s steps(1) infinite",
                                animationDelay: "0.25s",
                            }}>
                                <path
                                    d="M851.56,946.99l.19-.05-5.27-11.51-9.29,1.45c-1.68-1.89-3.69-3.72-6.08-5.37l.24-.24-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-17.72-5.95-4.84,4.83c-5.75-1.06-11.64-1.5-17.48-1.31l-2.44-5.41-19.78,3.14.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05v.05c-4.26,1.45-8.19,3.29-11.59,5.51l-8.24-3.53-10.3,10.35.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29,5.94,1.98c0,.44-.05.87-.05,1.26v1.11l-9.24,1.45.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05.19.39-.19.05,5.22,11.51,9.29-1.45c1.68,1.89,3.69,3.72,6.08,5.37l-.24.24.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.53.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.48.29.1-.29.29,17.72,5.95,4.84-4.83c5.75,1.06,11.64,1.5,17.48,1.31l2.44,5.41,19.78-3.14-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05v-.05c4.26-1.45,8.19-3.29,11.59-5.51l8.29,2.76,10.3-10.35-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-5.94-1.98c0-.44.05-.87.05-1.26v-1.11l9.2-1.45-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.19-.39.19-.05-.14-.05h0ZM777.36,954.48l-3.5,3.53c-1.34-1.11-2.4-2.37-3.11-3.67.53-.92,1.2-1.84,2.11-2.76,1.34-1.35,2.97-2.47,4.84-3.43-.05.15-.1.29-.14.44-.05.19-.1.34-.1.53,0,.15-.05.29-.05.44v4.5c-.1.34-.1.39-.05.44h0ZM767.06,947.23c-.34,1.02-.48,2.03-.43,3.05v8.22c0,1.02.14,2.08.48,3.09-.43-.34-.86-.68-1.2-1.02-2.11-1.89-3.59-3.96-4.45-6.14.72-1.84,1.92-3.67,3.64-5.37.57-.68,1.29-1.26,1.96-1.84h0ZM809.93,954.05l3.5-3.53c1.34,1.11,2.4,2.37,3.11,3.67-.53.92-1.2,1.84-2.11,2.76-1.34,1.35-2.97,2.47-4.84,3.43.05-.15.1-.24.1-.39.05-.24.1-.44.14-.68,0-.1.05-.24.05-.34v-4.69l.05-.24h0ZM820.23,961.3c.34-1.02.48-2.03.43-3.05v-8.22c0-1.02-.14-2.08-.48-3.09.43.34.86.68,1.2,1.02,2.11,1.89,3.59,3.96,4.45,6.14-.72,1.84-1.92,3.67-3.64,5.37-.57.68-1.29,1.26-1.96,1.84h0Z"
                                    fill="url(#Degradado_sin_nombre_6)"
                                    stroke="url(#Degradado_sin_nombre_15-5)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.19}
                                />
                                <path
                                    d="M842.46,948.44l9.29-1.45-5.27-11.56-9.29,1.45c-2.63-3-6.23-5.8-10.68-8.12l4.84-4.83-17.72-5.95-4.84,4.83c-5.75-1.06-11.64-1.5-17.48-1.31l-2.44-5.41-19.78,3.14,2.44,5.41c-5.22,1.55-9.96,3.67-14.04,6.29l-8.24-2.76-10.3,10.35,8.29,2.76c-1.87,3.34-2.63,6.82-2.35,10.2l-9.29,1.45,5.22,11.51,9.29-1.45c2.63,3,6.23,5.8,10.68,8.12l-4.84,4.83,17.72,5.95,4.84-4.83c5.75,1.06,11.64,1.5,17.48,1.31l2.44,5.41,19.78-3.14-2.44-5.41c5.22-1.55,9.96-3.67,14.04-6.29l8.29,2.76,10.3-10.35-8.29-2.76c1.87-3.34,2.63-6.77,2.35-10.15h0ZM814.43,956.95c-4.84,4.88-13.89,7.45-22.9,7.01l4.6-4.59c1.48-.15,2.92-.39,4.26-.77.05,0,.1,0,.1-.05.24-.05.48-.15.72-.19.19-.05.34-.1.53-.15.24-.05.43-.15.62-.24s.43-.15.62-.24c.24-.1.48-.19.72-.29s.53-.24.77-.39c.14-.1.29-.15.43-.24.19-.1.38-.24.57-.34.14-.1.29-.19.38-.24.24-.19.53-.34.77-.53.38-.29.72-.58,1.05-.92.05-.05.05-.1.1-.1.19-.19.38-.44.57-.63.05-.1.1-.15.19-.24.14-.19.29-.44.43-.63.1-.1.14-.24.19-.34.1-.15.14-.29.24-.44.05-.15.1-.24.14-.39s.1-.29.14-.48c.05-.24.1-.44.14-.68,0-.1.05-.24.05-.34v-.77c0-.48-.1-1.02-.29-1.5-.05-.15-.1-.29-.14-.44-.05-.15-.14-.29-.24-.48-.05-.15-.14-.24-.19-.39-.05-.1-.14-.24-.19-.34l4.6-4.59c5.17,4.25,5.84,10.06,1.01,14.94h0ZM768.98,962.89c-1.15-.73-2.2-1.55-3.11-2.37-3.78-3.38-5.6-7.45-5.22-11.51.1-1.02.34-1.98.67-3,.72-1.93,1.96-3.82,3.74-5.66,1.77-1.84,4.02-3.38,6.56-4.74,1.29-.68,2.68-1.31,4.12-1.84,5.89-2.22,12.84-3.34,19.78-3.14,1.72.05,3.4.19,5.13.39l-3.26,3.24c-10.54-.82-21.41,2.08-27.11,7.78-5.7,5.71-4.55,12.62,1.92,17.5l-3.21,3.34h0ZM772.86,943.02c4.84-4.88,13.89-7.45,22.9-7.01l-4.6,4.59c-1.82.19-3.54.53-5.17,1.02-.14.05-.29.1-.43.15-.24.1-.48.15-.72.24-.14.05-.34.15-.48.19-.34.15-.62.29-.96.44-.19.1-.43.19-.62.29-.14.1-.34.19-.48.29-.19.1-.38.19-.57.34-.14.1-.29.19-.43.29-.24.19-.53.34-.77.53-.38.29-.72.58-1.05.92-.05.05-.05.1-.1.1-.19.19-.38.44-.57.63-.05.05-.1.15-.19.24-.14.19-.34.44-.43.68-.05.1-.14.24-.19.34-.1.15-.14.29-.24.48-.05.1-.1.24-.14.34-.05.19-.14.39-.19.58-.05.19-.1.34-.1.53,0,.15-.05.29-.05.44v.77c0,.15,0,.29.05.48v.05c.14.87.48,1.74,1.01,2.51l-4.6,4.59c-4.98-4.35-5.7-10.2-.86-15.04h0ZM826.7,950.9c-.1,1.02-.34,1.98-.67,3-.72,1.93-1.96,3.82-3.74,5.66-1.82,1.79-4.02,3.38-6.56,4.69-1.29.68-2.68,1.31-4.12,1.84-5.89,2.22-12.84,3.34-19.78,3.14-1.72-.05-3.4-.19-5.13-.39l3.26-3.24c10.54.82,21.41-2.08,27.11-7.78,5.7-5.71,4.55-12.62-1.92-17.5l3.26-3.24c1.15.77,2.2,1.55,3.11,2.37,3.74,3.34,5.56,7.4,5.17,11.46h0Z"
                                    fill="url(#Degradado_sin_nombre_41)"
                                    stroke="url(#Degradado_sin_nombre_3-3)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.45}
                                />
                            </g>
                            <g id="Engranaje3" style={{
                                opacity: 0,
                                animation: "switchEngranajes 1s steps(1) infinite",
                                animationDelay: "0.5s",
                            }}>
                                <path
                                    d="M851.13,947.13l.19-.05-5.25-11.43-9.26,1.44c-1.67-1.92-3.72-3.7-6.06-5.33l.24-.24-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-17.66-5.91-4.82,4.8c-5.54-1.01-11.41-1.49-17.42-1.3l-2.43-5.38-19.71,3.12.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38h0l-.14.05v.05c-4.34,1.49-8.26,3.31-11.55,5.48l-8.26-3.51-10.26,10.28.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29,5.87,1.97c0,.43-.05.82-.05,1.25v1.15l-9.16,1.44.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05.19.38-.19.05,5.2,11.43,9.26-1.44c1.67,1.92,3.72,3.7,6.06,5.33l-.24.24.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.48.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.29.29.1-.29.48.29.1-.29.29,17.66,5.91,4.82-4.8c5.54,1.01,11.41,1.49,17.42,1.3l2.43,5.33,19.71-3.12-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38h.14c4.34-1.49,8.26-3.31,11.55-5.48l8.26,2.79,10.26-10.28-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-.29-.1.29-.29-5.87-1.97c0-.43.05-.82.05-1.25v-1.1l9.16-1.44-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.19-.38.19-.05-.14-.14h0ZM766.71,948.18l-.91.14c.38-.34.72-.62,1.15-.96-.1.24-.14.53-.24.82h0ZM820.16,960.57l.91-.14c-.38.34-.72.62-1.15.96.1-.29.14-.53.24-.82h0Z"
                                    fill="url(#Degradado_sin_nombre_4)"
                                    stroke="url(#Degradado_sin_nombre_15-6)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.19}
                                />
                                <path
                                    d="M842.27,948.16l9.21-1.44-5.2-11.48-9.26,1.44c-2.72-3.12-6.35-5.81-10.64-8.07l4.82-4.8-17.66-5.91-4.82,4.8c-5.54-1.01-11.41-1.49-17.42-1.3l-2.43-5.38-19.71,3.12,2.43,5.38c-5.35,1.58-10.07,3.75-13.98,6.24l-8.21-2.74-10.26,10.28,8.26,2.79c-1.81,3.22-2.62,6.63-2.34,10.13l-9.26,1.44,5.2,11.43,9.26-1.44c2.72,3.12,6.35,5.81,10.64,8.07l-4.82,4.8,17.66,5.91,4.82-4.8c5.54,1.01,11.41,1.49,17.42,1.3l2.43,5.33,19.71-3.12-2.43-5.33c5.35-1.58,10.07-3.75,13.98-6.24l8.26,2.79,10.26-10.28-8.26-2.79c1.77-3.22,2.62-6.68,2.34-10.13h0ZM760.75,948.74c.1-1.01.33-1.97.72-2.98,1.48-3.94,5.06-7.59,10.26-10.28,1.29-.67,2.62-1.3,4.1-1.83,2.86-1.06,6.01-1.92,9.45-2.45s6.92-.77,10.26-.67c1.72.05,3.44.19,5.11.38,6.78.82,12.98,2.88,17.66,5.91,1.15.72,2.2,1.54,3.1,2.35l-6.2.96c-6.4-4.9-17.47-7.3-28.4-5.57-10.88,1.73-18.47,7.06-19.85,13.16l-6.2,1.01h0ZM803.23,942.01c-1.48-.62-3.1-1.06-4.82-1.39-.14-.05-.29-.05-.48-.1-.24-.05-.52-.1-.81-.1-.19-.05-.38-.05-.57-.05-.38-.05-.76-.05-1.15-.1-.29,0-.52-.05-.81-.05h-2.1c-.38,0-.81.05-1.19.1-.62.05-1.24.14-1.81.24-.62.1-1.19.19-1.77.34-.38.1-.76.19-1.1.29-.19.05-.38.1-.52.14-.24.1-.48.14-.72.24-.19.05-.33.14-.52.19-.29.1-.52.19-.81.34-.24.1-.48.19-.72.34-.19.1-.38.19-.57.29-.19.1-.38.19-.52.29-.14.1-.29.14-.38.24-.19.1-.38.24-.52.34-.05,0-.05.05-.1.05-.95.67-1.77,1.39-2.34,2.21l-8.78,1.39c1.62-5.14,8.21-9.56,17.47-11.05,9.26-1.44,18.71.43,24.48,4.42l-8.83,1.39h0ZM784.04,957.33c1.19.48,2.48.91,3.87,1.2.05,0,.1,0,.14.05.24.05.52.1.76.14.19.05.38.05.57.1.24.05.48.05.72.1s.48.05.72.1c.29.05.57.05.86.05.33,0,.62.05.95.05h2.05c.38,0,.81-.05,1.19-.1.62-.05,1.24-.14,1.86-.24s1.19-.24,1.77-.34c.38-.1.72-.19,1.1-.29.19-.05.38-.1.57-.19.24-.05.48-.14.72-.24.19-.05.38-.14.57-.19.24-.1.43-.19.67-.29.33-.14.62-.29.91-.43.14-.05.29-.14.43-.24.19-.1.38-.24.57-.34.1-.05.24-.14.33-.19,1.24-.77,2.29-1.68,3.01-2.64l8.78-1.39c-1.62,5.14-8.21,9.56-17.47,11.05-9.26,1.44-18.71-.43-24.48-4.42l8.83-1.3h0ZM825.85,953.59c-1.48,3.94-5.06,7.59-10.26,10.28-1.29.67-2.62,1.3-4.1,1.83-2.86,1.06-6.01,1.92-9.45,2.45s-6.92.77-10.26.67c-1.72-.05-3.44-.19-5.11-.38-6.78-.82-12.98-2.88-17.66-5.91-1.15-.72-2.2-1.54-3.1-2.35l6.2-.96c6.4,4.9,17.47,7.3,28.4,5.57,10.88-1.73,18.47-7.06,19.85-13.21l6.2-.96c-.1,1.01-.33,2.02-.72,2.98h0Z"
                                    fill="url(#Degradado_sin_nombre_41)"
                                    stroke="url(#Degradado_sin_nombre_3-4)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.45}
                                />
                            </g>
                            <g id="Engranaje4" style={{
                                opacity: 0,
                                animation: "switchEngranajes 1s steps(1) infinite",
                                animationDelay: "0.75s",
                            }}>
                                <path
                                    d="M851.14,947.09l.17-.03-5.21-11.48-9.24,1.46c-1.66-1.9-3.69-3.69-6.08-5.35l.23-.23-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-17.63-5.91-4.81,4.83c-5.7-1.07-11.6-1.48-17.41-1.3l-2.44-5.38-19.73,3.12.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.02.03c-4.24,1.45-8.15,3.28-11.54,5.48l-8.26-2.77-10.27,10.32.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.3.31.3.1-.3.31,5.9,1.98c-.03.42-.04.84-.03,1.26,0,.14,0,.27,0,.41,0,.14,0,.27,0,.41,0,.1,0,.2,0,.3l-9.19,1.45.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03.17.38-.17.03,5.21,11.48,9.24-1.46c1.65,1.9,3.69,3.7,6.07,5.35l-.23.23.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.31.31.3.1-.3.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.31.31.3.1-.3.31,17.63,5.91,4.81-4.83c5.71,1.07,11.6,1.48,17.41,1.3l2.44,5.38,19.73-3.12-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03v-.03c4.23-1.45,8.14-3.28,11.53-5.48l8.26,2.77,10.27-10.32-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-.3-.1.31-.31-.3-.1.3-.31-.3-.1.31-.31-5.9-1.98c.03-.42.04-.84.03-1.26,0-.14,0-.27,0-.41,0-.14,0-.27,0-.41,0-.1,0-.2,0-.3l9.19-1.45-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38.17-.03-.17-.38ZM777.51,960.47s.03.07.04.1c-.58-.3-1.14-.61-1.67-.93l1.53.51c.03.11.07.21.1.32ZM766.52,956.5s0,.05,0,.08c0,.14,0,.27,0,.41,0,.14,0,.27,0,.41,0,.14,0,.27,0,.41,0,.14,0,.27,0,.41,0,.14,0,.27,0,.41-.01,1,.14,2,.45,2.97-.42-.33-.83-.66-1.22-1.01-1.98-1.78-3.42-3.74-4.28-5.78l5.04,1.69ZM809.35,948.13c.58.3,1.15.61,1.67.94l-1.53-.51c-.04-.14-.1-.28-.15-.43ZM820.38,952.2s0-.05,0-.08c0-.14,0-.27,0-.41,0-.14,0-.27,0-.41,0-.14,0-.27,0-.41,0-.14,0-.27,0-.41,0-.14,0-.27,0-.41.01-1-.14-2-.45-2.97.42.33.83.66,1.22,1.01,1.98,1.78,3.42,3.74,4.28,5.78l-5.04-1.69Z"
                                    fill="url(#Degradado_sin_nombre_83)"
                                    stroke="url(#Degradado_sin_nombre_62)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.19}
                                />
                                <path
                                    d="M842.07,948.52l9.24-1.46-5.21-11.48-9.24,1.46c-2.63-3.01-6.2-5.77-10.64-8.1l4.81-4.83-17.63-5.91-4.81,4.83c-5.7-1.07-11.6-1.48-17.41-1.3l-2.44-5.38-19.73,3.12,2.44,5.38c-5.18,1.55-9.94,3.65-13.98,6.26l-8.26-2.77-10.27,10.32,8.26,2.77c-1.88,3.33-2.64,6.77-2.36,10.16l-9.24,1.46,5.21,11.48,9.24-1.46c2.62,3.01,6.2,5.77,10.64,8.1l-4.81,4.83,17.63,5.91,4.81-4.83c5.71,1.07,11.6,1.48,17.41,1.3l2.44,5.38,19.73-3.12-2.44-5.38c5.19-1.55,9.95-3.65,13.98-6.26l8.26,2.77,10.27-10.32-8.26-2.77c1.88-3.33,2.64-6.77,2.35-10.16ZM769.57,948.94l7.84,2.63c.03.11.07.21.1.32.05.15.1.3.17.45.06.13.12.27.18.4.07.15.15.29.24.44.17.29.36.58.58.86.02.02.03.05.05.07.11.14.24.28.36.42.09.1.18.2.28.3.12.12.25.25.38.37.13.12.28.24.42.36.17.14.35.28.53.42.2.15.41.29.62.43.14.09.28.17.42.26.19.12.39.23.59.34.15.08.29.16.45.24.3.15.61.3.93.43.5.21,1.01.42,1.56.6.55.18,1.11.34,1.67.48.37.09.74.18,1.11.25.2.04.4.07.6.11.25.04.51.09.76.12.21.03.43.06.64.09.26.03.53.06.8.08.38.03.77.06,1.16.08.2,0,.39.02.59.02.27,0,.55,0,.82,0,.16,0,.32,0,.48,0,1.82-.04,3.61-.25,5.31-.63l7.84,2.63c-7.41,3.01-17.39,3.46-25.68.68-8.29-2.78-12.6-8.02-11.82-13.25ZM811.32,966.13c-5.85,2.22-12.78,3.32-19.73,3.12-1.7-.05-3.4-.17-5.09-.38-3.3-.4-6.55-1.11-9.63-2.14-3.08-1.03-5.76-2.31-8-3.77-1.15-.75-2.19-1.54-3.11-2.37-3.77-3.39-5.6-7.42-5.21-11.48.09-.99.32-1.99.69-2.97l5.54,1.86c-1.46,6.13,3.39,12.42,13.13,15.68,9.74,3.26,21.55,2.56,29.97-1.24l5.54,1.86c-1.29.68-2.65,1.29-4.09,1.83ZM817.34,951.18l-7.84-2.63c-.28-1.04-.86-2.05-1.71-2.98-.08-.08-.15-.16-.23-.25-.14-.14-.27-.28-.42-.41-.11-.1-.22-.19-.33-.28-.22-.19-.45-.37-.69-.54-.17-.12-.34-.24-.52-.36-.15-.1-.3-.19-.45-.28-.18-.11-.37-.22-.57-.32-.15-.08-.3-.16-.46-.24-.3-.15-.61-.29-.93-.43-.5-.21-1.01-.42-1.56-.6-.55-.18-1.1-.34-1.67-.48-.37-.09-.74-.18-1.12-.25-.19-.04-.38-.07-.57-.11-.27-.05-.53-.09-.8-.13-.2-.03-.4-.06-.6-.08-.32-.04-.64-.07-.96-.1-.29-.02-.59-.04-.88-.06-.25-.01-.5-.03-.75-.03-.25,0-.49,0-.74,0-.2,0-.39,0-.58,0-.27,0-.54.01-.81.03-.04,0-.08,0-.12,0-1.48.08-2.94.28-4.33.6l-7.84-2.63c7.41-3.01,17.39-3.46,25.68-.68,8.29,2.78,12.6,8.02,11.82,13.25ZM826.36,951.01c-.09.99-.32,1.99-.69,2.97l-5.54-1.86c1.46-6.13-3.39-12.42-13.13-15.68-9.74-3.26-21.55-2.56-29.97,1.24l-5.54-1.86c1.29-.68,2.65-1.29,4.09-1.83,5.85-2.22,12.78-3.32,19.73-3.12,1.7.05,3.4.17,5.09.38,3.3.4,6.55,1.11,9.63,2.14,3.08,1.03,5.76,2.31,8.01,3.77,1.15.75,2.19,1.54,3.11,2.37,3.77,3.39,5.6,7.42,5.21,11.48Z"
                                    fill="url(#Degradado_sin_nombre_41)"
                                    stroke="url(#Degradado_sin_nombre_61)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.45}
                                />
                            </g>
                            <g id="TapitaEngranaje">
                                <path
                                    d="M809.19,938.81c-2.29-5-11.15-7.91-19.83-6.58-7.25,1.14-12.06,4.96-12.06,9.06v8.58c-.1.91.1,1.86.52,2.81,2.29,5,11.15,7.91,19.83,6.58,7.25-1.14,12.06-4.96,12.06-9.06v-8.58c.1-.91-.1-1.86-.52-2.81h0Z"
                                    fill="url(#Degradado_sin_nombre_29-4)"
                                    stroke="url(#Degradado_sin_nombre_15-7)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.19}
                                />
                                <path
                                    d="M793.46,931.95c8.96-.05,16.25,4.1,16.3,9.25.05,5.15-7.2,9.39-16.16,9.49s-16.25-4.1-16.3-9.25c-.05-5.2,7.2-9.44,16.16-9.49Z"
                                    fill="url(#Degradado_sin_nombre_49-2)"
                                    stroke="url(#Degradado_sin_nombre_3-5)"
                                    strokeMiterlimit={10}
                                    strokeWidth={0.45}
                                />
                            </g>
                            <g id="GoogleCalendar">
                                <path
                                    id="GrosorGoogle"
                                    d="M669.09,953.02c-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.14-.33-.24-.14-.1-.29-.19-.43-.29-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.14-.33-.24-.14-.1-.29-.19-.43-.29-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.1-.1-.24-.14-.33-.24-.14-.1-.29-.19-.43-.29-.1-.1-.24-.19-.38-.24-.95-.76-2.43-.76-4.05.19l-10.63,6.15-46.28,26.5h0c-2.96,1.67-5.29,5.77-5.29,9.15v52.77h0v12.2c0,1.72.62,2.91,1.62,3.43.14.1.29.19.43.29.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.14.33.24.14.1.29.19.43.29.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.14.33.24.14.1.29.19.43.29s.24.19.38.24c.1.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.14.33.24.14.1.29.19.43.29.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.14.33.24.14.1.29.19.43.29.1.1.24.19.38.24.14.1.24.19.38.24.1.1.24.14.33.24.14.1.29.19.43.29.1.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.95.76,2.43.71,4.05-.19l10.63-6.15h0l35.42-20.45,15.92-27.46v-40.61h0v-12.2c.24-1.76-.43-2.96-1.43-3.48h0Z"
                                    fill="#1967d2"
                                    strokeWidth={0}
                                />
                                <g id="FrenteGoogle">
                                    <path
                                        d="M655.22,978.09l-15.92,7.15-19.5,13.3-1.76,21.31,1.76,19.26,17.68-7.67,17.68-12.77,1.76-21.83-1.72-18.73h0Z"
                                        fill="#fff"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M627.05,1025.85c-1.33-.24-2.24-1.24-2.76-2.91l3.1-3.24c.29,1.05.76,1.72,1.48,2s1.53.1,2.53-.48,1.86-1.43,2.57-2.53,1.1-2.24,1.1-3.29-.38-1.81-1.14-2.05-1.72-.05-2.86.62l-1.76,1v-3.48l1.57-.91c1-.57,1.81-1.33,2.48-2.34.67-1,1-2,1-3.1,0-.95-.29-1.53-.91-1.72s-1.38-.05-2.29.48-1.62,1.19-2.14,2.05-.91,1.76-1.14,2.72l-3.05.29c.38-1.53,1.14-3.15,2.24-4.77,1.1-1.62,2.48-2.91,4.15-3.91,1.24-.71,2.38-1.1,3.34-1.1,1,0,1.76.29,2.34.95.57.67.86,1.57.86,2.81s-.24,2.43-.76,3.62-1.14,2.19-1.91,3.1v.19c1-.1,1.81.19,2.48.76.67.62.95,1.62.95,3s-.29,2.81-.91,4.24c-.62,1.43-1.48,2.76-2.53,4-1.1,1.24-2.29,2.24-3.62,3.05-1.62.86-3.05,1.19-4.39.91h0Z"
                                        fill="#1a73e8"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M645.93,997.49l-3.34,4.72-1.67-1.95,6.05-8.48,2.34-1.33v23.59l-3.34,1.91-.05-18.45h0Z"
                                        fill="#1a73e8"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M655.22,1036.96l15.92-27.46-7.96.52-7.96,8.68-3.53,11.2,3.53,7.05h0Z"
                                        fill="#ea4335"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M616.28,1050.35l3.53,7.1,35.42-20.45v-18.26l-35.42,20.45-3.53,11.15h0Z"
                                        fill="#34a853"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M609.18,986.43c-2.96,1.67-5.29,5.77-5.29,9.15v52.77l7.96-.52,7.96-8.68v-40.61l35.42-20.45,3.53-11.2-3.53-7.1-46.05,26.65h0Z"
                                        fill="#4285f4"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M603.84,1048.35v12.15c0,3.38,2.38,4.72,5.29,3l10.63-6.15v-18.26l-15.92,9.25h0Z"
                                        fill="#188038"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M655.22,978.09v40.61l15.92-9.2v-40.61l-7.96.52-7.96,8.68h0Z"
                                        fill="#fbbc04"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M671.14,968.89v-12.15c0-3.38-2.38-4.72-5.29-3l-10.63,6.15v18.26l15.92-9.25h0Z"
                                        fill="#1967d2"
                                        strokeWidth={0}
                                    />
                                </g>
                                <g id="SombraGoogle" opacity={0.5}>
                                    <path
                                        d="M670.91,955.02s0-.05-.05-.1c0,.05.05.05.05.1Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M671.05,955.54s0-.1-.05-.1c0,0,.05.05.05.1Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M603.84,1060.55v-12.15h0v-52.81c0-3.38,2.38-7.44,5.29-9.15l46.05-26.6,10.63-6.15c1.43-.81,2.72-.91,3.67-.43-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.14-.1-.24-.19-.38-.24-.95-.76-2.43-.76-4.05.19l-10.96,5.96-46.05,26.6c-2.96,1.67-5.29,5.77-5.29,9.15v52.77h0v12.15c0,1.72.62,2.91,1.67,3.43.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24.14.1.24.19.38.24h0c-.48-.38-.95-1.48-.95-2.96h0Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M671.14,956.12v-.14s-.05.1,0,.14Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M607.51,1064.22s-.1,0-.19.05c.05-.05.14-.05.19-.05Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M608.03,1064.08s-.14.05-.19.05c.05-.05.14-.05.19-.05Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M608.61,1063.84s-.1.05-.19.05c.05,0,.1,0,.19-.05Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M605.55,1064.03s-.05,0-.05-.05c0,0,.05,0,.05.05Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M605.98,1064.18s-.05,0-.1-.05c.05.05.1.05.1.05Z"
                                        fill="#094184"
                                        strokeWidth={0}
                                    />
                                </g>
                            </g>
                            <g id="Openchat">
                                <g id="GrosorOpenChat">
                                    <path
                                        d="M985.65,1047.87c.14-.1.33-.19.48-.29.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.24-.14.43-.29.62-.43.14-.1.33-.19.48-.29.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38,6.15-3.72,9.91-11.44,9.91-22.36,0-22.31-15.78-49.48-35.23-60.73-10.25-5.91-19.45-6.24-25.88-1.95-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.24.14-.43.29-.62.43-.14.1-.33.19-.48.29-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.24.14-.43.29-.62.43-.14.1-.33.19-.48.29-.19.1-.38.24-.57.38-6.15,3.72-9.91,11.44-9.91,22.36,0,22.31,15.78,49.48,35.23,60.73,10.25,5.91,19.45,6.2,25.88,1.95.19-.1.38-.24.57-.38.24-.14.43-.29.62-.43h0ZM958.57,983.86c10.82,6.24,19.59,21.35,19.59,33.75,0,2.34-.33,4.39-.86,6.15-2.14-.33-4.43-1.14-6.86-2.53-10.82-6.24-19.59-21.35-19.59-33.75,0-2.34.33-4.39.86-6.15,2.14.33,4.43,1.14,6.86,2.53Z"
                                        fill="url(#Degradado_sin_nombre_58)"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M986.03,1047.78c.19-.1.38-.24.57-.38.19-.14.43-.24.62-.38.19-.1.33-.24.52-.33s.38-.24.57-.38c.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.14.43-.24.62-.38.19-.1.33-.24.52-.33s.38-.24.57-.38c.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38,1.19-.76,2.29-1.62,3.34-2.67,11.25-11.73,7.34-38.99-8.68-60.97h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-.48.48s-.05-.1-.1-.14h0l-9.1,9.49c1.86,2.57,3.48,5.34,4.81,8.25,4.62,10.2,4.62,19.83.57,24.83-.1,0-.19.05-.29.1l.1.19h0c-.19.05-.43.1-.62.14l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l.1.19c-.19.05-.43.1-.67.19l9.1,19.97c2.19-.48,4.15-1.33,5.96-2.53.19-.1.38-.24.57-.38.14.48.33.38.52.29h0Z"
                                        fill="url(#Degradado_sin_nombre_59)"
                                        strokeWidth={0}
                                    />
                                </g>
                                <path
                                    id="SombraOpenChat"
                                    d="M981.55,1050.07c1.38-.48,2.72-1.14,3.91-1.95.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38.19-.1.38-.24.57-.38,1.19-.76,2.29-1.62,3.34-2.67,10.96-11.44,7.48-37.8-7.63-59.49-5.96-8.68-13.35-16.06-21.45-20.73-10.39-6.01-19.69-6.24-26.12-1.81-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-.19.1-.38.24-.57.38-6.01,3.77-9.68,11.44-9.68,22.16,0,22.31,15.78,49.48,35.23,60.73,8.1,4.67,15.59,5.82,21.55,4,.29-.1.52-.14.76-.24h.1ZM970.49,994.25l-.05.05c1.86,2.57,3.48,5.34,4.81,8.25.14.29.24.52.38.81,1.95,4.62,3.1,9.44,3.1,13.92,0,2.53-.38,4.72-1.05,6.58-2.24-.24-4.72-1.1-7.29-2.57-10.82-6.24-19.59-21.35-19.59-33.75,0-2.53.38-4.72,1.05-6.58,2.24.24,4.72,1.1,7.29,2.57,4.19,2.43,8.1,6.24,11.34,10.72Z"
                                    fill="url(#Degradado_sin_nombre_57)"
                                    style={{ mixBlendMode: 'multiply' }}
                                    strokeWidth={0}
                                />
                                <g id="FrenteOpenChat">
                                    <path
                                        d="M923.35,985.95c0,22.31,15.78,49.48,35.23,60.73,19.45,11.25,35.23,2.24,35.23-20.02s-15.78-49.48-35.23-60.73c-19.45-11.25-35.23-2.24-35.23,20.02h0ZM938.98,995.01c0-12.39,8.77-17.4,19.59-11.15,10.82,6.24,19.59,21.35,19.59,33.75s-8.77,17.4-19.59,11.15c-10.82-6.24-19.59-21.35-19.59-33.75h0Z"
                                        fill="url(#Degradado_sin_nombre_58-2)"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M978.97,985.14c16.02,21.97,19.92,49.29,8.68,60.97-2.38,2.48-5.34,4.1-8.68,4.86l-9.1-19.97c8.87-1.91,11.01-14.54,4.81-28.12-1.29-2.86-2.96-5.67-4.81-8.25l9.1-9.49h0Z"
                                        fill="url(#Degradado_sin_nombre_59-2)"
                                        strokeWidth={0}
                                    />
                                </g>
                            </g>
                            <g id="KonectaLogo">
                                <path
                                    id="ParteGris"
                                    d="M921.44,1253.17c.1-.76-.29-1.57-.71-2.34l-1.24-2.72c-1.29-2.57-1.43-2.67-6.48-2.91h0c-8.72-5.48-18.83-7.44-30.41-6.34-.05-.05-.05-.14-.1-.19.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-.05-.19-.14-.33-.19-.52.05,0,.14-.05.19-.05-1.86-5.72-12.87-9.53-22.12-8.15-13.39,2-26.79,4.15-40.09,6.29-4.62.76-8.1,2.53-10.39,4.86-1.76,1.81-2.91,3.67-2.81,5.67v9.25c-8.25,2.81-12.82,7.2-14.63,12.49-3.05,1.24-4,1.72-3.81,2.96-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.05.14-.05.33,0,.52-.1.52.14,1.24.57,2.29.43,1.1.86,2.19,1.53,3.24.52.76,1.19,1.67,2.24,2.05,1.81.62,2.81,1.48,3.86,2.43,7.48,6.77,20.73,9.82,34.27,7.72,21.69-3.34,43.38-6.86,65.11-10.15,14.54-2.19,23.12-10.11,23.17-16.97,0-.71-.1-1.67.62-2.14,1-.71,1.24-1.48,1.14-2.19.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.05-.19.05-.38,0-.52.14.43.14.29.1.1ZM883.83,1265.18c-4.53.81-9.1,1.48-13.68,2.19l-9.91,1.57h0c-8.06,1.24-16.02,2.57-24.07,3.77-4.29.62-8.25.14-11.3-1.48,1.86-.91,4.15-1.48,6.63-1.86l29.22-4.58c4.91-.76,9.77-1.57,14.63-2.29,3.19-.52,6.43-.57,9.58.19,1.24.29,2.38.71,3.38,1.14-1.24.57-2.76,1.05-4.48,1.33Z"
                                    fill="#adadb2"
                                    strokeWidth={0}
                                />
                                <g id="ParteBlanca">
                                    <path
                                        d="M913.05,1245.16c5,.24,5.15.33,6.48,2.91l1.24,2.72c.67,1.33,1.38,2.67-.48,4-.67.52-.57,1.43-.62,2.14-.1,6.82-8.68,14.73-23.17,16.97-21.74,3.29-43.38,6.82-65.11,10.15-13.49,2.1-26.74-.95-34.27-7.72-1.05-.95-2.05-1.81-3.86-2.43-1.1-.38-1.76-1.29-2.24-2.05-.71-1.05-1.1-2.14-1.53-3.24-1.14-2.76-.95-2.96,3.24-4.67,1.81-5.34,6.48-9.77,14.87-12.58,3.24-1.05,6.72-1.91,10.34-2.48,19.92-3.19,39.94-6.24,59.92-9.44,13.58-2.14,25.26-.52,35.18,5.72h0ZM860.24,1268.9l9.91-1.57c4.58-.71,9.15-1.38,13.68-2.19,5.29-.91,8.82-3.57,9.06-6.63.33-3.29-2.72-6.1-7.91-7.34-3.15-.76-6.34-.67-9.58-.19-4.86.71-9.77,1.53-14.63,2.29l-29.22,4.58c-4.43.71-8.15,2-10.01,4.53-2.19,2.86-1.33,5.58,1.95,7.91,3.24,2.29,7.72,3.05,12.73,2.34,8.06-1.14,16.02-2.48,24.02-3.72h0Z"
                                        fill="#fff"
                                        strokeWidth={0}
                                    />
                                    <path
                                        d="M817.67,1243.35l-9.2,1.43c-2.19-3.15-.91-5.96,1.67-8.68,2.29-2.38,5.77-4.15,10.39-4.86,13.35-2.14,26.69-4.29,40.09-6.29,9.25-1.38,20.26,2.43,22.12,8.15-1.43.24-2.91.57-4.43.81-1.53.29-3.15.48-4.58.71-.48-.19-.86-.24-1.05-.38-4-3.43-6.48-4-13.54-2.91l-10.53,1.67c.38,1.14.71,1.91.95,2.72.24.71.43,1.43.76,2.38l-9.68,1.53c-.91-1.57-1.76-3.15-2.76-4.91-4.72.76-9.39,1.33-13.78,2.19-3.48.67-5.53,2.24-6.1,4.39-.1.71-.19,1.38-.33,2.05h0Z"
                                        fill="#fff"
                                        strokeWidth={0}
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="TimeCapsule" ref={timeCapsuleRef} style={{ opacity: 0, transition: "opacity 1.5s", }}                    >
                        <g id="TimeCapsule-2" data-name="TimeCapsule">
                            <g id="Capsule">
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="none"
                                                        stroke="#34aadc"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={5.18}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M626.16,2377.95h-11.47c-3.16-3.52-5.9-8.73-8.16-15.56-.44-1.32-.88-2.72-1.27-4.14-3.75-13.26-5.8-30.76-5.8-49.25s2.05-35.99,5.8-49.25c.41-1.45.83-2.82,1.27-4.14,2.28-6.84,5-12.01,8.16-15.56h11.47c-4.48,0-8.29,3.78-11.39,10.02-6.4,12.92-9.76,36.4-9.76,58.93s3.37,46.01,9.76,58.93c3.11,6.24,6.89,10.02,11.39,10.02Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                            <path
                                                d="M626.16,2377.95h-11.47c-3.16-3.52-5.9-8.73-8.16-15.56-.44-1.32-.88-2.72-1.27-4.14-3.75-13.26-5.8-30.76-5.8-49.25s2.05-35.99,5.8-49.25c.41-1.45.83-2.82,1.27-4.14,2.28-6.84,5-12.01,8.16-15.56h11.47c-4.48,0-8.29,3.78-11.39,10.02-6.4,12.92-9.76,36.4-9.76,58.93s3.37,46.01,9.76,58.93c3.11,6.24,6.89,10.02,11.39,10.02Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74-2.23,6.55-4.89,11.55-7.97,14.97h-11.44c4.3,0,8-3.5,11.03-9.35,6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63c-3.03-5.85-6.73-9.35-11.03-9.35h11.44c3.08,3.42,5.75,8.41,7.97,14.97.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                            <path
                                                d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74-2.23,6.55-4.89,11.55-7.97,14.97h-11.44c4.3,0,8-3.5,11.03-9.35,6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63c-3.03-5.85-6.73-9.35-11.03-9.35h11.44c3.08,3.42,5.75,8.41,7.97,14.97.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#34aadc"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={5.18}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <polygon
                                                points="657.49 2298.41 657.49 2319.56 652.51 2321.73 648.89 2323.29 645.73 2324.66 642.52 2326.06 642.52 2291.93 645.73 2293.33 648.89 2294.68 652.54 2296.26 657.49 2298.41"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                            <polygon
                                                points="657.49 2298.41 657.49 2319.56 652.51 2321.73 648.89 2323.29 645.73 2324.66 642.52 2326.06 642.52 2291.93 645.73 2293.33 648.89 2294.68 652.54 2296.26 657.49 2298.41"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points="978.58 2291.93 978.58 2326.06 978.47 2326.01 975.11 2324.56 971.97 2323.18 968.35 2321.6 963.61 2319.56 963.61 2298.41 968.32 2296.36 971.97 2294.78 975.11 2293.43 978.47 2291.96 978.58 2291.93"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                            <polygon
                                                points="978.58 2291.93 978.58 2326.06 978.47 2326.01 975.11 2324.56 971.97 2323.18 968.35 2321.6 963.61 2319.56 963.61 2298.41 968.32 2296.36 971.97 2294.78 975.11 2293.43 978.47 2291.96 978.58 2291.93"
                                                fill="none"
                                                stroke="#34aadc"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={5.18}
                                            />
                                        </g>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                fill="#db7a2d"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                fill="#db7a2d"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="url(#Degradado_sin_nombre_72)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M582.53,2308.97c0,7.79.28,15.07.75,21.26-3.39-.83-5.93-3.94-5.93-7.61v-28.35c0-3.7,2.56-6.81,6.01-7.61-.54,6.42-.85,14.09-.85,22.32h.03Z"
                                                    fill="url(#Degradado_sin_nombre_72)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="url(#Degradado_sin_nombre_72-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1044.03,2294.42v28.35c0,3.78-2.67,6.94-6.21,7.66.49-6.24.78-13.59.78-21.49s-.31-15.82-.85-22.22c3.6.7,6.29,3.86,6.29,7.66v.03Z"
                                                    fill="url(#Degradado_sin_nombre_72-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <g>
                                                <path
                                                    d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                    fill="#bcbcc2"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                    fill="#bcbcc2"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                    fill="#bcbcc2"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                    fill="#bcbcc2"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_71)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_71)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_71)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_71-2)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-3)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_71-4)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-5)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_71-6)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-7)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_71-8)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-9)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_71-10)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-11)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_71-12)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_71-13)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_70)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_70)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M605.24,2358.24c.41,1.45.83,2.82,1.27,4.14l-19.03-12.76s-.05,0-.05-.03c-1.73-.83-3.26-8.39-4.14-19.37-.49-6.19-.75-13.46-.75-21.26,0-8.23.31-15.92.85-22.32.88-10.59,2.41-17.74,4.12-18.33q1.14-.4,0,0l18.98-12.71c-.44,1.32-.88,2.72-1.27,4.14-3.75,13.26-5.8,30.76-5.8,49.25s2.05,35.99,5.8,49.25h.03Z"
                                                    fill="url(#Degradado_sin_nombre_70)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_70-2)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-3)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_70-4)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-5)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_70-6)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-7)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_70-8)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-9)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M995.04,2375.49l-.08.05v-.05h.08Z"
                                                        fill="url(#Degradado_sin_nombre_70-10)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M995.04,2242.48h-.08v-.05l.08.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-11)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1038.57,2308.97c0,7.9-.28,15.25-.78,21.49-.85,10.87-2.38,18.33-4.12,19.16,0,0-.05,0-.05.03l-19.91,13.33c.52-1.5,1.01-3.08,1.48-4.74,3.73-13.26,5.8-30.76,5.8-49.25s-2.07-35.99-5.8-49.25c-.47-1.66-.96-3.24-1.48-4.74l19.86,13.31h0c1.73.6,3.24,7.79,4.14,18.44.54,6.4.85,14.03.85,22.22Z"
                                                        fill="url(#Degradado_sin_nombre_70-12)"
                                                        strokeWidth={0}
                                                    />
                                                    <path
                                                        d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74l-8.39,5.62c6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63l8.39,5.62c.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                                        fill="url(#Degradado_sin_nombre_70-13)"
                                                        strokeWidth={0}
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="#bcbcc2"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="url(#Degradado_sin_nombre_39)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="url(#Degradado_sin_nombre_39)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="url(#Degradado_sin_nombre_39-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="url(#Degradado_sin_nombre_39-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="url(#Degradado_sin_nombre_39-4)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="url(#Degradado_sin_nombre_44)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M644.36,2375.54h-17.55v-.05c-.23.03-.44.05-.67.05-2.43,0-4.74-1.63-6.89-4.61-6.97-9.71-11.91-33.79-11.91-61.96s4.92-52.25,11.91-61.96c2.12-2.98,4.45-4.61,6.89-4.61.23,0,.44,0,.67.05v-.05h17.4c-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96v.03Z"
                                                    fill="url(#Degradado_sin_nombre_44)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="url(#Degradado_sin_nombre_44-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1013.06,2309c0,29.1-5.28,53.86-12.64,62.89-1.71,2.1-3.5,3.37-5.39,3.6-.05.03-.08.03-.1.03-.21.03-.44.05-.67.05h-17.76v-.08c.34-4.01.65-8.67.91-13.88.52-10.15.88-22.27,1.06-35.6.05-5.36.1-10.82.13-16.34,0-5.96-.05-11.88-.13-17.68-.13-14.06-.52-26.82-1.06-37.41-.23-4.45-.49-8.52-.78-12.14h17.63c.23,0,.47.03.67.05.03,0,.05,0,.1.03,1.89.26,3.68,1.5,5.39,3.6,7.35,9.06,12.64,33.79,12.64,62.89Z"
                                                    fill="url(#Degradado_sin_nombre_44-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <path
                                                d="M978.6,2309.67c-.03,5.52-.08,10.98-.13,16.34-.18,13.33-.54,25.45-1.06,35.6-.26,5.2-.57,9.86-.91,13.88v.08h-73.35v-.08h-37.47s-.08.08-.13.08h-220.89c-1.17,0-2.12-21.7-2.38-50.9v-31.33c.26-29.15,1.22-50.83,2.38-50.83h3.5v-.08h328.47c.28,3.62.54,7.69.78,12.14.54,10.59.93,23.35,1.06,37.41.08,5.8.13,11.73.13,17.68Z"
                                                fill="url(#Degradado_sin_nombre_44-4)"
                                                strokeWidth={0}
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="url(#Degradado_sin_nombre_48)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M626.83,2375.54h5.23c-1.81,1.55-3.78,2.41-5.88,2.41-4.48,0-8.29-3.78-11.39-10.02-6.4-12.92-9.76-36.4-9.76-58.93s3.37-46.01,9.76-58.93c3.11-6.24,6.89-10.02,11.39-10.02,2.12,0,4.09.85,5.88,2.41h-5.23v.05c-.23-.03-.44-.05-.67-.05-2.43,0-4.74,1.63-6.89,4.61-6.97,9.71-11.91,33.79-11.91,61.96s4.92,52.25,11.91,61.96c2.12,2.98,4.45,4.61,6.89,4.61.23,0,.44,0,.67-.05v.05-.05Z"
                                                    fill="url(#Degradado_sin_nombre_48)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="url(#Degradado_sin_nombre_48-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M1015.42,2309c0,22.94-3.5,46.87-10.12,59.63-3.03,5.85-6.73,9.35-11.03,9.35-2.12,0-4.09-.85-5.9-2.41h6.58l.08-.05c1.89-.26,3.7-1.5,5.39-3.62,7.35-9.04,12.61-33.79,12.61-62.89s-5.28-53.83-12.61-62.89c-1.71-2.1-3.52-3.37-5.39-3.62l-.08-.05h-6.58c1.81-1.55,3.78-2.41,5.9-2.41,4.3,0,8,3.5,11.03,9.35,6.63,12.76,10.12,36.69,10.12,59.63Z"
                                                    fill="url(#Degradado_sin_nombre_48-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path
                                            d="M626.16,2377.95h-11.47c-3.16-3.52-5.9-8.73-8.16-15.56-.44-1.32-.88-2.72-1.27-4.14-3.75-13.26-5.8-30.76-5.8-49.25s2.05-35.99,5.8-49.25c.41-1.45.83-2.82,1.27-4.14,2.28-6.84,5-12.01,8.16-15.56h11.47c-4.48,0-8.29,3.78-11.39,10.02-6.4,12.92-9.76,36.4-9.76,58.93s3.37,46.01,9.76,58.93c3.11,6.24,6.89,10.02,11.39,10.02Z"
                                            fill="url(#Degradado_sin_nombre_50)"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M1020.99,2309c0,18.51-2.07,35.99-5.8,49.25-.47,1.66-.96,3.24-1.48,4.74-2.23,6.55-4.89,11.55-7.97,14.97h-11.44c4.3,0,8-3.5,11.03-9.35,6.63-12.76,10.12-36.69,10.12-59.63s-3.5-46.87-10.12-59.63c-3.03-5.85-6.73-9.35-11.03-9.35h11.44c3.08,3.42,5.75,8.41,7.97,14.97.52,1.5,1.01,3.08,1.48,4.74,3.73,13.26,5.8,30.76,5.8,49.25v.05Z"
                                            fill="url(#Degradado_sin_nombre_50-2)"
                                            strokeWidth={0}
                                        />
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                fill="#201f34"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="url(#Degradado_sin_nombre_56)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M978.47,2291.96l-3.37,1.45c-.21-29.23-1.04-50.93-1.99-50.93h-2.93v-.05c.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25c.28,3.6.54,7.66.75,12.12.54,10.59.93,23.38,1.09,37.41h.03Z"
                                                    fill="url(#Degradado_sin_nombre_56)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="url(#Degradado_sin_nombre_56-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M647.72,2375.54h2.77c-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42c-.34-4.04-.65-8.73-.91-13.96-.75-14.53-1.19-33.19-1.19-53.52s.44-38.99,1.19-53.52c.23-4.45.49-8.52.75-12.12.88-11.42,1.99-18.25,3.21-18.25s2.33,6.84,3.21,18.25v.05h-2.93c-.96,0-1.76,21.67-1.99,50.83l-3.21-1.4v34.13l3.21-1.4c.21,29.21,1.04,50.9,1.99,50.9Z"
                                                    fill="url(#Degradado_sin_nombre_56-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="url(#Degradado_sin_nombre_56-4)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M978.47,2326.01c-.18,13.31-.54,25.45-1.06,35.58-.26,5.23-.57,9.92-.91,13.96-.85,10.31-1.92,16.42-3.06,16.42s-2.2-6.11-3.06-16.42h2.77c.96,0,1.76-21.75,1.99-51.01l3.34,1.45-.03.03Z"
                                                    fill="url(#Degradado_sin_nombre_56-5)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                fill="#363548"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                fill="#363548"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="url(#Degradado_sin_nombre_60)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M986.52,2308.06c0,27.65-.83,52.2-2.1,67.48-.85,10.31-1.92,16.42-3.06,16.42h-7.95c1.14,0,2.2-6.11,3.06-16.42.34-4.04.65-8.73.91-13.96.52-10.12.88-22.27,1.06-35.58.08-5.77.13-11.78.13-17.94,0-5.52-.03-10.9-.1-16.1-.16-14.03-.54-26.82-1.09-37.41-.23-4.45-.47-8.52-.75-12.12-.88-11.42-1.99-18.25-3.21-18.25h7.95c1.22,0,2.33,6.84,3.21,18.25,1.19,15.38,1.94,39.07,1.94,65.64h0Z"
                                                    fill="url(#Degradado_sin_nombre_60)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="url(#Degradado_sin_nombre_60-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M647.44,2391.98h-7.95c-1.14,0-2.2-6.11-3.06-16.42-1.27-15.28-2.1-39.82-2.1-67.48s.75-50.28,1.94-65.64c.88-11.42,1.99-18.25,3.21-18.25h7.95c-1.22,0-2.33,6.84-3.21,18.25-.28,3.6-.54,7.66-.75,12.12-.75,14.53-1.19,33.17-1.19,53.52s.44,38.99,1.19,53.52c.26,5.23.57,9.92.91,13.96.85,10.31,1.92,16.42,3.06,16.42Z"
                                                    fill="url(#Degradado_sin_nombre_60-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path
                                                d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                fill="#337ff5"
                                                strokeWidth={0}
                                            />
                                            <path
                                                d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                fill="#337ff5"
                                                strokeWidth={0}
                                            />
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="url(#Degradado_sin_nombre_64)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="url(#Degradado_sin_nombre_64)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="url(#Degradado_sin_nombre_64-2)"
                                                    strokeWidth={0}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="url(#Degradado_sin_nombre_64-3)"
                                                    strokeWidth={0}
                                                />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#2e3192"
                                                    strokeWidth={0.39}
                                                />
                                                <path
                                                    d="M650.88,2375.54h-3.16c-.96,0-1.76-21.7-1.99-50.9-.05-5.02-.05-10.25-.05-15.64s0-10.67.05-15.69c.21-29.18,1.04-50.83,1.99-50.83h3.16s-.13.1-.21.34c-.54,1.79-1.04,10.64-1.37,23.77-.21,8-.34,17.58-.41,28.12-.05,4.61-.05,9.42-.05,14.34s0,9.68.05,14.27c.05,10.54.21,20.14.41,28.17.31,12.22.75,20.77,1.27,23.3.1.52.21.78.31.78v-.03Z"
                                                    fill="none"
                                                    stroke="#2e3192"
                                                    strokeWidth={0.39}
                                                />
                                            </g>
                                            <g>
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#2e3192"
                                                    strokeWidth={0.39}
                                                />
                                                <path
                                                    d="M975.18,2309.02c0,5.33,0,10.54-.05,15.54-.21,29.26-1.04,51.01-1.99,51.01h-3.16s.21-.26.31-.78c.52-2.54.96-11.08,1.27-23.3.21-8.05.34-17.68.41-28.25.03-4.58.05-9.32.05-14.19s0-9.66-.05-14.24c-.08-10.56-.21-20.17-.41-28.2-.34-13.1-.83-21.98-1.37-23.77-.08-.21-.13-.34-.21-.34h3.16c.96,0,1.76,21.72,1.99,50.93.05,5,.05,10.23.05,15.59Z"
                                                    fill="none"
                                                    stroke="#2e3192"
                                                    strokeWidth={0.39}
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <polygon
                                            points="657.49 2298.41 657.49 2319.56 652.51 2321.73 648.89 2323.29 645.73 2324.66 642.52 2326.06 642.52 2291.93 645.73 2293.33 648.89 2294.68 652.54 2296.26 657.49 2298.41"
                                            fill="url(#Degradado_sin_nombre_66)"
                                            strokeWidth={0}
                                        />
                                        <polygon
                                            points="978.58 2291.93 978.58 2326.06 978.47 2326.01 975.11 2324.56 971.97 2323.18 968.35 2321.6 963.61 2319.56 963.61 2298.41 968.32 2296.36 971.97 2294.78 975.11 2293.43 978.47 2291.96 978.58 2291.93"
                                            fill="url(#Degradado_sin_nombre_66-2)"
                                            strokeWidth={0}
                                        />
                                    </g>
                                </g>
                            </g>
                            <g id="Pantalla">
                                <g>
                                    <g>
                                        <rect
                                            x={657.67}
                                            y={2261.64}
                                            width={307.73}
                                            height={95.98}
                                            rx={14.76}
                                            ry={14.76}
                                            fill="url(#Degradado_sin_nombre_67)"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M950.64,2261.95c7.97,0,14.45,6.47,14.45,14.45v66.49c0,7.97-6.47,14.45-14.45,14.45h-278.24c-7.97,0-14.45-6.47-14.45-14.45v-66.49c0-7.97,6.47-14.45,14.45-14.45h278.21M950.64,2261.35h-278.24c-8.31,0-15.04,6.76-15.04,15.04v66.49c0,8.31,6.76,15.04,15.04,15.04h278.21c8.31,0,15.04-6.76,15.04-15.04v-66.49c0-8.31-6.76-15.04-15.04-15.04h.03Z"
                                            fill="#1b1464"
                                            strokeWidth={0}
                                        />
                                    </g>
                                    <g>
                                        <rect
                                            x={663.93}
                                            y={2266.89}
                                            width={295.2}
                                            height={85.5}
                                            rx={12.01}
                                            ry={12.01}
                                            fill="url(#Degradado_sin_nombre_69)"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M947.09,2267.2c6.45,0,11.7,5.26,11.7,11.7v61.47c0,6.45-5.26,11.7-11.7,11.7h-271.14c-6.45,0-11.7-5.26-11.7-11.7v-61.47c0-6.45,5.26-11.7,11.7-11.7h271.17M947.09,2266.61h-271.14c-6.81,0-12.32,5.52-12.32,12.32v61.47c0,6.81,5.52,12.32,12.32,12.32h271.17c6.81,0,12.32-5.52,12.32-12.32v-61.47c0-6.81-5.52-12.32-12.32-12.32h-.03Z"
                                            fill="#29abe2"
                                            strokeWidth={0}
                                        />
                                        <foreignObject x="667.5" y="2289" width="300" height="500">
                                            <div
                                                {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                                                style={{
                                                    fontSize: "2.6em", color: "black", fontWeight: "500",
                                                    margin: 0,
                                                    padding: 0,
                                                    lineHeight: "1em"
                                                }}
                                            >
                                                <TypeAnimation
                                                    sequence={[
                                                        "SNS LAUNCH",
                                                        2000,
                                                        "EXTENSION",
                                                        2000,
                                                        "AI AGENTS",
                                                        2000,
                                                        () => {
                                                            // repeats
                                                        }
                                                    ]}
                                                    wrapper="span"
                                                    cursor={true}
                                                    repeat={Infinity}
                                                    style={{ fontSize: "1em", whiteSpace: "pre" }}
                                                />
                                            </div>
                                        </foreignObject>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div >
    );
};

export default Roadmap;
