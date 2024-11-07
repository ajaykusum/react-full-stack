import React from 'react'
import CourseCard from '../../components/Utils/CourseCard'
import Stars from '../../components/Utils/Stars';
import Headline from '../News/Headline';
import FilterOption from '../../components/Utils/FilterOption';

const Review = ({img, rating, username, review }) => {
  return (
    <div className='p-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div className='w-12 h-12 overflow-hidden rounded-full bg-zinc-500 text-xl font-bold grid place-items-center text-white'>
            <img className='w-full h-full object-cover' src={img} alt="" />
          </div>
          <div>
            <strong className='font-semibold'>{username}</strong>
            <div>
              <Stars rating={rating} />
            </div>
          </div>
        </div>
        <i className="uil uil-ellipsis-v"></i>
      </div>
      <p className='text-slate-600'>{review}</p>
    </div>
  )
}

const Card1 = ({ heading, description, rating, price, lastPrice, img }) => {
  return (
    <div className='w-full max-w-xs shadow-lg rounded-lg overflow-hidden'>
      <div className='h-32 bg-slate-300'>
        <img className='w-full h-full object-cover' src={img} alt="Course" />
      </div>
      <div className='p-4'>
        <h4 className='font-semibold text-violet-600'>{heading}</h4>
        <p className='text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis'>{description}</p>
        <div className='flex items-center gap-1 mt-2'>
          <div className='font-semibold text-sm'>4.7</div>
          <Stars rating={rating} />
        </div>
        <div className='flex gap-1 mt-2'>
          <span className='font-bold'>{price}</span>
          <span className='text-slate-500 line-through'>{lastPrice}</span>
        </div>
      </div>
    </div>
  )
}


const filterOptions = [
  "Design",
  "Engineering",
  "Health Sciences",
  "Humanities and Arts",
  "Management",
  "School",
  "Science",
  "All",
];

const headingData = [
  {
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    heading: "Introduction to Design",
    views: "1.2K",
    tags: ["Design", "Beginner"],
    time: "2 hours ago",
  },
  {
    img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    heading: "Engineering Basics",
    views: "900",
    tags: ["Engineering", "Intermediate"],
    time: "5 hours ago",
  },
  {
    img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
    heading: "Health Sciences Overview",
    views: "1.5K",
    tags: ["Health Sciences", "Advanced"],
    time: "1 day ago",
  },
  {
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    heading: "Humanities and Arts",
    views: "800",
    tags: ["Humanities", "Arts"],
    time: "3 days ago",
  },
  {
    img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
    heading: "Management Essentials",
    views: "1.1K",
    tags: ["Management", "Business"],
    time: "1 week ago",
  },
  {
    img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    heading: "Science Fundamentals",
    views: "2K",
    tags: ["Science", "Beginner"],
    time: "2 weeks ago",
  },
];


const cardData = [
  {
    heading: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and user experience design.",
    rating: 4.5,
    price: "$49.99",
    lastPrice: "$99.99",
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  {
    heading: "Mechanical Engineering 101",
    description: "An introductory course on mechanical engineering concepts.",
    rating: 4.7,
    price: "$59.99",
    lastPrice: "$119.99",
    img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
  },
  {
    heading: "Advanced Health Sciences",
    description: "Explore advanced topics in health sciences and medical research.",
    rating: 4.8,
    price: "$79.99",
    lastPrice: "$159.99",
    img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
  },
  {
    heading: "Art History and Appreciation",
    description: "A comprehensive guide to the history and appreciation of art.",
    rating: 4.6,
    price: "$39.99",
    lastPrice: "$79.99",
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  {
    heading: "Business Management Strategies",
    description: "Learn effective strategies for managing and growing a business.",
    rating: 4.9,
    price: "$89.99",
    lastPrice: "$179.99",
    img: "https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg",
  },
  {
    heading: "Basic Science Experiments",
    description: "Hands-on experiments to understand basic scientific principles.",
    rating: 4.4,
    price: "$29.99",
    lastPrice: "$59.99",
    img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
  },
];



const reviewData = [
  {
    rating: 4.2,
    username: "John Doe",
    review: "This course was incredibly informative and well-structured. Highly recommend!",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    rating: 4.2,
    username: "Jane Smith",
    review: "Great course with lots of useful information. The instructor was very knowledgeable.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    rating: 4.5,
    username: "Alice Johnson",
    review: "I learned so much from this course. The practical examples were very helpful.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    rating: 4.8,
    username: "Michael Brown",
    review: "Excellent course! The content was engaging and easy to follow.",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    rating: 4.2,
    username: "Emily Davis",
    review: "Very good course. I appreciated the detailed explanations and real-world applications.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    rating: 4.7,
    username: "David Wilson",
    review: "Fantastic course! I feel much more confident in my skills now.",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];


const Courses = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <section className='mb-20'>
        <h2 className='text-2xl font-bold mb-4'>Course Category</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
          {
            headingData.map((e, index) => (
              <Headline
                key={index}
                img={e.img}
                heading={e.heading}
                views={e.views}
                tags={e.tags}
                time={e.time}
              />
            ))
          }
        </div>
      </section>

      <section className='mb-20'>
        <h2 className='text-2xl font-bold mb-4'>Explore Courses</h2>
        <FilterOption items={filterOptions} />
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {
            cardData.map((e, index) => (
              <Card1
                key={index}
                heading={e.heading}
                description={e.description}
                rating={e.rating}
                price={e.price}
                img={e.img}
                lastPrice={e.lastPrice}
              />
            ))
          }
        </div>

      </section>
      <section>
        <h2 className='text-2xl font-bold mb-4'>Reviews</h2>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {
            reviewData.map((e, index) => (
              <Review
                key={index}
                img={e.img}
                username={e.username}
                rating={e.rating}
                review={e.review}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}


export default Courses