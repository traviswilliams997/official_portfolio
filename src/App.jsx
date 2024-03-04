import TopRight from './components/TopRight'
import TopLeft from './components/TopLeft'
import ProjectImage from './components/ProjectImage'
import ProjectInfo from './components/ProjectInfo'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import { Box, Stack } from '@mui/material'
import './app.css'

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" sx={{ position: 'relative' }}>
        <TopLeft />
        <img
          className="profile"
          src="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709572285/bcwyrjr7ybywhrnepr5k.jpg"
          height="300px"
          width="300px"
        ></img>
        <TopRight />
      </Stack>
      <Scroll />
      <Stack direction="row">
        <ProjectImage />
        <ProjectInfo />
      </Stack>
    </Box>
  )
}

export default App
