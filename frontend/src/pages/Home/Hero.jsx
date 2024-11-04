import React from 'react'

const Hero = () => {
    return (
        <>
            <div id='hero' className="mx-auto w-full py-16 text-center bg-slate-950 relative">
                <div className="dotted-background absolute w-full h-full top-0 left-0 z-0"></div>

                <button className="px-4 py-2 rounded-md text-white text-center relative overflow-hidden">
                    <div className="z-10 flex mb-6 items-center justify-center">
                        <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-black/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                            <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]">
                            </div>🎉
                            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                            <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Apply for a member!

                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </div>
                    </div>
                </button>

                <h1 className="z-1 relative text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Social <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">Welfare</span>
                </h1>

                <p className="z-1 relative mt-6 text-lg leading-8 max-w-6xl mx-auto text-slate-300">
                    Disabilities, social security for the aged and destitute through the network of residential care homes and non-institutional services. Besides this the Department also provides avenues of Persons with Disabilities and creates awareness amongst general public regarding the welfare measures of the Department.

                    In order to achieve its objectives, the Department of social welfare has decentralized its progr
                    programme implementation to the level of its 10 districts units having jurisdictions co-terminus with the Revenue /Police districts of Bihar.
                </p>
            </div>
        </>
    )
}

export default Hero