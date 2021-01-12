import AOS from 'aos'
import 'aos/dist/aos.css'
import smoothscroll from 'smoothscroll-polyfill'
import { useEffect, } from "react"
import Home from './components/Home'

function App() {
  smoothscroll.polyfill()

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
