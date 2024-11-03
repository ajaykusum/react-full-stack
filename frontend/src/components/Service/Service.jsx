import React from 'react'
import rocket from '../../assets/rocket.webp';
import icon24 from '../../assets/24icon.svg';
import heart from '../../assets/heart.svg';
import leaf from '../../assets/leaf.svg';
import badge from '../../assets/badge.svg';
import ticket from '../../assets/ticket.png';
import bagpack from '../../assets/bagpack.png';
import earth from '../../assets/planet-earth.png';
import tropicalLeaf from '../../assets/tropical-leaves.png';

const Card = ({ icon, title, content }) => {
    return (
        <div>
            <div className="border-2 border-slate-200 flex items-center p-2 mb-4 w-12 h-w-12 justify-center rounded-xl bg-gradient-to-br from-[#cacaca] to-[#f0f0f0] shadow-[10px_10px_40px_#c3c3c3,-20px_-20px_40px_#fdfdfd]">
                <img src={icon} alt="icon" />
            </div>
            <p className='font-semibold'>{title}</p>
            <p className='text-slate-600'>{content}</p>
        </div>
    )
}

const Service = () => {
    const data = [
        {
            icon: bagpack,
            title: 'Lots of choice',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit!',
        },
        {
            icon: ticket,
            title: 'Easy Booking',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit!',
        },
        {
            icon: earth,
            title: 'World Wild',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit!',
        },
    ];
    return (
        <div className='relative py-16'>
            <img className='absolute z-10 w-10 to-20 right-20' src={tropicalLeaf} alt="" />
            <div className='absolute dotted-background-light z-0 top-0 left-0 w-full h-full'></div>
            <div className='relative z-1 max-w-screen-xl m-auto'>
                <h4 className='text-indigo-600 font-semibold'>What we Serve</h4>
                <h3 className='flex items-center gap-1 font-bold text-xl text-slate-900'>
                    What will you get?
                    <img className='w-10' src={rocket} alt="" />
                </h3>
                <p className='text-slate-600 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, tempora!</p>

                <div className='flex gap-2'>
                    {
                        data.map(({ icon, title, content }, index) => (
                            <Card
                                icon={icon}
                                title={title}
                                content={content}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service