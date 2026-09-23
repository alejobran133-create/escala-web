import Image from "next/image";

const route = "M 178 610 C 285 610 319 523 352 472 S 416 329 503 331 S 617 436 680 365 S 687 226 780 177 S 878 166 940 105";

export function HeroMotion() {
  return <div className="hero-motion" aria-hidden="true">
    <div className="hero-motion-beam" />
    <svg className="hero-motion-map" viewBox="0 0 1000 760" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 H 0 V 48" stroke="#f8e8ed" strokeOpacity=".13" strokeWidth="1" />
        </pattern>
        <radialGradient id="hero-aura">
          <stop stopColor="#b86b83" stopOpacity=".46" />
          <stop offset=".48" stopColor="#8a3958" stopOpacity=".2" />
          <stop offset="1" stopColor="#4a1d30" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-sheet" x1="314" y1="65" x2="863" y2="717" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e4a8b9" stopOpacity=".3" />
          <stop offset=".48" stopColor="#a95d78" stopOpacity=".1" />
          <stop offset="1" stopColor="#e1a0b2" stopOpacity=".25" />
        </linearGradient>
        <linearGradient id="hero-route" x1="178" y1="610" x2="940" y2="105" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f6d8dd" stopOpacity=".2" />
          <stop offset=".5" stopColor="#fff3e8" />
          <stop offset="1" stopColor="#f3bdca" />
        </linearGradient>
      </defs>

      <rect width="1000" height="760" fill="url(#hero-grid)" className="hero-motion-grid" />
      <circle cx="642" cy="380" r="390" fill="url(#hero-aura)" className="hero-motion-aura" />

      <g className="hero-motion-sheets">
        <path d="M 406 10 L 897 108 L 965 550 L 580 709 L 315 445 Z" fill="url(#hero-sheet)" stroke="#f4dbe1" strokeOpacity=".18" />
        <path d="M 530 48 L 850 156 L 921 468 L 668 612 L 440 393 Z" stroke="#f5dfe3" strokeOpacity=".28" />
        <path d="M 297 305 L 689 76 L 889 210 L 525 552 Z" fill="#fff3ed" fillOpacity=".035" stroke="#f6dce3" strokeOpacity=".19" />
        <path d="M 580 709 L 668 612 L 921 468" stroke="#fff4ed" strokeOpacity=".24" />
      </g>

      <g className="hero-motion-orbit hero-motion-orbit-outer">
        <circle cx="642" cy="380" r="316" stroke="#f9dfe5" strokeOpacity=".44" strokeWidth="1.2" strokeDasharray="2 12" />
        <circle cx="642" cy="380" r="305" stroke="#f9dfe5" strokeOpacity=".12" />
      </g>
      <g className="hero-motion-orbit hero-motion-orbit-inner">
        <circle cx="642" cy="380" r="232" stroke="#fff2e9" strokeOpacity=".4" strokeWidth="1.4" strokeDasharray="42 30 2 30" />
        <circle cx="642" cy="380" r="171" stroke="#f9dfe5" strokeOpacity=".16" />
      </g>
      <circle cx="642" cy="380" r="103" stroke="#fff1e8" strokeOpacity=".32" />
      <circle cx="642" cy="380" r="5" fill="#fff6ec" />
      <path d="M 642 264 V 496 M 526 380 H 758" stroke="#f7dce2" strokeOpacity=".16" />

      <path d={route} className="hero-motion-route-rail" />
      <path d={route} className="hero-motion-route-line" />
      <g className="hero-motion-nodes">
        <circle className="hero-motion-node hero-motion-node-one" cx="352" cy="472" r="8" />
        <circle className="hero-motion-node hero-motion-node-two" cx="503" cy="331" r="8" />
        <circle className="hero-motion-node hero-motion-node-three" cx="680" cy="365" r="8" />
        <circle className="hero-motion-node hero-motion-node-four" cx="780" cy="177" r="8" />
        <circle className="hero-motion-node hero-motion-node-five" cx="940" cy="105" r="8" />
      </g>
      <path d="M 112 656 H 353 M 815 624 H 960 M 821 637 H 915" stroke="#f4dce2" strokeOpacity=".2" />
      <path d="M 170 639 V 671 M 314 639 V 671 M 873 607 V 641" stroke="#f4dce2" strokeOpacity=".3" />
    </svg>
    <div className="hero-mark-stage">
      <div className="hero-mark-aura" />
      <div className="hero-mark-floor hero-mark-floor-outer" />
      <div className="hero-mark-floor hero-mark-floor-inner" />
      <div className="hero-mark-world">
        {Array.from({ length: 11 }, (_, index) =>
          <Image
            key={index}
            src="/brand/escala-symbol.png"
            width={6000}
            height={6000}
            sizes="(max-width: 760px) 440px, 600px"
            alt=""
            className="hero-mark-slice"
            style={{ transform: `translateZ(${-76 + index * 8}px)` }}
          />
        )}
        <Image
          src="/brand/escala-symbol.png"
          width={6000}
          height={6000}
          sizes="(max-width: 760px) 440px, 600px"
          alt=""
          className="hero-mark-face"
          preload
        />
      </div>
      <div className="hero-mark-light hero-mark-light-one" />
      <div className="hero-mark-light hero-mark-light-two" />
    </div>
    <div className="hero-motion-vignette" />
  </div>;
}
