import React from 'react';

export default function Feature() {
    return (
        <div>
            <section className='py-8 bg-neutral-100 mb-40'>
                <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-blue-500 text-black'>
                Innovative Insights: Journeying Into the Future of Travel and Exploration!
                </h2>

                <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
                In a world where travel is constantly evolving, technology is reshaping how we experience the world. Innovative Insights: Redefining the Future of Travel takes you on a journey through the revolutionary advancements that are transforming the way we explore new destinations. From autonomous vehicles and electric planes to hyperloop systems that promise to shorten travel times across cities, this exploration dives deep into how these innovations are reshaping transportation, making it more efficient, sustainable, and accessible. We’ll also uncover how digital technologies like augmented reality and virtual tourism are allowing travelers to immerse themselves in distant places without even leaving their homes. By examining the challenges and opportunities these innovations present, we gain a deeper understanding of the future of global exploration. Whether you’re a frequent flyer or an armchair traveler, this is your gateway to a world where the boundaries of travel are expanding at an unprecedented pace.
                With sustainable innovations, like eco-friendly electric vehicles and carbon-neutral flights, the future of travel is not only faster but also more environmentally responsible. From space tourism to digital nomadism, the possibilities are limitless, offering us a new era of exploration where adventure is just a click away
                    </p>

                <div className='mx-auto max-w-7xl px-5'>
                    <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
                        Exploring Our Categories
                    </h1>
                    <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 text-center'>
                        {[
                            "Leisure Travel",
                            "Business Travel",
                            "Medical Travel",
                            "Educational Travel",
                            "Cruise Travel",
                            "Luxury Travel",
                        ].map((category, index) => (
                            <div key={index}
                                className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center text-neutral-600'>
                                <p className='text-center text-lg font-semibold'>{category}</p>
                                <div className='absolute inset-0 border-2 border-tra group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2'>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
                The world of travel continues to evolve, the future of exploration is being shaped by cutting-edge technology and innovative solutions. From high-speed trains and hyperloop systems reducing travel times across countries, to smart luggage that tracks your belongings in real-time, the way we move is becoming more efficient and connected. Drones and autonomous vehicles are poised to revolutionize transportation, making journeys smoother and reducing congestion in busy cities. Sustainable travel is also taking center stage, with electric vehicles, eco-friendly accommodations, and green flight technologies leading the charge toward reducing our carbon footprint. Meanwhile, digital platforms are transforming the planning process, offering seamless booking experiences, personalized recommendations, and real-time travel updates. Whether its experiencing new destinations through virtual reality or enhancing cultural connections through digital translation tools, technology is pushing the boundaries of how we travel, making it faster, greener, and more immersive than ever before.
                    </p>
            </section>
        </div>
    );
}
