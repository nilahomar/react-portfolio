import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   <>
   <Header/>
   <About/>
   <Nav/>
   <Experience/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App