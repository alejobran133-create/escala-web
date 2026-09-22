"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icon";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "activation" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("_honey")) return;
    setState("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/escalabusinessco@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.get("name"),
          whatsapp: fields.get("whatsapp"),
          email: fields.get("email"),
          country: fields.get("country"),
          _subject: "Nueva solicitud desde ESCALA Web",
          _replyto: fields.get("email"),
          _template: "table",
          _url: window.location.href,
          _honey: fields.get("_honey"),
        }),
      });
      const result: unknown = await response.json();
      if (!response.ok || !result || typeof result !== "object" || !("success" in result)) throw new Error("Delivery failed");
      if (result.success === true || result.success === "true") {
        form.reset();
        setState("sent");
      } else if ("message" in result && typeof result.message === "string" && /activation/i.test(result.message)) {
        setState("activation");
      } else {
        throw new Error("Delivery failed");
      }
    } catch {
      setState("error");
    }
  }

  return <form className="contact-form" action="https://formsubmit.co/escalabusinessco@gmail.com" method="POST" onSubmit={handleSubmit} onChange={() => { if (state !== "sending") setState("idle"); }} aria-busy={state === "sending"}>
    <p className="contact-form-heading">Cuéntanos cómo encontrarte</p>
    <div className="contact-fields">
      <div className="contact-field">
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" minLength={2} maxLength={100} required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-whatsapp">WhatsApp</label>
        <input id="contact-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="+57 300 000 0000" pattern="(?:[0-9+ ]|-){7,24}" title="Escribe un número de 7 a 24 caracteres usando dígitos, espacios, + o guiones" maxLength={24} required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Correo electrónico</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" maxLength={254} required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-country">País desde el que nos contactas</label>
        <input id="contact-country" name="country" type="text" autoComplete="country-name" placeholder="Tu país" minLength={2} maxLength={80} required />
      </div>
    </div>
    <input type="hidden" name="_subject" value="Nueva solicitud desde ESCALA Web" readOnly />
    <input type="hidden" name="_template" value="table" readOnly />
    <div className="contact-trap" aria-hidden="true"><label htmlFor="contact-website">Sitio web</label><input id="contact-website" name="_honey" type="text" tabIndex={-1} autoComplete="off" /></div>
    <div className="contact-form-footer">
      <button type="submit" className="button button-light" disabled={state === "sending"}>{state === "sending" ? "Enviando…" : "Enviar solicitud"} <Icon name="arrow" /></button>
      <p className="contact-availability">Para responderte, tus datos se envían a ESCALA mediante FormSubmit, que los conserva hasta 30 días. <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">Privacidad del servicio</a>.</p>
    </div>
    {state === "sent" && <p className="contact-feedback" role="status">Tu solicitud fue recibida por el servicio de correo. ESCALA se pondrá en contacto contigo.</p>}
    {state === "activation" && <p className="contact-feedback" role="status">El buzón de ESCALA está pendiente de activación. Tu solicitud todavía no llegó al correo; mientras tanto, escríbenos directamente al correo indicado.</p>}
    {state === "error" && <p className="contact-feedback" role="alert">No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos al correo indicado.</p>}
  </form>;
}
