'use client'

import { useRef } from "react";
import gsap, { Bounce, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import "../animations/Playtime.css"

export default function Playtime() {
    const container = useRef(null);
    const tlInit = useRef<GSAPTimeline>();
 
    const { contextSafe } = useGSAP(() => {
        tlInit.current = gsap
        .timeline({})
            .to(".playtime-container", {
                y: "-10%",
                ease: Power1.easeOut,
                repeat: 5,
                duration: 0.2,
                yoyo: true
            })
        })
    return (
 
        <div ref={container} className="playtime-container">
            <Image
            src="/playtime.svg"
            fill={true}
            className="contain"
            alt="playtime"
            /> 
        </div>  

    );
  }