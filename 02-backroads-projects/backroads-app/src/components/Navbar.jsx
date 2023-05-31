import img_logo from '../images/logo.svg';
import { iconList, linkList } from '../data/list_of_links';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={img_logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {linkList.map((link) => {
            return (
              <li>
                <a href={'#' + link} className='nav-link'>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {iconList.map((icon, index) => {
            return (
              <li key={index}>
                <a
                  href={icon.href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={'fab ' + icon.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
