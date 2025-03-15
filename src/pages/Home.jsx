import React from 'react'
import HeroContainer from '../components/Hero/HeroContainer'
import NavBar from "../components/NavBar";
import aboutImage from "../assets/images/about-images/about-image.svg"
import CardContainer from '../components/Cards/CardContainer'
import Button from '../components/Button'
import Form from '../components/Contact/Form'
import AnimatedCounter from '../components/AnimatedCounter'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import Project from '../components/Project'
import logo from "../assets/icons/cupti-logo.svg"

function Home() {
  return (
    <div>
      <header>
        <NavBar/>
        <HeroContainer />
      </header>
      <main>
        <section className='services container'>
            <h4 className='title text-center'>Nuestros servicios</h4>
            <CardContainer />
        </section>

        <section className='container'>
          <div className='about container--row'>
            <img className='about-image' src={aboutImage} alt="about-image.svg" />
            <div className='about-container wrapper container--justify-center container--column'>
              <h4 className='subheading'>Quienes Somos</h4>
              <div className='about-text container--column'>
                <p>Somos una empresa cooperativa dedicada a brindar servicios y consultoría en variadas áreas de la Ingeniería.</p>
                <p>CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de Ingeniería de la Universidad de la República.</p>
                <p>Desde su fundación a la actualidad se han venido incorporando nuevos socios así como también nuevas áreas de trabajo permitiendo crecer y desarrollarse.</p>
              </div>
              <Button content={"Contactarse"}/>
            </div>
          </div>
          <div className='experience container--center'>
            <AnimatedCounter endValue={10} label="Años de experiencia" />
            <AnimatedCounter endValue={100} label="Proyectos terminados" />
            <AnimatedCounter endValue={135000} label="ahorrados en todo el país" />
          </div>
        </section>


        <section className='opportunities container--column container'>
          <h4 className='title text-center'>Oportunidades para empresas</h4>
          <OpportunitiesContainer />
        </section>

        <section className='projects container'>
          <h4 className='title text-center'>Proyectos Destacados</h4>
          <div className='projects-container container--column wrapper'>
            <Project 
              title="Aerogenerador Darrieus"
              description="Prototipo construido en 2013 en Facultad de Ingeniería UdelaR."
            />
            <Project 
              title="Copagran"
              description="Auditoria Energética realizada en planta de Young departamento de Rio Negro."
            />
            <Project 
              title="CTC"
              description="Auditoria energética realizada en la planta de fabricación de productos cerámicos de empalme Olmos."
            />
            <Project 
              title="FUNSA"
              description="Auditoria Energética en planta de fabricación de cubiertas de FUNSA."
            />
            <Project 
              title="Escultura en Movimiento instalada en el LATU"
              description="Escultura dotada con movimiento relativo entre sus módulos."
            />
          </div>
        </section>
      </main>
      
      <footer className='footer'>
        <div className='footer-container container'>
          <h4 className='subheading text-center'>¿Cómo te podemos ayudar?</h4>
          <div className='footer-main wrapper container--row'>
            <div className='footer-info container--column'>
              <img className='footer-logo' src={logo} alt="cupti-logo.svg" />
              <p>En CUPTI realizamos proyectos a la medida de tus necesidades.</p>
              <p>Por consultas sobre nuestros servicios, productos o presupuestos no dudes en ponerte en contacto con nosotros a través del formulario, vía mail o por teléfonos.</p>
              <div className='footer-contact'>
                <span>
                  <img src={null} alt="" />
                  <p>info@cupti.com</p>
                </span>
                <span>
                  <img src={null} alt="" />
                  <p>091 529 737</p>
                </span>
              </div>
            </div>
            {/* Form */}
            <Form />
          </div>
          <div className='footer-copy container--between wrapper'>
            <h1>Cooperativa Uruguaya de Producción Trabajo e Ingeniería</h1>
            <span>&copy; CUPTI 2025</span>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Home
