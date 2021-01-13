import { useEffect, } from "react"
import smoothscroll from 'smoothscroll-polyfill'
import Rellax from 'rellax'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopNav from './components/TopNav'
import Home from './components/Home'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import About from "./components/About"
import Services from "./components/Services"

function App() {
  smoothscroll.polyfill()

  useEffect(() => {
    AOS.init({})
    new Rellax(".rellax", {})
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
