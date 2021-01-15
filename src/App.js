import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import About from "./components/About"
import Clients from './components/Clients'
import Footer from './components/Footer'
import GoodToKnow from './components/GoodToKnow'
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Services from "./components/Services"
import SignOrLog from './components/SignOrLog'
import TopNav from './components/TopNav'
import { SignContext } from './hooks/signContext'

function App() {
  smoothscroll.polyfill()
  const [showSignPopup, setShowSignPopup] = useState(false)

  useEffect(() => {
    AOS.init({})
    AOS.refresh()
  }, [])

  return (
    <Router>
      <SignContext.Provider value={{ showSignPopup, setShowSignPopup }}>
        {showSignPopup && <SignOrLog />}
        <TopNav />
        <Switch >
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/services/:project">
            <ProjectDetails />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/good-to-know">
            <GoodToKnow />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <ScrollToTop />
      </SignContext.Provider>
    </Router>
  )
}

export default App
