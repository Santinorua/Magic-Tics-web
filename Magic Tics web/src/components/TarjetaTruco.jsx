import './TarjetaTruco.css'

function TarjetaTruco({ numero, icono, titulo, descripcion, caracteristicas }) {
  return (
    <article className="info-card trick-card">
      <div className="linea-superior-truco">
        <span className="numero-truco">{numero}</span>
        <img className="icono-truco" src={icono} alt="" />
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <ul>
        {caracteristicas.map((caracteristica) => <li key={caracteristica}>✓ &nbsp;{caracteristica}</li>)}
      </ul>
    </article>
  )
}

export default TarjetaTruco
