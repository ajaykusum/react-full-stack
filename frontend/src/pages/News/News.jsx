import React from 'react'
import NewsCard from '../../components/Utils/NewsCard'


const News = () => {
    const data = [];
    const headline = 'Covid-19 JN.1 variant updates: India sees 22 cases'
    const thumbnail = 'https://th.bing.com/th/id/OIP.RnIbppBvRzP3AelmXcdyCgHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam! Sit eveniet ut est aut impedit et, maiores quos vel.'
    const sourceLogo = 'https://cdn.freelogovectors.net/wp-content/uploads/2021/12/hindustan-times-logo-freelogovectors.net_.png';
    const source = 'Hindustan Times';
    const time = '14 hrs ago';

    for (let i = 0; i < 10; ++i) {
        data.push(
            <NewsCard
                key={i}
                content={content}
                thumbnail={thumbnail}
                sourceLogo={sourceLogo}
                source={source}
                time={time}
                headline={headline}
            />
        );
    }
    return (
        <div className='flex gap-2 flex-wrap max-w-screen-xl m-auto'>
            {data}
        </div>
    )
}

export default News