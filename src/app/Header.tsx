'use client'

import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Image from 'next/image'

import './Header.css'

export default function Header() {
    gsap.registerPlugin(useGSAP);
    const header = useRef(null);
    const { contextSafe } = useGSAP({ scope: header });

    const [headerActive, setHeader] = useState(false)

    const onClickButton = contextSafe(() => {
        if (!headerActive) {
            gsap.set("#header_items", {visibility: "visible"});
            setHeader(true)
        }
        else{
            gsap.set("#header_items", {visibility: "hidden"});
            setHeader(false)
        }
    });

    return (
     <>
     
        <div ref={header} id="header">
            <div id="header_left"> 
                <Image
                    src="/Main Logo.svg"
                    fill={true}
                    className="contain"
                    alt="NOTS Main Logo"
                />
            </div>

            <div id="header_right"> 
                <div id="header_items">
                    <div id="about"> About </div>
                    <div id="contact"> Contact </div>
                </div>
                <div id="header_button" onClick={onClickButton}> |||||| </div>
            </div>
        </div>
     
     
     </>
    );
  }