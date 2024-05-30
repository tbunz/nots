'use client'

import { useRef } from "react";
import gsap, { Bounce, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import "../animations/Fruit.css"

export default function Fruit() {
    const container = useRef(null);
    const tlInit = useRef<GSAPTimeline>();
    const tlBounce = useRef<GSAPTimeline>();

    const { contextSafe } = useGSAP(() => {
        tlBounce.current = gsap
        .timeline({ repeat: -1, repeatDelay: 1,})
            .to(".fruit-container", {
                y: "-10%",
                ease: Power1.easeOut,
                repeat: 5,
                duration: 0.2,
                yoyo: true
            })
        
        // tlINIT plays first - nested TLs
        tlInit.current = gsap
        .timeline({})
            .from(".fruit-container", {
                y: "-100%",
                duration: 3,
                delay: 1,
                scale: 0.7,
                ease: Bounce.easeOut
            })
            .add(tlBounce.current, "+=1")
        });
      
    return (
 
        <div ref={container} className="fruit-container">
            <Image
            src="/tutti.svg"
            fill={true}
            className="contain"
            alt="tutti"
            /> 
        </div>  

    );
  }