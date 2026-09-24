"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";

export function HeroMotion() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    setTilt({ x: -y * 12, y: x * 16 });
  }

  return <div className="hero-motion">
    <div className="hero-environment" aria-hidden="true">
      <Image
        src="/images/brand-series/hero-future-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-environment-image"
      />
    </div>
    <div className="hero-atmosphere" aria-hidden="true" />
    <div className="hero-sweep" aria-hidden="true" />
    <div className="hero-stage">
      <div className="hero-stage-aura" aria-hidden="true" />
      <div className="hero-stage-floor" aria-hidden="true" />
      <button
        type="button"
        className={`hero-artifact${active ? " is-active" : ""}`}
        aria-label="Activar la escena de ESCALA"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        onBlur={() => setTilt({ x: 0, y: 0 })}
        onClick={() => setActive(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)}
      >
        <span className="hero-artifact-hover">
          <span
            className="hero-artifact-object"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <span className="hero-artifact-back" aria-hidden="true" />
            <span className="hero-artifact-mid" aria-hidden="true" />
            <span className="hero-artifact-front">
              <span className="hero-artifact-kicker" aria-hidden="true">ESCALA / EN MOVIMIENTO</span>
              <Image
                src="/brand/escala-symbol.png"
                width={6000}
                height={6000}
                sizes="(max-width: 760px) 230px, 300px"
                alt=""
                className="hero-artifact-symbol"
              />
              <span className="hero-artifact-baseline" aria-hidden="true">ANÁLISIS <i /> ESTRATEGIA <i /> ACCIÓN</span>
              <span className="hero-artifact-edge" aria-hidden="true" />
              <span className="hero-artifact-glint" aria-hidden="true" />
            </span>
          </span>
        </span>
        <span
          className="hero-artifact-wave"
          aria-hidden="true"
          onAnimationEnd={() => setActive(false)}
        />
      </button>
    </div>
    <div className="hero-motion-vignette" aria-hidden="true" />
  </div>;
}
