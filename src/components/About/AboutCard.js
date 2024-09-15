import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'

export default function AboutCard() {
    return (
        <>
            <AnimatedElement>
                <h1 className="m-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| ABOUT</span> INFINITY ACADEMY :</h1>
            </AnimatedElement>

            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-6 md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            { <img className="w-full md:rounded-lg" alt="hero" src="/images/logoin.jpg" /> }
                            {/*<video className="w-full md:rounded-lg" alt="hero" src='/Video/AOTCampus.mp4' autoPlay muted loop />*/}
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2"> Established in 2024,<span className='font-bold'> The Infinity Academy is the first of its kind in Hatsingimari District </span> , 
    dedicated to imparting quality education and empowering students to achieve both personal and professional success.
     Our mission is to nurture young minds, instilling values that contribute positively to society while equipping students with the knowledge and skills for a successful career. At The Infinity Academy, we are committed to making students' lives shine through expert guidance and a holistic approach to learning. </p>                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-10 md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            <img className="w-full md:rounded-lg" alt="hero" src="/images/in6.jpg" />
                        </div>
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">“Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
<p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2"> Our exceptional guidance ensures that every student's career is extraordinary, with a promise of a bright and successful future. We nurture and support each student with care and dedication, helping them to flourish and reach their full potential. At The Infinity Academy, we prepare students to compete with the best in the world, empowering them to excel in every aspect of their journey. </p>                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
