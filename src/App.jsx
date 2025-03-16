import React from 'react'

import About from "./components/About"
import Header from "./components/Header"
import Enterprise from "./components/Enterprise"
import Experience from "./components/Experience"
import Projects from './components/Projects'
import { Banner } from './components/Banner'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header />
      <Enterprise />
      <About />
      <Experience />
      <Projects />
      <Banner />
      <Footer />
    </>
  )
}

export default App
