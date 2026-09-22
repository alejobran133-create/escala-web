"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { solutions } from "@/content/home";
import { serviceImages } from "@/content/service-images";
import { Icon } from "./icon";

const labels = ["Estrategia", "Empresa", "Diseño", "Tecnología", "IA", "Datos", "Mejora"];

export function ServiceExplorer() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const service = solutions[selected];
  const visual = serviceImages[service.id];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setSelected(current => (current + 1) % solutions.length), 3400);
    return () => window.clearTimeout(timer);
  }, [playing, selected]);

  useEffect(() => {
    const stopWhenHidden = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => document.removeEventListener("visibilitychange", stopWhenHidden);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const target = tabs.current[selected];
    const rail = target?.parentElement;
    if (rail && target && rail.scrollWidth > rail.clientWidth) {
      rail.scrollBy({ left: target.getBoundingClientRect().left - rail.getBoundingClientRect().left - 16, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  }, [playing, selected]);

  function choose(index: number) {
    setPlaying(false);
    setSelected(index);
  }

  function selectAndFocus(index: number) {
    choose(index);
    tabs.current[index]?.focus();
    tabs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
  }

  return <div className="service-explorer" id="capacidades">
    <div className="reel-controls">
      <div className="reel-intro"><span className="reel-kicker">RECORRIDO ESCALA</span><span>Una mirada a lo que podemos construir contigo.</span></div>
      <button type="button" className="reel-toggle" aria-label={playing ? "Pausar recorrido" : "Reproducir recorrido"} aria-pressed={playing} onClick={() => setPlaying(value => !value)}><span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>{playing ? "Pausar" : "Ver recorrido"}</button>
    </div>
    <div className="reel-timeline" aria-hidden="true">{solutions.map((item, index) => <span key={item.id} className={index === selected ? "is-current" : index < selected ? "is-past" : ""}><i key={`${selected}-${playing}`} className={index === selected && playing ? "is-playing" : ""} /></span>)}</div>
    <p className="tabs-hint">Desliza para explorar las siete capacidades <span aria-hidden="true">→</span></p>
    <div className="service-tabs" role="tablist" aria-label="Capacidades de ESCALA">
      {solutions.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element; }} type="button" role="tab" id={`tab-${item.id}`} aria-controls="service-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => choose(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % solutions.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + solutions.length) % solutions.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = solutions.length - 1;
        else return;
        event.preventDefault();
        selectAndFocus(next);
      }}><span className="tab-index">{String(index + 1).padStart(2, "0")}</span><span>{labels[index]}</span></button>)}
    </div>
    <div id="service-panel" className="service-panel" role="tabpanel" aria-labelledby={`tab-${service.id}`} tabIndex={0}>
      <div className="service-art" key={service.id}>
        <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 760px) 100vw, 58vw" style={{ objectPosition: visual.position }} className="service-photo" />
        <div className="photo-caption"><span>ESCALA / {String(selected + 1).padStart(2, "0")}</span><p>{visual.caption}</p></div>
      </div>
      <div className="service-content" data-index={String(selected + 1).padStart(2, "0")}>
        <div className="service-content-main">
          <p className="eyebrow">Capacidad {String(selected + 1).padStart(2, "0")} / 07</p>
          <h3>{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <div className="service-tags" aria-label="Áreas del servicio">{visual.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="service-actions">
          <a href="#contacto" className="button button-service" onClick={() => setPlaying(false)}>Conversemos <Icon name="arrow" /></a>
          <button type="button" className="service-next" onClick={() => selectAndFocus((selected + 1) % solutions.length)}>Siguiente solución <Icon name="arrow" /></button>
        </div>
      </div>
    </div>
  </div>;
}

