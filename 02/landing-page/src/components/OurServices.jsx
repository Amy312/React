import { services } from "../data/data";
import Service from "./Service";
const OurServices = () => {
    return (
        <section className="section services" id="services">
      <div className="section-title">
        <h2>mercado <span>laboral</span></h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id}/>
        })}
      </div>
    </section>

    );
}
export default OurServices;