import AOS from 'aos'
import 'aos/dist/aos.css'
import smoothscroll from 'smoothscroll-polyfill'
import { useEffect, } from "react"
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop'
import Rellax from 'rellax'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

function App() {
  smoothscroll.polyfill()

  useEffect(() => {
    AOS.init({})
    new Rellax(".rellax", {})
  }, [])


  return (
    <div>
      <TopNav />
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
