import React from 'react'
import Exemple1 from '../components/Exemple1'
import Exemple2 from '../components/Exemple2'
import Exemple3 from '../components/Exemple3'
import Exemple4 from '../components/Exemple4'

export default function Exemples() {
  return (
    <main className='w-full h-full flex flex-col justify-start items-center gap-[5rem]'>
        <h1 className='text-6xl font-bold text-white'>Scroll Trigger</h1>
      <Exemple1/>
      <Exemple2/>
      <Exemple3/>
      {/* <Exemple4/> */}
    </main>
  )
}
