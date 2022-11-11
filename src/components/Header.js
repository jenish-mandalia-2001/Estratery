import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <header className='py-6 border-b bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex item-center'>

          <div className='flex'>
            <img src={Logo} alt='' />
          </div>

          <div>
            <ul className='flex item-center menu'>
              <li className='active'><a href=''> Rent </a></li>
              <li><a href=''> Buy </a></li>
              <li><a href=''> Sell </a></li>
              <li><a href=''> Manage Property <span><IoIosArrowDown/></span> </a></li>
              <li><a href=''> Resources <span><IoIosArrowDown/></span> </a></li>
            </ul>
          </div>

        </div>
        
        <div className='flex items-center gap-6'>
          <Link className='bg-white-700 hover:bg-white text-violet px-4 py-3 rounded-lg transition loginbtn' to='/'>
            Log in
          </Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/'>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
