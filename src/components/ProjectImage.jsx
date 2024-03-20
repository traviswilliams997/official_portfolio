import { Box, useMediaQuery } from '@mui/material'
import { theme } from '../theme'
const ProjectImage = ({ imgUrl }) => {
  const isLargeScreen = useMediaQuery('(min-width:1800px)')
  const isMediumScreen = useMediaQuery('(min-width:1100px)')
  const isSmallScreen = useMediaQuery('(min-width:800px)')

  return (
    <Box>
      {isLargeScreen && (
        <Box
          display="flex"
          bgcolor={theme.palette.secondary.light}
          flex={1}
          height="450px"
          pt="40px"
          pl={'50px'}
          pr={'50px'}
          pb="30px"
          justifyContent={'center'}
        >
          <img className="project" src={imgUrl} width={'1000px'}></img>
        </Box>
      )}
      {!isLargeScreen && isMediumScreen && (
        <Box
          display="flex"
          bgcolor={theme.palette.secondary.light}
          flex={1}
          height="350px"
          pt="40px"
          pl={'25px'}
          pr={'25px'}
          pb="30px"
          justifyContent={'center'}
        >
          <img className="project" src={imgUrl} width={'700px'}></img>
        </Box>
      )}{' '}
      {!isMediumScreen && isSmallScreen && (
        <Box
          display="flex"
          bgcolor={theme.palette.secondary.light}
          flex={1}
          height="250px"
          pt="40px"
          pl={'25px'}
          pr={'25px'}
          pb="10px"
          justifyContent={'center'}
        >
          <img className="project" src={imgUrl} width={'450px'}></img>
        </Box>
      )}
      {!isSmallScreen && (
        <Box
          display="flex"
          bgcolor={theme.palette.secondary.light}
          flex={1}
          height="200px"
          pt="40px"
          pl={'25px'}
          pr={'25px'}
          pb="10px"
          justifyContent={'center'}
        >
          <img className="project" src={imgUrl} width={'350px'}></img>
        </Box>
      )}
    </Box>
  )
}

export default ProjectImage
