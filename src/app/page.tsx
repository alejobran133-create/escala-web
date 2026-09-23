import Image from "next/image";
import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { ServiceExplorer } from "@/components/service-explorer";
import { DisciplineTicker } from "@/components/discipline-ticker";
import { HeroMotion } from "@/components/hero-motion";
import { steps } from "@/content/home";

export default function Home() {
  return <>
    <Header />
    <main id="contenido">
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <HeroMotion />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">ESCALA · Soluciones empresariales</p>
            <h1 id="hero-title">Analizamos<br />antes de <em>avanzar.</em></h1>
            <p className="hero-description">Estrategia, diseño y tecnología para construir mejores negocios.</p>
            <div className="hero-actions">
              <a href="#soluciones" className="button button-light">Explorar soluciones <Icon name="arrow" /></a>
              <a href="#proceso" className="hero-process-link">Conoce nuestro proceso <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <DisciplineTicker />
      </section>

      <section id="soluciones" className="solutions-section shell" aria-labelledby="solutions-title">
        <div className="section-heading">
          <div><p className="eyebrow">Lo que hacemos</p><h2 id="solutions-title">Cada necesidad merece <br /><em>una respuesta propia.</em></h2></div>
          <p className="section-hint">Explora nuestras capacidades y descubre cómo pueden aportar a tu negocio.</p>
        </div>
        <ServiceExplorer />
      </section>

      <section id="proceso" className="process-section" aria-labelledby="process-title">
        <div className="process-image"><Image src="/images/brand-series/proceso.webp" alt="Profesional trazando una ruta de cinco pasos en un panel de trabajo" fill sizes="(max-width: 760px) 100vw, 46vw" /><div className="process-image-note"><span>DEL ANÁLISIS A LA ACCIÓN</span><p>Ideas claras.<br />Pasos concretos.</p></div></div>
        <div className="process-content" id="etapas">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 id="process-title">Del análisis a la<br /><em>implementación.</em></h2>
          <p className="process-intro">Un proceso claro y flexible, orientado a lo que tu proyecto necesita.</p>
          <div className="process-accordion">{steps.map((step, i) => <details key={step.title} name="escala-process" open={i === 0}><summary><span className="step-number">{String(i + 1).padStart(2, "0")}</span><h3>{step.title}</h3><span className="expand-icon" aria-hidden="true" /></summary><p>{step.description}</p></details>)}</div>
        </div>
      </section>

      <section id="contacto" className="contact-section" aria-labelledby="contact-title"><div className="shell contact-inner"><div className="contact-copy"><p className="eyebrow">El siguiente paso</p><h2 id="contact-title"><em>Hablemos</em> de tu negocio.</h2><p>Cuéntanos qué necesitas. El primer paso es entenderlo.</p><div className="contact-channels" aria-label="Canales de contacto de ESCALA"><a href="mailto:escalabusinessco@gmail.com"><span>Correo</span><strong>escalabusinessco@gmail.com</strong><Icon name="arrow" /></a><a href="https://www.instagram.com/_escalabusiness/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>@_escalabusiness</strong><Icon name="arrow" /></a></div></div><ContactForm /></div></section>
    </main>
  </>;
}
