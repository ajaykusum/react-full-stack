import React from 'react'
import Banner from './Banner'
import Card from './Card'
import img1 from '../../assets/campaign-1.avif';
import img2 from '../../assets/champaign-charity.avif';
import img3 from '../../assets/day-of-charity.avif';
import img4 from '../../assets/champaign-humanity-day.avif';
import img5 from '../../assets/heath-day.avif';
import img6 from '../../assets/health-campaign.jpg';
import img7 from '../../assets/education-campaign.avif';
import img8 from '../../assets/boy-reading.avif';
import img9 from '../../assets/education-day.avif';

const Campaign = () => {
    return (
        <div className='m-auto max-w-screen-xl'>
            <Banner />
            <section className='mb-4'>
                <h2 className='font-bold text-xl mb-2'>Carity Campaign</h2>
                <div className='flex gap-2'>
                    <Card
                        img={img1}
                    />
                    <Card
                        img={img2}
                    />
                    <Card
                        img={img3}
                    />
                </div>
            </section>

            <section className='mb-4'>
                <h2 className='font-bold text-xl mb-2'>Health Campaign</h2>
                <div className='flex gap-2'>
                    <Card
                        img={img4}
                        />
                    <Card
                        img={img5}
                        />
                    <Card
                        img={img6}
                    />
                </div>
            </section>

            <section className='mb-4'>
                <h2 className='font-bold text-xl mb-2'>Education Campaign</h2>
                <div className='flex gap-2'>
                    <Card
                        img={img7}
                    />
                    <Card
                        img={img8}
                    />
                    <Card
                        img={img9}
                    />
                </div>
            </section>
        </div>
    )
}

export default Campaign