import './App.css'
import Home from './Pages/Home'
import About from './components/About/About'
import Features from './components/Features/Features'

import Nav from './components/Nav/Nav'
import { useState } from 'react'
import Work from './components/Work/Work'
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
          <Work />
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
