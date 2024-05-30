'use client'

import { useRef } from "react";
import gsap, { Power1 } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Image from "next/image";

import "../animations/Arrow.css"

export default function Arrow() {
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null);
    const tlScroll = useRef<GSAPTimeline>();

    // Variables for eases/magnitudes
    const out = Power1.easeOut
    const inn = Power1.easeIn
    const base = 90
    const mag1 = 18
    const mag2 = 10
    const mag3 = 6
    const mag4 = 4
    const mag5 = 2

    // TODO Clean this up - Keyframes
    const { contextSafe } = useGSAP(() => {
        tlScroll.current = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".pivot",
                toggleActions: "play none none none",
                start: "bottom bottom"
            }
        })
            .to(".arrow-container", {
                rotate: base + mag1,
                duration: 0.5,
                ease: out
            })
            //// First Big Swing
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base - mag1,
                duration: 0.5, 
                ease: out
            })
            //// 1
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base + mag2,
                duration: 0.5,
                ease: out
            })
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base - mag2,
                duration: 0.5, 
                ease: out
            })
            //// 2
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base + mag3,
                duration: 0.5,
                ease: out
            })
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base - mag4,
                duration: 0.5, 
                ease: out
            })
            //// 3
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base + mag5,
                duration: 0.5,
                ease: out
            })
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
            .to(".arrow-container", {
                rotate: base - mag5,
                duration: 0.5, 
                ease: out
            })
            .to(".arrow-container", {
                rotate: base,
                duration: 0.5, 
                ease: inn
            })
      });

    return (
 
        <div ref={container} className="arrow-container">
            <div className="pivot">
                <Image
                src="/arrowroadsign.svg"
                fill={true}
                className="contain"
                alt="arrow"
                /> 
            </div>
        </div>  

    );
  }