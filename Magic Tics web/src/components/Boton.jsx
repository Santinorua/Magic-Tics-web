import './Boton.css'

function Boton({ children, variante = 'outline', href }) {
  return (
    <a className={`button button-${variante}`} href={href}>
      {children}
    </a>
  )
}

export default Boton
