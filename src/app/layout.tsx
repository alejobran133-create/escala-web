import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fineday = localFont({
  src: "../assets/fonts/Fineday-StyleOne.ttf",
  variable: "--font-fineday",
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: { default: "ESCALA | Soluciones empresariales", template: "%s | ESCALA" },
  description: "Estrategia, diseño y tecnología para construir mejores negocios.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/escala-logo-oficial.png" },
  openGraph: {
    title: "ESCALA | Soluciones empresariales",
    description: "Analizamos antes de avanzar. Estrategia, diseño y tecnología para construir mejores negocios.",
    type: "website",
    locale: "es_CO",
    siteName: "ESCALA",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={fineday.variable}><body><a className="skip-link" href="#contenido">Saltar al contenido</a>{children}</body></html>;
}
