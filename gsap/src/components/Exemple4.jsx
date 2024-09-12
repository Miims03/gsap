import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Exemple4() {

    gsap.registerPlugin(ScrollTrigger);

    const section4 = useRef(null);
    const title = useRef(null);
    const content = useRef(null);

    useEffect(() => {

        gsap.to(section4.current, {
            y: 0,
            scrollTrigger: {
              trigger: section4.current,
              start: "center 48.5%",
              end: "600rem top",
              scrub: 1,
              markers: false,
              pin: true,
              pinSpacing: false,
            }
          });

          gsap.fromTo(title.current, 
            { opacity: 1, scale: 1 },
            { 
              opacity: 0,
              scale: 0,
              duration: 3,
              scrollTrigger: {
                trigger: section4.current,
                start: "top top",
                end: "center top",
                scrub: 1,
                // markers: true,
                onEnter: () => gsap.set(title.current, { opacity: 1, scale: 1 }),
                onLeaveBack: () => gsap.set(title.current, { opacity: 0, scale: 0 })
              }
            }
          );

          gsap.fromTo(content.current, 
            { opacity: 0, scale: 0 },
            { 
              opacity: 1,
              scale: 1,
              duration: 3,
              scrollTrigger: {
                trigger: section4.current,
                start: "center top",
                end: "bottom top",
                scrub: 1,
                markers: true,
                onEnter: () => gsap.set(content.current, { opacity: 1, scale: 1 }),
                onLeaveBack: () => gsap.set(content.current, { opacity: 0, scale: 0 })
              }
            }
          );

    }, []);

    return (
        <main className='w-full h-[300vh] flex flex-col justify-start items-center gap-[2rem] bg-zinc-900'>
            <section className='w-full h-[100vh] flex justify-center items-center gap-[5rem] px-[3rem] py-[3rem] relative bg-red-950 rounded-none' ref={section4}>
                <h1 className='text-zinc-50 text-5xl absolute opacity-0 scale-0 ' ref={title}>Le titre est là</h1>
                <p className='text-zinc-200 text-4xl absolute opacity-0 scale-0' ref={content}>Le content ici la</p>
            </section>
        </main>
    )
}
