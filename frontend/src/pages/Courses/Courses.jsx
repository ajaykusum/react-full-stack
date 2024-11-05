import React from 'react'
import CourseCard from '../../components/Utils/CourseCard'
import star from '../../assets/star.svg';
import semiStar from '../../assets/half-star.svg';
import Stars from '../../components/Utils/Stars';
import Headline from '../News/Headline';

const Review = () => {
  return (
    <div className='p-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='w-12 h-12 rounded-full bg-zinc-500 text-xl font-bold grid place-items-center text-white'>
            AK
          </div>
          <div>
            <strong className='font-semibold'>Abhijeet Kumar</strong>
            <div>
              <Stars rating={3.2} />
            </div>
          </div>
        </div>
        <i className="uil uil-ellipsis-v"></i>
      </div>
      <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod ut reiciendis aperiam! Quasi deleniti soluta nisi, exercitationem totam obcaecati.</p>
    </div>
  )
}

const Card1 = () => {
  return (
    <div className='w-full max-w-xs'>
      <div className='h-32 bg-slate-300'>
        <img className='w-full h-full object-cover' src="" alt="Course" />
      </div>
      <div className='p-4'>
        <h4 className='font-semibold'>Lorem, ipsum dolor.</h4>
        <p className='text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, ratione.</p>
        <div className='flex items-center gap-1 mt-2'>
          <div className='font-semibold text-sm'>4.7</div>
          <Stars rating={4.2} />
        </div>
        <div className='flex gap-1 mt-2'>
          <span className='font-bold'>₹{499}</span>
          <span className='text-slate-500 line-through'>₹{799}</span>
        </div>
      </div>
    </div>
  )
}



const Courses = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <section className='mb-20'>
        <h2 className='text-2xl font-bold mb-4'>Course Category</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
          <Headline/>
          <Headline/>
          <Headline/>
          <Headline/>
          <Headline/>
          <Headline/>
        </div>
      </section>

      <section className='mb-20'>
        <h2 className='text-2xl font-bold mb-4'>Courses</h2>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>

      </section>
      <section>
        <h2 className='text-2xl font-bold mb-4'>Reviews</h2>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </section>
    </div>
  );
}


export default Courses