import React from 'react';
import glanceBanner from '../../assets/glance-banner.jpg';
import gifts from '../../assets/gifts-cupon.png';

const Banner = () => {
    return (
        <div
            className='flex flex-col md:flex-row justify-center text-sm bg-cover bg-no-repeat bg-center h-auto md:h-[450px] relative'
            style={{ backgroundImage: `url(${glanceBanner})` }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
            <div className='relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg p-4'>
                <div className='order-2 md:order-1 text-white p-4'>
                    <h1 className='font-bold text-4xl uppercase'>First Deposit Bonus +180% Rewards</h1>
                    <p className='text-zinc-300 mt-2 mb-4'>Make your first deposit today and enjoy an incredible 180% bonus on your rewards. Don't miss out on this limited-time offer to boost your earnings and maximize your benefits!</p>
                    <div className='flex gap-2 mb-4'>
                        <div className='px-4 py-2 w-52 bg-yellow-500 rounded-lg text-yellow-950'>
                            <div className='font-semibold'>Price</div>
                            <div className='font-bold text-lg'>$120.00</div>
                        </div>
                        <div className='px-4 py-2 w-52 bg-[#ffffff1c] rounded-lg text-white'>
                            <div className='font-semibold'>Finish in</div>
                            <div className='font-bold text-lg'>
                                <span>00</span>
                                <span> : </span>
                                <span>18</span>
                                <span> : </span>
                                <span>13</span>
                                <span> : </span>
                                <span>07</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-1 md:order-2 p-4'>
                    <img src={gifts} alt="Gifts" className='w-3/4 md:w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default Banner;
