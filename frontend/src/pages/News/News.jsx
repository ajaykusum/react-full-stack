import React from 'react'
import NewsCard from '../../components/Utils/NewsCard'
import Headline from './Headline';
const TreadingNews = () => {
    return (
        <div className='w-full'>
            <h3 className='font-semibold text-lg my-4'>Trending</h3>
            <div className='bg-slate-100 rounded-lg overflow-hidden'>
                <div className='h-72 bg-slate-300 rounded-lg'>
                    <img className='w-full h-full object-cover' src="" alt="Trending News" />
                </div>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-[2px] text-slate-500'>
                            <i className="text-lg uil uil-history"></i>
                            <span>123k</span>
                        </div>
                        <div className='flex gap-1 mb-2'>
                            <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                            <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                            <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded'>#tag</span>
                        </div>
                    </div>
                    <h2 className='font-bold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, eligendi.</h2>
                </div>
            </div>
        </div>
    );
}



const FeaturedCard = () => {
    return (
        <div className='max-w-xs'>
            <div className='bg-slate-200 rounded-lg w-full h-36 mb-2'>
                <img className='w-full h-full object-cover' src="./" alt="thumbnail" />
            </div>
            <div className='flex gap-2'>
                <h4 className='font-semibold text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing!</h4>
                <div className='flex flex-col items-end'>
                    <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded whitespace-nowrap'>hindustan times</span>
                    <div className='text-slate-500 text-sm'>
                        15 min ago
                    </div>
                </div>
            </div>
        </div>
    );
}
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
    const headlines = [];
    for (let i = 0; i < 6; ++i) {
        headlines.push(<Headline key={i} />)
    }
    const featuredCards = [];
    for (let i = 0; i < 6; ++i) {
        featuredCards.push(<FeaturedCard key={i} />)
    }
    return (
        <div className='max-w-screen-xl m-auto'>
            <section className='mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>
                <TreadingNews />
                <TreadingNews />
            </section>

            <section className="mb-20">
                <h3 className='font-semibold text-lg my-4'>Today's Headlines</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {headlines}
                </div>

            </section>

            <section className="mb-20">
                <h3 className='font-semibold text-lg my-4'>Featured News</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {featuredCards}
                </div>
            </section>

            <section className="mb-20">
                <h3 className='font-semibold text-lg my-4'>All News</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {data}
                </div>

            </section>
        </div>
    )
}

export default News