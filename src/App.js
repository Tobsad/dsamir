import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <header>
        <nav>
            <div class="logo">
                <a href="/"><img src="/logo192.png"  alt="logo"/></a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/nosotros/">Nosotros</a></li>
                    <li><a href="/asesoria/">Asesoria</a></li>
                    <li><a href="/marketing/">Marketing</a></li>
                    <li><a href="/contacto/">Contacto</a></li>
                </ul>
            </div>
        </nav>
    </header>

      {/* Sección de imagen de presentación */}
      <section className="imagen-presentacion">
        <div className="presentation-text">
            <h1>Consultora IT Perú</h1>
            <p>Descubre nuestros productos y servicios de alta calidad y se el ñunete al mundo tecnológico.</p>
            <a href="#">Ver más</a>
        </div>
      </section>

      {/* Sección de 4 cards con información */}
      <section className="cards-seccion">
        <div className="cards-container">
          <div className="card">
            <img src="/logo512.png" alt="Imagen 1" />
            <h2>Título de la card 1</h2>
            <p>Texto de la card 1</p>
          </div>
          <div className="card">
            <img src="/logo512.png" alt="Imagen 2" />
            <h2>Título de la card 2</h2>
            <p>Texto de la card 2</p>
          </div>
          <div className="card">
            <img src="/logo512.png" alt="Imagen 3" />
            <h2>Título de la card 3</h2>
            <p>Texto de la card 3</p>
          </div>
          <div className="card">
            <img src="/logo512.png" alt="Imagen 4" />
            <h2>Título de la card 4</h2>
            <p>Texto de la card 4</p>
          </div>
        </div>
      </section>

      {/* Sección con mensaje destacado */}
      <section className="mensaje-seccion">
        <div className="mensaje-destacado">
          <h2>Mensaje destacado</h2>
          <p>Texto del mensaje destacado</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Derechos reservados © 2023</p>
      </footer>
    </div>
  );
}

export default App;
