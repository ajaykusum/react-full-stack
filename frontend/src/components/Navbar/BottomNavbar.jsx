import React from 'react'
import {Link} from 'react-router-dom';
const BottomNavbar = () => {
    const options = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'News Events',
            href: '/news',
        },
        {
            text: 'Courses',
            href: '/courses',
        },
        {
            text: 'Campaign',
            href: '/campaign',
        },
        {
            text: 'Media',
            href: '/media',
        },
        {
            text: 'Promotion',
            href: '/',
        },
        {
            text: 'Contact us',
            href: '/',
        },
    ]
    return (
        <div id="bottom-nav" className="p-2 flex justify-center bg-slate-200">
            <ul className="flex gap-4 font-semibold text-slate-700">
                {
                    options.map(({text, href})=>(
                        <li key={text} className='border-b-2 text-sm hover:border-indigo-300 transition duration-300'>
                            <Link to={href}>{text}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BottomNavbar