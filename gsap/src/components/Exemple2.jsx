import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Exemple2() {
  gsap.registerPlugin(ScrollTrigger);

    const section2 = useRef(null); 
    const boxes = useRef([]);

  
    useEffect(() => {

        gsap.to(boxes.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(0.4,0.15)",
          stagger: 0.25, 
          scrollTrigger: {
            trigger: section2.current,
            markers: false,
            start: "top 50%",
            end: "bottom top",
            toggleActions: 'play none none reverse'
          }
        });

    }, []);

    return (
      <main className='w-full flex flex-col justify-start items-center gap-[2rem] py-[5rem] '>
        <h1 className='text-2xl font-semibold'>Exemple 2</h1>
        <section className='bg-zinc-800 w-2/3 rounded-2xl flex justify-center items-start gap-[5rem] px-[3rem] py-[3rem]' ref={section2}>
          <figure ref={el => boxes.current[0] = el} className='h-[8rem] w-[8rem] bg-yellow-500 rounded-xl opacity-0 scale-0'></figure>
          <figure ref={el => boxes.current[1] = el} className='h-[8rem] w-[8rem] bg-red-500 rounded-xl opacity-0 scale-0'></figure>
          <figure ref={el => boxes.current[2] = el} className='h-[8rem] w-[8rem] bg-blue-500 rounded-xl opacity-0 scale-0'></figure>
          <figure ref={el => boxes.current[3] = el} className='h-[8rem] w-[8rem] bg-green-500 rounded-xl opacity-0 scale-0'></figure>
          <figure ref={el => boxes.current[4] = el} className='h-[8rem] w-[8rem] bg-purple-500 rounded-xl opacity-0 scale-0'></figure>
        </section>
      </main>
    )
}
