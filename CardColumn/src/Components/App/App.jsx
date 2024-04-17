import React from 'react'
import './App.css'
import Card from '../Cards/Card'
import img1 from '../../images/sedans.svg'
import img2 from '../../images/suvs.svg'
import img3 from '../../images/luxury.svg'


const App = () => {
  return(
    <>
    <section className='container'>
    <div className="card1">
       <Card
       imagem={img1}
       text="SEDANS"
       footer="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
       btnText="Learn More"/>
    </div>

    <div className='card2'>
       <Card
       imagem={img2}
       text="SUVS"
       footer="Take on an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
       btnText="Learn More"/>
    </div>

    <div className='card3'>
       <Card
       imagem={img3}
       text="LUXURY"
       footer="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
       btnText="Learn More" className='btn3'/>
    </div>
    </section>
    </>
  )
}

export default App