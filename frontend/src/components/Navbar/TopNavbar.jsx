import React from 'react'
import DropDown from '../Utils/Dropdown';
import Searchbar from '../Utils/Searchbar';

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
            <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-semibold text-2xl">Brand Name</span>

            <Searchbar/>
            <div className="flex gap-4 items-center">
                <DropDown options={options} />
                <button className="bg-indigo-500 hover:bg-indigo-400 rounded-md px-4 py-2 text-gray-50">
                    sign up
                </button>
            </div>
        </div>
    )
}

export default TopNavbar