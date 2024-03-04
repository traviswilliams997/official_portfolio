import TopRight from './components/TopRight'
import TopLeft from './components/TopLeft'
import ProjectImage from './components/ProjectImage'
import ProjectInfo from './components/ProjectInfo'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import { Box, Stack } from '@mui/material'

function App() {
  return (
    <Box>
      <Navbar />

      <Stack direction="row">
        <TopLeft />
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
