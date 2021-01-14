import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import About from "./components/About"
import Clients from './components/Clients'
import Footer from './components/Footer'
import GoodToKnow from './components/GoodToKnow'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Services from "./components/Services"
import SignOrLog from './components/SignOrLog'
import TopNav from './components/TopNav'

function App() {
  smoothscroll.polyfill()

  useEffect(() => {
    AOS.init({})
    AOS.refresh()
  }, [])

  return (
    <Router>
      <TopNav />
      <Switch >
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
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
        <Route path="/sign">
          <SignOrLog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
