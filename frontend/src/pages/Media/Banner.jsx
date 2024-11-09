const bgImg = "https://images.pexels.com/photos/2346384/pexels-photo-2346384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Banner = () => {
    return (
        <div
            className='flex flex-col justify-center items-center font-semibold text-sm bg-cover bg-no-repeat bg-center
            h-[450px]'
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="text-zinc-700 text-center">
                <p>Explore Our Extensive Video Catalog</p>
                <p>Bringing you the latest and greatest in social welfare media.</p>
            </div>
            <button className='m-8 py-2 px-8 rounded bg-zinc-900 hover:bg-zinc-800 text-white font-semibold'>
                <a href="#">Discover</a>
            </button>
        </div>
    );
}

export default Banner;
