import './TarjetaNosotros.css'

function TarjetaNosotros({ icono, titulo, descripcion, link }) {
  return (
    <article className="info-card">
      <img className="icono-tarjeta" src={icono} alt="" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {link && (
        <a className="link-tarjeta" href={link.href} target="_blank" rel="noreferrer">
          {link.label} ↗
        </a>
      )}
    </article>
  )
}

export default TarjetaNosotros
