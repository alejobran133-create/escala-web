"use client";

import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import { Icon } from "./icon";
import { Modal } from "./modal";

export function Header() {
  const [expanded, setExpanded] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const reset = () => { if (desktop.matches) setExpanded(false); };
    desktop.addEventListener("change", reset);
    return () => desktop.removeEventListener("change", reset);
  }, []);
  const close = () => setExpanded(false);
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === "Escape" && expanded) { close(); toggle.current?.focus(); }
  }}>
    <div className="header-inner">
      <Brand />
      <button ref={toggle} className="menu-toggle" type="button" aria-controls="main-navigation" aria-expanded={expanded}
        aria-label={expanded ? "Cerrar menú" : "Abrir menú"} onClick={() => setExpanded(!expanded)}>
        <span>{expanded ? "Cerrar" : "Menú"}</span><Icon name={expanded ? "close" : "menu"} />
      </button>
      <nav id="main-navigation" aria-label="Navegación principal" className={expanded ? "navigation is-open" : "navigation"}>
        <a href="#soluciones" onClick={close}>Soluciones</a>
        <a href="#proceso" onClick={close}>Cómo trabajamos</a>
        <Modal label="Sobre ESCALA" title="Una visión integral de tu negocio" className="nav-button" arrow={false}>
          <p>Estrategia, diseño y tecnología para construir mejores negocios.</p>
          <p className="dialog-quote">Analizamos antes de avanzar.</p>
        </Modal>
        <a href="#contacto" className="button button-primary header-contact" onClick={close}>Contacto <Icon name="arrow" /></a>
      </nav>
    </div>
  </header>;
}
