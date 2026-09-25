import logo from './assets/logo.png'
import fondo from './assets/fondo.png'
import iconoProposito from './assets/nuestroProposito.svg'
import iconoApoyo from './assets/apoyoExterno.svg'
import iconoAgua from './assets/aguaMagica.svg'
import iconoLocalizacion from './assets/localizacionInstantanea.svg'
import Boton from './components/Boton'
import Footer from './components/Footer'
import TarjetaNosotros from './components/TarjetaNosotros'
import Header from './components/Header'
import TarjetaTruco from './components/TarjetaTruco'
import './App.css'

const tarjetasNosotros = [
  {
    icono: iconoProposito,
    titulo: 'Nuestro propósito',
    descripcion: 'Combinamos la electrónica moderna y el diseño creativo para realizar trucos y efectos deslumbrantes por fuera de lo que estamos acostumbrados que trascienden los límites de la magia tradicional.',
  },
  {
    icono: iconoApoyo,
    titulo: 'Apoyo externo',
    descripcion: 'Contamos con el apoyo de Bazar de Magia y la experiencia de magos profecionales para el desarrollo y diseño de todos nuestros productos, asegurando la mejor calidad a la hora de hacer un truco funcional.',
    link: 'CONTACTO: HTTPS://BAZARDEMAGIA.COM/CONTACTO/INFO',
  },
]

const trucos = [
  {
    numero: '1',
    icono: iconoAgua,
    titulo: 'AGUA MÁGICA',
    descripcion: 'Gracias a un miniaturizado mecanismo electromecánico escondido dentro de la estructura de un recipiente, el mago es capaz de mover el agua en su interior sin ningún contacto físico, simulando un absoluto control mental e ilusionismo fluido.',
    caracteristicas: ['Activación remota indetectable', 'Diseño de recipiente personalizable'],
  },
  {
    numero: '2',
    icono: iconoLocalizacion,
    titulo: 'LOCALIZACIÓN INSTANTÁNEA',
    descripcion: 'Mediante un dispositivo emisor de precisión oculto dentro de cualquier objeto cotidiano, el mago puede ubicar exactamente su posición en el espacio en tiempo real, incluso con los ojos vendados o a través de barreras físicas.',
    caracteristicas: ['Retroalimentación háptica táctil y silenciosa', 'Alcance de señal optimizado'],
  },
]

function App() {
  return (
    <div className="site-shell" id="top">
      <Header />

      <main>
        <section className="hero-section" id="inicio">
          <div className="arte-hero" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="hero-content">
              <img src={logo} className="logo-hero" alt="Emblema de Magic Tics" />
              <h1>MAGIC TICS</h1>
              <div className="separador-hero" />
              <p>ELECTRÓNICA &amp;<br />ILUSIONISMO</p>
            </div>
          </div>
          <div className="acciones-hero">
            <Boton variante="primary" href="#trucos">EXPLORAR PROYECTOS</Boton>
            <Boton href="#alianza">¿QUIÉNES SOMOS?</Boton>
          </div>
        </section>

        <section className="seccion-contenido seccion-nosotros" id="alianza">
          <h2 className="titulo-seccion">¿QUIÉNES SOMOS?</h2>
          <div className="card-grid">
            {tarjetasNosotros.map((tarjeta) => <TarjetaNosotros
              key={tarjeta.titulo}
              {...tarjeta}
              link={tarjeta.link ? {
                href: 'https://bazardemagia.com/contacto/',
                label: tarjeta.link,
              } : undefined}
            />)}
          </div>
        </section>

        <section className="seccion-contenido seccion-trucos" id="trucos">
          <h2 className="titulo-seccion">TRUCOS EN DESARROLLO</h2>
          <p className="introduccion-seccion">Inspirándonos en los legendarios mecanismos de magia electrónica pionera de Anverdi que nos presentaron los expertos de Bazar de Magia, actualmente nos encontramos desarrollando los siguientes efectos:</p>
          <div className="card-grid">
            {trucos.map((truco) => <TarjetaTruco key={truco.titulo} {...truco} />)}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
