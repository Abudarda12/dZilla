import { useState } from "react";
import './hero.css';
import Rolling from "./Rolling";

export default function Hero() {
    return (
        <>
     <div className="hero">
        <div className="hero-text">
            <h1>Your vision our intelligance</h1>
        </div>
        <Rolling />
        <div className="hero-text2">
            <p>We’re not just another design agency. We’re storytellers, creators, and pixel-perfectionists <br />
— turning bold ideas into <br />
digital realities that work hard and look good doing it</p>
        </div>
    </div>
        </>
      
    );
}