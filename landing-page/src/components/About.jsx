import about from '../images/about.jpg'
import Title from './Title';

const About = () => {
    return(
        <section className="section" id="about">
          <Title title='Jefe de' subTitle='Carrera' ></Title>
      

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={about}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>Alexis Marechal Ph.D.</h3>
          <p>
          Bachelor, Maestría y Doctorado (PhD) en informática en la Universidad de Ginebra, Suiza. 
          Doctorado obtenido en 2013.Ganador de la beca Patiño para bachilleres bolivianos en 2002 
          (5 seleccionados entre más de 200 candidatos en toda Bolivia).
          
          </p>
          <p>
          Autor de más de una decena de artículos en conferencias y revistas internacionales, 3 de ellos en revistas indexadas.
          Docente búho de la facultad de Ingenierías y Arquitectura en la UPB – sede La Paz, en los años 2016, 2017 y 2019.
          </p>
          <a href="#" className="btn">Beneficios de la carrera</a>
        </article>
      </div>
    </section>

    );
}
export default About;