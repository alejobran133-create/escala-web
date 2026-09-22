import Image from "next/image";
export function Brand() {
  return <a href="#inicio" className="brand" aria-label="ESCALA — volver al inicio">
    <span className="brand-window">
      <Image src="/brand/escala-logo-business-solutions.png" alt="ESCALA — Business Solutions" width={1500} height={1500} sizes="340px" className="brand-image" />
    </span>
  </a>;
}
