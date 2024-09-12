import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Exemple3() {
    gsap.registerPlugin(ScrollTrigger);

    const section3 = useRef(null);
    const bg1 = useRef(null);
    const bg2 = useRef(null);

    useEffect(() => {

        gsap.from(section3.current, {
            y: 0
        })

        gsap.to(section3.current, {
            scrollTrigger: {
                trigger: section3.current,
                start: "41% center",
                end: "100% center",
                scrub: 1,
                //   markers: true,
                pin: true,
                pinSpacing: false, // Évite le décalage
                onEnter: () => {
                    gsap.set(section3.current, { y: 0 }); // Assure que la section reste en place
                },
                onLeave: () => {
                    gsap.set(section3.current, { y: '23rem' }); // Assure que la section reste en place
                }
            }
        });

        gsap.to(bg1.current, {
            x : '-102%',
            duration: 2,
            ease: "linear",
            scrollTrigger: {
                trigger: bg1.current,
                markers: false,
                start: "41% center",
                end: "100% center",
                scrub: 1,
            }
        })

        gsap.from(bg2.current,{
            x: '102%'
        })

        gsap.to(bg2.current, 
            {
            x : '0%',
            duration: 2,
            ease: "linear",
            scrollTrigger: {
                trigger: bg1.current,
                markers: false,
                start: "41% center",
                end: "100% center",
                scrub: 1,
            }
        })


    }, []);

    return (
        <main className='w-full h-[300vh] flex flex-col justify-start items-center gap-[2rem] py-[5rem]'>
            <h1 className='text-2xl font-semibold'>Exemple 3</h1>
            <section className='bg-zinc-800 w-2/3 h-[40rem] rounded-2xl flex justify-center items-start gap-[5rem] p-[2rem]' ref={section3}>
                <div className='relative w-[100%] h-[100%] flex justify-start items-center overflow-hidden'>
                    <img src="bg1.png" className='w-full h-full absolute top-0 left-0 z-50' ref={bg1} />
                    <img src="bg2.png" className='w-full h-full absolute top-0 left-0 z-40' ref={bg2} />
                </div>
            </section>
        </main>
    )
}