import Image from "next/image";

export function HeroMotion() {
  return <div className="hero-motion" aria-hidden="true">
    <div className="hero-environment">
      <Image
        src="/images/brand-series/hero-future-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-environment-image"
      />
    </div>
    <div className="hero-atmosphere" />
    <div className="hero-sweep" />
    <div className="hero-motion-vignette" />
  </div>;
}
