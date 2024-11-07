import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
import NewsCard from '../../components/Utils/NewsCard';
import Service from '../../components/Service/Service';
import TeamMember from '../../components/TeamMember/TeamMember';
import Contact from '../../components/Contact/Contact';
import Notification from '../../components/Notification/Notification';
import Events from '../../components/Events/Events';
import star from '../../assets/star.png';
import newsData from '../News/newsData.json'


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/user/');
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <div>
        <h3 className='flex items-center justify-center gap-1 font-bold text-xl text-slate-900 my-6'>
          Trending Highlights
          <img className='w-8' src={star} alt="" />
        </h3>
        <div className='max-w-screen-xl flex justify-center m-auto gap-4 pb-12 h-fit'>
          <div>
            <h3 className='font-semibold text-indigo-500 mb-2'>Notifications</h3>
            <Notification />
          </div>
          <div>
            <h3 className='font-semibold text-indigo-500 mb-2'>Events</h3>
            <Events />
          </div>
        </div>
      </div>
      <Service />
      <TeamMember />

      <div className='max-w-screen-xl m-auto'>
        <h4 className='text-indigo-600 font-semibold text-center'>Latest News</h4>
        <h3 className='flex items-center justify-center gap-1 font-bold text-xl text-slate-900'>
          What is happening
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {newsData.slice(0, 10).map((e, index) => (
            <NewsCard
              key={index}
              content={e.content}
              img={e.img}
              sourceLogo={e.sourceLogo}
              source={e.source}
              time={e.time}
              headline={e.headline}
            />
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Home;
