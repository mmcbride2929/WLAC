import './App.css'
import Home from './Pages/Home'
import About from './components/About/About'
import Features from './components/Features/Features'

import Nav from './components/Nav/Nav'
import { useState } from 'react'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false)
  return (
    <>
      <Nav sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      {!sidebarActive ? (
        <>
          <Home />
          <About />
          <Features />
          <FAQ />
          <Contact />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  )
}
export default App
