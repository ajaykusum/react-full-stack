import React from 'react'
import Bento from './Bento'
import FeaturedCard from '../News/FeaturedCard';
import Banner from './Banner';
import MediaCard from './MediaCard';

const imgPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=img";
const vidPlacehoder = "https://imageplaceholder.net/600x400/eeeeee/cbd5e1?text=video";

const featuredCardsData = [
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    heading: 'Global Market Trends',
    source: 'BBC',
    time: '15 min ago'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    heading: 'Tech Innovations 2024',
    source: 'CNN',
    time: '30 min ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    heading: 'Health Breakthroughs',
    source: 'Reuters',
    time: '1 hour ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    heading: 'Art and Culture',
    source: 'The Guardian',
    time: '2 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    heading: 'Political Updates',
    source: 'Al Jazeera',
    time: '3 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    heading: 'Environmental News',
    source: 'BBC',
    time: '4 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    heading: 'Sports Highlights',
    source: 'ESPN',
    time: '5 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    heading: 'Business Insights',
    source: 'Bloomberg',
    time: '6 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    heading: 'Science Discoveries',
    source: 'Nature',
    time: '7 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    heading: 'Travel Tips',
    source: 'Lonely Planet',
    time: '8 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    heading: 'Fashion Trends',
    source: 'Vogue',
    time: '9 hours ago'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    heading: 'Food and Recipes',
    source: 'Food Network',
    time: '10 hours ago'
  }
];

const mediaCardsData = [
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    title: 'How to Design a Website',
    description: 'A comprehensive guide to designing a modern website.'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    title: 'Introduction to Machine Learning',
    description: 'Learn the basics of machine learning and its applications.'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    title: 'Healthy Eating Habits',
    description: 'Tips and tricks for maintaining a healthy diet.'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    title: 'Traveling on a Budget',
    description: 'How to travel the world without breaking the bank.'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    title: 'Mastering Photography',
    description: 'Techniques and tips for taking stunning photos.'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    title: 'Yoga for Beginners',
    description: 'An introduction to yoga and its benefits.'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    title: 'Investing in Stocks',
    description: 'A beginner\'s guide to investing in the stock market.'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    title: 'Cooking Italian Cuisine',
    description: 'Learn how to cook authentic Italian dishes.'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    title: 'Building a Startup',
    description: 'Steps to take when starting your own business.'
  },
  {
    img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    title: 'Learning a New Language',
    description: 'Effective methods for learning a new language.'
  },
  {
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    title: 'Fitness Routines',
    description: 'Workout routines to keep you fit and healthy.'
  },
  {
    img: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg',
    title: 'Understanding Cryptocurrency',
    description: 'An overview of cryptocurrency and how it works.'
  }
];


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
            {
              featuredCardsData.map((e, index) => (
                <FeaturedCard
                  key={index}
                  img={e.img}
                  heading={e.heading}
                  source={e.source}
                  time={e.time}
                />
              ))
            }
          </div>
        </section>
        <section>
          <h3 className='font-semibold text-lg my-4'>Video Catalog</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6'>
            {
              mediaCardsData.map((e, index) => (
                <MediaCard
                  key={index}
                  img={e.img}
                  title={e.title}
                  description={e.description}
                />
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Media