import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Break from './components/Break'
import About from './components/About'
import Contact from './components/Contact'
import { Box } from '@mui/material'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'

import './app.css'

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Intro />
        <Break />
        <Projects />
        <About />
        <Contact />
      </ThemeProvider>
    </Box>
  )
}

export default App
