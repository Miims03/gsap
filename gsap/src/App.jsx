import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Exemples from './pages/Exemples'

function App() {

  return (
    <main className='max-w-screen min-h-screen bg-zinc-900 '>
      <Routes>
        <Route path="/" element={<Exemples />} />
        <Route path="*" element={() => <Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
