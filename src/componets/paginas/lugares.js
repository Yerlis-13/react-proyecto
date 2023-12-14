import React from 'react'
import './lugares.css';

function lugares() {
  return (
    <>
    <header class="header">
        <div class="redopacity">
            <h1>Inicio</h1>
        </div>
    </header>
<div class="title-section">
    <hr />
</div>
<section class="produccion">
    <article class="produccion-item">
     
    <img className='img'/>
        <p/>
          Estados Unidos
        
        <a href="" class="btn-default">Ven Para Que Lo Conozcas</a>
        
    </article>

    <article class="produccion-item">
    <img className='img1'/>
        <p>
            Inglaterra
        </p>
        <a href="" class="btn-default">Ven Para Que Lo Conozcas</a>
        
    </article>

    <article class="produccion-item">
        <img className='img2'/>
        <p/>
            Brazil
            
        <a href="" class="btn-default">Ven Para Que Lo Conozcas</a>
    </article>

    
</section>
</>
  )
}

export default lugares