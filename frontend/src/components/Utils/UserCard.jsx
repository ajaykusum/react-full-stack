import React from 'react'

const UserCard = () => {
    return (
        <div className='flex gap-4 p-4 bg-slate-200 rounded m-8'>
            <div className="flex-1 rounded bg-slate-400">
                user profile
            </div>
            <div className="flex-1 rounded bg-slate-40 0">
                <h3 className='font-semibold'>Zack Wilson</h3>
                <p className='text-slate-600 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quo cumque quia ex, voluptatem error impedit placeat consectetur in quidem.</p>

                <div className='flex gap-2 mb-4'>
                    <div className='w-max rounded px-1 border-2 border-slate-500 text-sm text-slate-900'>#tag</div>
                    <div className='w-max rounded px-1 border-2 border-slate-500 text-sm text-slate-900'>#UI/UX</div>
                </div>


                <div className='flex gap-2'>
                    <button className='flex-1 rounded px-8 py-2 border-2 border-slate-500 font-semibold text-sm text-slate-900'>More</button>
                    <button className='flex-1 rounded px-8 py-2 bg-indigo-500 font-semibold text-sm text-white'>Book Lecture</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard