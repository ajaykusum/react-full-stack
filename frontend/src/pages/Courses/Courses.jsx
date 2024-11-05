import React from 'react'
import CourseCard from '../../components/Utils/CourseCard'
import star from '../../assets/star.svg';
import starMuted from '../../assets/star_muted.svg';
const Card1 = () => {
  return (
    <div className='max-w-xs'>
      <div className='h-40'>
        <img className='w-full h-full object-cover' src="" alt="" />
      </div>
      <div>
        <h4 className='font-semibold'>Lorem, ipsum dolor.</h4>
        <p className='text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ratione.</p>
        <div className='flex items-center gap-1'>
          <div className='font-semibold text-sm'>4.7</div>
          <div className='flex gap-1'>
            <img className='w-4' src={star} alt="" />
          </div>
        </div>
        <div className='flex gap-1'>
          <span className='font-bold'>₹{499}</span>
          <span className='text-slate-500 line-through'>₹{799}</span>
        </div>
      </div>
    </div>
  )
}
const Courses = () => {

  return (
    <div className='grid gap-2 grid-cols-3 m-auto max-w-screen-xl'>
      <Card1 />
      <CourseCard
        courseTitle={'Course Title'}
        couseDescription={'couse Description'}
        img={''}
        badge={''}
        review={'1.2k'}
        rating={'4.5'}
      />
    </div>
  )
}

export default Courses