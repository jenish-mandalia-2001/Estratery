import React, { useState, useContext, useRef } from 'react';
import { RiCalendar2Line, RiCloseFill } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const MoveInDate = () => {
    const { date, setDate, isDefault } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    const dateref = useRef();
    const datetime = new Date().toISOString().substring(0,10);

    const icon = () => {
        return(isDefault(date) ? <RiCalendar2Line className='dropdown-icon-secondary' /> :
        <RiCloseFill className='dropdown-icon-secondary calendarIcon' onClick={() => setDate("Move In Date (any)")} />)
    }

    return (

        <Menu as='div' className='dropdown relative MoveInData'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left filterbtn'>
                <div>
                    <div className='text-[15px] font-medium leading-tight filterTagLine'>When</div>
                    <div className='text-[13px] font-semibold lg:text-[16px]'>{date}</div>
                </div>
                {icon()}
            </Menu.Button>
            <input ref={dateref} className='datepicker cursor-pointer' min={datetime} type='date' onChange={(e) => e.target.value == '' ? setDate("Move In Date (any)") : setDate(e.target.value)} />

        </Menu>
    );
};

export default MoveInDate;
