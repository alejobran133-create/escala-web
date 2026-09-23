import Image from "next/image";

export function HeroMotion() {
  return <div className="hero-motion" aria-hidden="true">
    <div className="hero-mark-stage">
      <div className="hero-mark-aura" />
      <svg className="hero-mark-podium" viewBox="0 0 560 110" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="hero-mark-world">
        {Array.from({ length: 6 }, (_, index) =>
          <Image
            key={index}
            src="/brand/escala-symbol.png"
            width={6000}
            height={6000}
            sizes="(max-width: 760px) 320px, 390px"
            alt=""
            className="hero-mark-slice"
            style={{ transform: `translateZ(${-24 + index * 5}px)` }}
          />
        )}
        <Image
          src="/brand/escala-symbol.png"
          width={6000}
          height={6000}
          sizes="(max-width: 760px) 320px, 390px"
          alt=""
          className="hero-mark-face"
          preload
        />
      </div>
    </div>
    <div className="hero-motion-vignette" />
  </div>;
}
