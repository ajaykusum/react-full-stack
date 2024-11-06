import React from 'react'
import Bento from './Bento'
import FeaturedCard from '../News/FeaturedCard';
import Banner from './Banner';
import MediaCard from './MediaCard';

let n = 12;
const imgPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=img";
const vidPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=video";
const featuredCards = [];
for (let i = 0; i < n; ++i) {
  featuredCards.push(<FeaturedCard key={i} img={imgPlacehoder}/>)
}

const mediaCards = [];
for (let i = 0; i < n; ++i) {
  mediaCards.push(<MediaCard key={i} img={vidPlacehoder}/>)
}

const Media = () => {
  return (
    <>
      <Banner />
      <div className='m-auto max-w-screen-xl'>
        <div className='h-[500px] my-8'>
          <Bento />
        </div>
        <section className="mb-20">
          <h3 className='font-semibold text-lg my-4'>Media</h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6'>
            {featuredCards}
          </div>
        </section>
        <section>
          <h3 className='font-semibold text-lg my-4'>Video Catalog</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6'>
            {mediaCards}
          </div>
        </section>
      </div>
    </>
  )
}

export default Media