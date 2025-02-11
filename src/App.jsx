import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "@fontsource/inter"
import Home from './components/Home'

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App