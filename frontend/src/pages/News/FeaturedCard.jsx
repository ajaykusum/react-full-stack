import React from 'react'

const FeaturedCard = ({img}) => {
    return (
        <div className='max-w-xs'>
            <div className='bg-slate-200 rounded overflow-hidden w-full h-36 mb-2'>
                <img className='w-full h-full object-cover' src={img} alt="thumbnail" />
            </div>
            <div className='flex gap-2'>
                <h4 className='font-semibold text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing!</h4>
                <div className='flex flex-col items-end'>
                    <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded whitespace-nowrap'>hindustan times</span>
                    <div className='text-slate-500 text-sm'>
                        15 min ago
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard