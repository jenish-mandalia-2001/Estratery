import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 p-5 houseinner w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-7' src={house.image} alt='' />
      <div className='text-lg font-semibold text-violet-600 mb-3 price flex items-center'>
        <div>
          $ {house.price} <span className='text-sm text-gray-600'>/ month</span>
          <p className='text-sm text-gray-600'>Available from {house.date}</p>
        </div>
        <div className='heartIcon'>
          <AiOutlineHeart />
        </div>
      </div>
      <div className='text-lg font-semibold text-black-600 mb-2'>
        {house.agent.name}
      </div>
      <div className='text-sm text-gray-600 houseAddress flex items-center'>{house.address}</div>
      <div className='flex gap-x-4 mt-2 mb-0 houseSpecification'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'><span>{house.bedrooms} Beds</span></div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'><span>{house.bathrooms} Bathrooms</span></div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'><span>{house.surface} m<sup>2</sup></span></div>
        </div>
      </div>

    </div>
  );
};

export default House;
