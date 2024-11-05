import React from 'react'

const Headline = ({ }) => {
    return (
        <div className='flex gap-2 items-start bg-slate-100 p-2 rounded shadow-md'>
            <div className='rounded bg-gray-200 min-w-16 min-h-16 overflow-hidden'>
                <img className='w-full h-full object-cover' src="./" alt="" />
            </div>
            <div>
                <h4 className='font-semibold'>Lorem ipsum dolor sit</h4>
                <div className='flex gap-1 mb-2'>
                    <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                    <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                    <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                </div>
                <div className="text-sm text-slate-500 flex justify-between items-center">
                    <div className='flex items-center gap-[2px]'>
                        <i className="text-lg uil uil-eye"></i>
                        <span>123k</span>
                    </div>
                    <div>
                        15 min ago
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Headline