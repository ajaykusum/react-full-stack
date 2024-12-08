import React, { useEffect,useState } from 'react'
import axios from 'axios';
import NewsCard from '../../components/Utils/NewsCard'
import Headline from './Headline';
import FeaturedCard from './FeaturedCard';
import FilterOption from '../../components/Utils/FilterOption';
import TreadingNews from './TreadingNews';
import newsData from './newsData.json'

const newsCategories = ["World", "Local", "Politics", "Business", "Technology", "Health", "Science", "Sports", "Entertainment", "Lifestyle", "Education", "Environment", "Opinion", "Weather", "Crime",
];

const treadingNewsData = [
    {
        views: '123k',
        heading: 'Breaking News: Market Hits Record High',
        tags: ['Finance', 'Market'],
        img: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    },
    {
        views: '98k',
        heading: 'Tech Giants Announce New Innovations',
        tags: ['Technology', 'Innovation'],
        img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    }
];


const featuredNewsData = [
    {
        heading: "Global Market Trends",
        img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
        source: "BBC",
        time: "15 min ago",
    },
    {
        heading: "Tech Innovations 2024",
        img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
        source: "CNN",
        time: "30 min ago",
    },
    {
        heading: "Health Breakthroughs",
        img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
        source: "Reuters",
        time: "1 hour ago",
    },
    {
        heading: "Art and Culture",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        source: "The Guardian",
        time: "2 hours ago",
    },
    {
        heading: "Political Updates",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        source: "Al Jazeera",
        time: "3 hours ago",
    },
    {
        heading: "Environmental News",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        source: "BBC",
        time: "4 hours ago",
    },
    {
        heading: "Sports Highlights",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        source: "ESPN",
        time: "5 hours ago",
    },
    {
        heading: "Business Insights",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        source: "Bloomberg",
        time: "6 hours ago",
    },
    {
        heading: "Science Discoveries",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        source: "Nature",
        time: "7 hours ago",
    },
    {
        heading: "Travel Tips",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        source: "Lonely Planet",
        time: "8 hours ago",
    },
    {
        heading: "Fashion Trends",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        source: "Vogue",
        time: "9 hours ago",
    },
    {
        heading: "Food and Recipes",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        source: "Food Network",
        time: "10 hours ago",
    }
];

const headlines = [
    {
        img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
        heading: "Global Market Trends",
        tags: ["Finance", "Market"],
        views: "1.2K",
        time: "2 hours ago",
    },
    {
        img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
        heading: "Tech Innovations 2024",
        tags: ["Technology", "Innovation"],
        views: "900",
        time: "5 hours ago",
    },
    {
        img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
        heading: "Health Breakthroughs",
        tags: ["Health", "Science"],
        views: "1.5K",
        time: "1 day ago",
    },
    {
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        heading: "Art and Culture",
        tags: ["Art", "Culture"],
        views: "800",
        time: "3 days ago",
    },
    {
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        heading: "Political Updates",
        tags: ["Politics"],
        views: "1.1K",
        time: "1 week ago",
    },
    {
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        heading: "Environmental News",
        tags: ["Environment"],
        views: "2K",
        time: "2 weeks ago",
    }
];



const News = () => {
    const [newsd, setNewsd] = useState("");
    const getNewsd =async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/getnewsd");
            setNewsd(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    }
    useEffect(()=>{
        getNewsd()
    },[]);
    return (
        <div className='max-w-screen-xl m-auto'>
            <section className='mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>
                <TreadingNews
                    heading={treadingNewsData[0].heading}
                    img={treadingNewsData[0].img}
                    views={treadingNewsData[0].views}
                    tags={treadingNewsData[0].tags}
                />

                <TreadingNews
                    heading={treadingNewsData[1].heading}
                    img={treadingNewsData[1].img}
                    views={treadingNewsData[1].views}
                    tags={treadingNewsData[1].tags}
                />
            </section>

            <section className="mb-12">
                <h3 className='font-semibold text-lg my-4'>{newsd.data}Today's Headlines</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        headlines.map((e, index) => (
                            <Headline
                                key={index}
                                img={e.img}
                                heading={e.heading}
                                tags={e.tags}
                                views={e.views}
                                time={e.time}
                            />
                        ))
                    }
                </div>

            </section>

            <section className="mb-12">
                <h3 className='font-semibold text-lg my-4'>Featured News</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6'>
                    {
                        featuredNewsData.map((e, index) => (
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

            <section className="mb-12">
                <h3 className='font-semibold text-lg my-4'>All News</h3>
                <FilterOption items={newsCategories} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        newsData.map((e, index) => (
                            <NewsCard
                                img={e.img}
                                headline={e.headline}
                                content={e.content}
                                source={e.source}
                                sourceLogo={e.sourceLogo}
                                time={e.time}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default News