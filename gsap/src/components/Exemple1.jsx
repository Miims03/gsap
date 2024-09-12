import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Exemple1() {
    gsap.registerPlugin(ScrollTrigger);

    const box1 = useRef(null)
    const box2 = useRef(null)

    useEffect(() => {

        gsap.to(box1.current, {
            xPercent: 600,
            duration: 5,
            ease: "",
            scrollTrigger: {
              trigger: box1.current,
              toggleActions: "play none none none",
              start: "top 30%",
              end: "80% 35%",
              markers: false,
              scrub: 3,
            }
        })
        
        gsap.to(box2.current, {
            xPercent: 600,
            duration: 5,
            ease: "",
            scrollTrigger: {
              trigger: box1.current,
              toggleActions: "play none none reverse",
              start: "top 25%",
              end: "80% 10%",
              markers: false,
              scrub: 3,
            }
        })
    },[])

    

  return (
    <main className='w-full flex flex-col justify-start items-center gap-[2rem] py-[5rem]'>
      <h1 className='text-2xl font-semibold'>Exemple 1 </h1>
      <section className='bg-zinc-800 w-2/3 rounded-2xl flex flex-col justify-center items-start gap-[3rem] px-[3rem] py-[3rem]'>
        <figure className='h-[10rem] w-[10rem] bg-yellow-500 rounded-xl' ref={box1}></figure>
        <figure className='h-[10rem] w-[10rem] bg-red-500 rounded-xl' ref={box2}></figure>
      </section>
    </main>
  )
}
