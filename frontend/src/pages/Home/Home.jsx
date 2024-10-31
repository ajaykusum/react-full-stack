import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero';
import NewsCard from '../../components/Utils/NewsCard';

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
  const thumbnail='https://th.bing.com/th/id/OIP.RnIbppBvRzP3AelmXcdyCgHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam! Sit eveniet ut est aut impedit et, maiores quos vel.'
  const sourceLogo = 'https://cdn.freelogovectors.net/wp-content/uploads/2021/12/hindustan-times-logo-freelogovectors.net_.png'
  const source = 'Hindustan Times';
  const time = '14 hrs ago'
  return (
    <>
      <Hero />

      <div className='flex gap-2 p-4 flex-wrap'>
        {users.map((user) => (
          <NewsCard 
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
