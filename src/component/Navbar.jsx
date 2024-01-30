import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constant';
import {logo,menu,close} from '../asset';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  
  const handleLinkClick = (title) => {
    setActive(title); 
    setToggle(false); 
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white font-bold cursor-pointer flex'>Batuk Sharma &nbsp;</p>
        </Link>
        {/* Hamburger menu icon for mobile */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-8 h-8 sm:hidden cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {/* Mobile menu */}
        <ul className={`${toggle ? 'flex' : 'hidden'} sm:hidden flex-col gap-4 absolute top-20 right-0 mx-4 my-2 p-6 black-gradient z-10 rounded-xl`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link.title)} // Use the handleLinkClick function
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins  font-medium cursor-pointer text-[16px]`}
              onClick={() =>{
                setToggle(!toggle);
                setActive(link.title)}}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
