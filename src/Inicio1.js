import React from 'react'
import './Inicio1.css';

function Inicio1() {
  return(
    <>

<header>
        <div class="container">
            <nav class="navbar">
                <div class="nav-left">
                    <a href="" class="brand">
                    
                    </a>
                    <ul class="menu">
                        <li class="navitem"><a href="#">Inicio</a></li>
                        <li class="navitem"><a href="#">Sobre Nosotros</a></li>
                        <li class="navitem"><a href="#">Servicios</a></li>
                        <li class="navitem"><a href="#">Contactos</a></li>
                        <li class="navitem"><a href="#">lugares</a></li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul class="menu">
                        <li><a href="#">Iniciar Sesión <i class="navitem"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <section>
   
        <div class="formLogin">
            <h1>Registrate</h1>
            <form action="">
                <div class="form-group">
                    <label for="id">Número de documento</label>
                    
                </div>
                <div class="form-group">
                    <label for="nombre">Nombre completo</label>
                    
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    
                </div>
                <button type="submit" class="btn btn-primary large">Registrate</button>
                <div class="form-group register-link">
                    <span>¿Ya tienes cuenta? </span>
                    <a href="register.html">Iniciar Sesión</a>
                </div>
            </form>
        </div>
    </section>
    </>

  )
}

export default Inicio1;