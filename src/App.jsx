import TopRight from './components/TopRight'
import TopLeft from './components/TopLeft'
import ProjectImage from './components/ProjectImage'
import ProjectInfo from './components/ProjectInfo'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import About from './components/About'
import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import './app.css'

function App() {
  const [volunteeringStack, setVolunteeringStack] = useState([
    'REACT',
    'MUI',
    'NODE',
    'EXPRESS',
    'POSTGRES',
  ])

  const [etchStack, setEtchStack] = useState(['HTML', 'CSS', 'JAVASCRIPT'])
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
        <ProjectImage imgUrl="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709589357/veprlo1rwdkwe3fplt38.png" />
        <ProjectInfo
          text={
            'A platform to find volunteering agenices and events near you, post about your good deeds and make lasting connections. This project was inspired by my, and other students, difficulties in finding a place to volunteer for the UTechs community service module.'
          }
          title={'Jamaica Volunteering Platform'}
          repoLink={
            'https://github.com/traviswilliams997/jamaica_volunteer_platform'
          }
          liveDemoLink={'https://jamaica-volunteer-platform.fly.dev/'}
          stack={volunteeringStack}
        />
      </Stack>
      <Stack direction="row">
        <ProjectInfo
          text={
            'A fun little website where you write in the sand. This was project assigned in The Odin Project foundations section. Where I first learnt HTML, CSS and Javascript'
          }
          title={'Etch-A-Sketch'}
          repoLink={'https://github.com/traviswilliams997/ETCH-A-SKETCH'}
          liveDemoLink={'https://traviswilliams997.github.io/ETCH-A-SKETCH/'}
          stack={etchStack}
        />
        <ProjectImage imgUrl="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709594630/huce8gijty7oc6atomxl.png" />
      </Stack>
      <About />
    </Box>
  )
}

export default App
