import { footerLinks } from '../data/data'
export const FooterLinks = () => {
    return(
        <ul className="footer-links">
            {
                footerLinks.map(link => {
                    return(<li key= {link.id}>
                        <a href={`#${link.link}`} className="footer-link"> {link.link} </a>
                      </li>);
                })
            }
          
          
        </ul>
    );
}
