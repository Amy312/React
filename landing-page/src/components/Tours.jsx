import { tours } from '../data/data'

import Tour from './Tour'

const Tours = () => {
    return(
        <section className="section" id="tours">
      <div className="section-title">
        <h2>Carreras <span>DTI</span></h2>
      </div>

      <div className="section-center featured-center">

      {tours.map((tour) => {
          return <Tour {...tour} key={tour.id}/>
        })}

        

        

        

        
      </div>
    </section>
    );
}
export default Tours;