"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";

export function HeroMotion() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [turns, setTurns] = useState(0);
  const [spinning, setSpinning] = useState(false);

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (spinning || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    setTilt({ x: -y * 16, y: x * 24 });
  }

  return <div className="hero-motion">
    <div className="hero-mark-stage">
      <div className="hero-mark-aura" aria-hidden="true" />
      <svg className="hero-mark-podium" viewBox="0 0 560 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="podium-top" x1="35" y1="27" x2="525" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9a6177" />
            <stop offset="1" stopColor="#754057" />
          </linearGradient>
          <linearGradient id="podium-front" x1="280" y1="44" x2="280" y2="94" gradientUnits="userSpaceOnUse">
            <stop stopColor="#613047" />
            <stop offset="1" stopColor="#3b1d2f" />
          </linearGradient>
        </defs>
        <path d="M35 28H525L550 44H10L35 28Z" fill="url(#podium-top)" stroke="#cf9dac" strokeOpacity=".48" />
        <path d="M10 44H550L535 94H25L10 44Z" fill="url(#podium-front)" stroke="#a66b80" strokeOpacity=".52" />
        <path d="M21 49H539" stroke="#e4b7c4" strokeOpacity=".42" />
      </svg>
      <div className="hero-mark-shadow" aria-hidden="true" />
      <button
        type="button"
        className="hero-mark-control"
        aria-label="Girar el símbolo tridimensional de ESCALA"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        onClick={() => {
          setSpinning(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
          setTurns((current) => current + 1);
        }}
        onBlur={() => setTilt({ x: 0, y: 0 })}
      >
        <span className="hero-mark-float">
          <span
            className={`hero-mark-world${spinning ? " is-spinning" : ""}`}
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${turns * 360 + tilt.y}deg)` }}
            onTransitionEnd={(event) => {
              if (event.propertyName === "transform") setSpinning(false);
            }}
          >
            {Array.from({ length: 10 }, (_, index) =>
              <Image
                key={index}
                src="/brand/escala-symbol.png"
                width={6000}
                height={6000}
                sizes="(max-width: 760px) 320px, 390px"
                alt=""
                className="hero-mark-slice"
                style={{ transform: `translateZ(${-48 + index * 6}px)` }}
              />
            )}
            <Image
              src="/brand/escala-symbol.png"
              width={6000}
              height={6000}
              sizes="(max-width: 760px) 320px, 390px"
              alt=""
              className="hero-mark-back"
            />
            <Image
              src="/brand/escala-symbol.png"
              width={6000}
              height={6000}
              sizes="(max-width: 760px) 320px, 390px"
              alt=""
              className="hero-mark-face"
              preload
            />
            <span className="hero-mark-sheen" aria-hidden="true" />
          </span>
        </span>
      </button>
    </div>
    <div className="hero-motion-vignette" aria-hidden="true" />
  </div>;
}
