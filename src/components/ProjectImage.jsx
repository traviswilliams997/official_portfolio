import { Box, useMediaQuery } from '@mui/material'
import { theme } from '../theme'
const ProjectImage = ({ imgUrl }) => {
  const isLargeScreen = useMediaQuery('(min-width:1800px)')

  return (
    <Box
      display="flex"
      bgcolor={theme.palette.secondary.light}
      flex={1}
      height="450px"
      pt="40px"
      pl={isLargeScreen ? '25px' : '50px'}
      pr={isLargeScreen ? '25px' : '50px'}
      pb="30px"
      justifyContent={'center'}
    >
      <img
        className="project"
        src={imgUrl}
        width={isLargeScreen ? '1000px' : '600px'}
      ></img>
    </Box>
  )
}

export default ProjectImage
