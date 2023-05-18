import logo from '../images/logo.png'
import { SectionLinks } from './SectionLinks';
import '../App.css'
import { SectionSocial } from './SectionSocial';
import { sociales } from '../data/data';


const NavBar = () => {
    
    return(
        <>
        <nav className="navbar">

      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <SectionLinks parentClass= {'nav-links'} itemClass={'nav-link'}/>
        <ul className='nav-icons'>
            {
                sociales.map((social) => {
                    return(
                        <SectionSocial key={social.id} social={social.link}></SectionSocial>
                    );
                })
            }
        </ul>
        
      </div>
    </nav>
        </>
        
    );
} 
export default NavBar;