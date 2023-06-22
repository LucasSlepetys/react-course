import { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

export const useAppContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'Lucas',
  });

  const logOut = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logOut }}>
      <div className='navbar'>
        <h5>Context API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
