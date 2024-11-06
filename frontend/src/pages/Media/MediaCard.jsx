import React from 'react'

const MediaCard = ({img}) => {
  return (
    <div>
        <div className='h-44 bg-zinc-200'>
            <img className='w-full h-full object-cover' src={img} alt="" />
        </div>
        <div className='p-3'>
            <h4 className='font-semibold'>Aeneam Aliquet sapien</h4>
            <p className='text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio animi quam distinctio fugit in ut optio ipsa voluptates suscipit!</p>
        </div>
    </div>
  )
}

export default MediaCard