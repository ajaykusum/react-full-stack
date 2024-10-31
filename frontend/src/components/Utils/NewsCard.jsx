import React from 'react';

const NewsCard = ({ headline, content, source, sourceLogo, time, thumbnail }) => {
    return (
        <div className='bg-slate-100 shadow-md max-w-md rounded-sm p-4 m-4'>
            <div className="flex gap-4">
                <div className="w-2/3">
                    <h3 className='font-semibold text-lg'>{headline}</h3>
                    <p className='text-base text-slate-600 overflow-hidden h-20'>
                        {content}
                    </p>
                </div>
                <div className='w-1/3 bg-indigo-300'>
                    <img src={thumbnail} alt="" />
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex gap-2 items-center'>
                    <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                        <img
                            src={sourceLogo}
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className='font-semibold'>{source}</p>
                </div>
                <div className='text-sm text-slate-500'>{time}</div>
            </div>
        </div>
    );
}

export default NewsCard;
