import { iconList, linkList } from '../data/list_of_links';

function Footer() {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {linkList.map((link) => {
          return (
            <li>
              <a href={'#' + link} className='footer-link'>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {iconList.map((icon, index) => {
          return (
            <li key={index}>
              <a
                href={icon.href}
                rel='noreferrer'
                target='_blank'
                className='footer-icon'
              >
                <i className={'fab ' + icon.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
