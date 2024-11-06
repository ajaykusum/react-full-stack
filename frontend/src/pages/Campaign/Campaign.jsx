import React from 'react'
import Banner from './Banner'
import Card from './Card'
import img1 from '../../assets/campaign-1.avif';
import img2 from '../../assets/champaign-charity.avif';
import img3 from '../../assets/champaign-humanity-day.avif';

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
                <h2 className='font-bold text-xl mb-2'>Education Campaign</h2>
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
        </div>
    )
}

export default Campaign