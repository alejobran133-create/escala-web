import Image from "next/image";
export function Brand() {
  return <a href="#inicio" className="brand" aria-label="ESCALA — volver al inicio">
    <span className="brand-window">
      <Image src="/brand/escala-logo-sas.png" alt="ESCALA — Business Solutions S.A.S." width={6250} height={6250} sizes="340px" className="brand-image" />
    </span>
  </a>;
}
