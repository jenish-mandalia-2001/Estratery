import React,{ useContext } from 'react';
import Search from '../components/Search';
import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const Banner = () => {
  const { handleSearch } = useContext(HouseContext);

  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-10'>
      <div className='flex flex-col lg:flex-row'>
        <div className='max-w-[1170px] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <div className='tagLine flex items-center w-full'>
            <h1 className='text-4xl lg:text-[45px] font-semibold leading-none'>
              <span className='text-black-700'>Search properties to rent</span>
            </h1>
            <div className='searchField'>
              <input type='text' placeholder='Search with Search Bar' onChange={(e) => handleSearch(e.target.value)} />
              <span className='searchIcon'><RiSearch2Line /></span>
            </div>
          </div>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
