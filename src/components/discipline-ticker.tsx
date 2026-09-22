const disciplines = ["Investigación", "Estructura", "Diseño", "Tecnología", "Datos"];

export function DisciplineTicker() {
  return <div className="hero-ticker">
    <p className="sr-only">Investigación, estructura, diseño, tecnología y datos.</p>
    <div className="hero-ticker-viewport" aria-hidden="true">
      <div className="hero-ticker-track">
        {[0, 1].map(copy => <div className="hero-ticker-group" key={copy}>
          {disciplines.map(word => <span key={word}>{word}</span>)}
        </div>)}
      </div>
    </div>
  </div>;
}
