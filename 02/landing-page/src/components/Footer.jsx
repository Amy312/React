import { FooterLinks } from './FooterLinks';
import { sociales } from '../data/data';
import { SectionFooter } from './SectionFooter';
import { SectionLinks } from './SectionLinks';
import { SectionSocial } from './SectionSocial';

const Footer = () => {
    return(
        <footer className="section footer">
          <SectionLinks parentClass = 'footer-links' itemClass= 'footer-link'/>
      <FooterLinks/>
      <ul className='footer-icons'>
            {
                sociales.map((link) => {
                    return(
                        <SectionSocial key={link.id} {...link} itemClass= 'footer-icon'/>
                    );
                })

            }
        </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    );
}
export default Footer;