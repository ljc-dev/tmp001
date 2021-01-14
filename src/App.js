import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill'
import About from "./components/About"
import Footer from './components/Footer'
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop'
import Services from "./components/Services"
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
