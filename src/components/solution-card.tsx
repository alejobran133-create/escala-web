import { Icon } from "./icon";
import { Modal } from "./modal";
import { solutions } from "@/content/home";

export function SolutionCard({ solution }: { solution: (typeof solutions)[number] }) {
  return <article className="solution-card">
    <Icon name={solution.icon} className="solution-icon" />
    <h3>{solution.title}</h3>
    <p>{solution.description}</p>
    <Modal label="Saber más" triggerLabel={`Saber más sobre ${solution.title}`} title={solution.title} className="card-link" footerHref="#contacto" footerLabel="Ver sección de contacto">
      <p>{solution.description}</p>
      <p>Combinamos las capacidades que tu proyecto necesita.</p>
    </Modal>
  </article>;
}
