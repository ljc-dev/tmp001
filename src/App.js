import smoothscroll from 'smoothscroll-polyfill'
import 'aos/dist/aos.css'
import AOS from 'aos'
import TopNav from './components/TopNav'
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop'
import About from "./components/About"
import Services from "./components/Services"
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './components/Footer'

function App() {
  smoothscroll.polyfill()

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
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
