import React from 'react'
import DropDown from '../Utils/Dropdown';
import Searchbar from '../Utils/Searchbar';
const logo = 'https://icons.veryicon.com/png/o/miscellaneous/government-icon/social-public-welfare.png';

const TopNavbar = () => {
    const options = [
        {
            text: 'Edit',
            href: '#',
        },
        {
            text: 'Duplicate',
            href: '#',
        },
        {
            text: 'Archive',
            href: '#',
        },
        {
            text: 'Move',
            href: '#',
        },
        {
            text: 'Share',
            href: '#',
        },
        {
            text: 'Add to favorites',
            href: '#',
        },
        {
            text: 'Delete',
            href: '#',
        },
    ];

    return (
        <div id="top-nav" className="flex justify-between items-center bg-slate-50 px-4 py-2">
            <div className='flex gap-2 items-center'>
                <img className='w-12 h-12' src={logo} alt="" />
                <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-semibold text-2xl">
                    Social Welfare
                </span>
            </div>
            <p className='font-semibold tex-base text-slate-600'>न्याय और अवसर पहुचेंगे घर-घर</p>
            {/* <Searchbar/> */}
            <div className="flex gap-2 items-center">
                {/* <DropDown options={options} /> */}
                <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50">
                    log in
                </button>
                <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-[6px] text-gray-50">
                    Register
                </button>
            </div>
        </div>
    )
}

export default TopNavbar