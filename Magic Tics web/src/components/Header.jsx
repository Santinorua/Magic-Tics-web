import './Header.css'

function volverAlInicio(evento) {
  evento.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.history.replaceState(null, '', '#top')
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={volverAlInicio} aria-label="Magic Tics, inicio">
        <span>MAGIC</span> <strong>TICS</strong>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#top" onClick={volverAlInicio}>INICIO</a>
        <a href="#alianza">ALIANZA</a>
        <a href="#trucos">TRUCOS</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
      <a className="header-cta" href="#trucos">PROYECTOS</a>
    </header>
  )
}

export default Header
