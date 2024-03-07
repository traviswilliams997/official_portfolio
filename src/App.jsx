import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Break from './components/Break'
import About from './components/About'
import Contact from './components/Contact'
import { Box } from '@mui/material'
import './app.css'

function App() {
  return (
    <Box>
      <Navbar />
      <Intro />
      <Break />
      <Projects />
      <About />
      <Contact />
    </Box>
  )
}

export default App
