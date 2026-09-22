"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./icon";

export function Modal({ label, title, children, className = "text-link", arrow = true, onOpen, footerHref, footerLabel, triggerLabel }: {
  label: string; title: string; children: React.ReactNode; className?: string; arrow?: boolean; onOpen?: () => void;
  footerHref?: string; footerLabel?: string; triggerLabel?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    element?.querySelector<HTMLButtonElement>(".dialog-close")?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  return <>
    <button type="button" className={className} aria-label={triggerLabel} aria-haspopup="dialog" onClick={() => { onOpen?.(); setOpen(true); }}>
      {label}{arrow && <Icon name="arrow" />}
    </button>
    <dialog ref={dialog} className="info-dialog" aria-labelledby={id} onClose={() => setOpen(false)} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex="0"]')).filter(el => el.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <button type="button" className="dialog-close" aria-label="Cerrar ventana" onClick={() => dialog.current?.close()}><Icon name="close" /></button>
      <p className="eyebrow">ESCALA</p>
      <h2 id={id}>{title}</h2>
      <div className="dialog-content">{children}</div>
      {footerHref && <a className="text-link dialog-footer" href={footerHref} onClick={() => dialog.current?.close()}>{footerLabel}<Icon name="arrow" /></a>}
      <button type="button" className="button button-outline dialog-return" onClick={() => dialog.current?.close()}>Volver a la página</button>
    </dialog>
  </>;
}
