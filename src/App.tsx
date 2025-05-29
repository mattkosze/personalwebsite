import { useState } from 'react'
import './css/App.css'
import { BookCard } from './components/BookCard'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Reading } from './pages/Reading'
import { Header } from './components/Header'


function App() {
  return (
    <>
      <Header />
      <div className="contentHolder">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reading" element={<Reading />}/>
        </Routes>
      </div>
    </>
  )
}

export default App