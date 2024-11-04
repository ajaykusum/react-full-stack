import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
import NewsCard from '../../components/Utils/NewsCard';
import UserCard from '../../components/Utils/UserCard';
import CourseCard from '../../components/Utils/CourseCard';
import Service from '../../components/Service/Service';
import TeamMember from '../../components/TeamMember/TeamMember';
import { AnimatedListDemo } from '../../components/Notification/Notification';

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

  const headline = 'Covid-19 JN.1 variant updates: India sees 22 cases'
  const thumbnail = 'https://th.bing.com/th/id/OIP.RnIbppBvRzP3AelmXcdyCgHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam! Sit eveniet ut est aut impedit et, maiores quos vel.'
  const sourceLogo = 'https://cdn.freelogovectors.net/wp-content/uploads/2021/12/hindustan-times-logo-freelogovectors.net_.png'
  const source = 'Hindustan Times';
  const time = '14 hrs ago'
  return (
    <>
      <Hero />
      <Service />
      <TeamMember />
      <AnimatedListDemo/>
      <UserCard
        userName={'Abhijeet Singh'}
        content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam quod, a et necessitatibus atque? Ipsa quos maxime eius odit.'}
        tags={['lorem', 'ipsum', 'dolor']}
        img={'https://as1.ftcdn.net/v2/jpg/06/05/11/12/1000_F_605111295_QyQY4Tk7bv8789bFA0TgGKeTM4zzowdo.jpg'}
      />
      <CourseCard
        img={'https://user-images.githubusercontent.com/52977034/212036784-9ea937a6-f6d7-4d1f-8acf-f2975ff7ab5c.png'}
        courseTitle={'Course Title'}
        couseDescription={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, quibusdam.'}
        rating={'4.2'}
        review={'2.5k'}
        badge={'offer 20%'}
      />

      <h4 className='ml-4 text-indigo-600 font-semibold'>Latest News</h4>
      <h3 className='ml-4 flex items-center gap-1 font-bold text-xl text-slate-900'>
        What is happening
      </h3>

      <div className='flex gap-2 p-4 flex-wrap'>
        {users.map((user, index) => (
          <NewsCard
            key={index}
            content={content}
            thumbnail={thumbnail}
            sourceLogo={sourceLogo}
            source={source}
            time={time}
            headline={headline}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
