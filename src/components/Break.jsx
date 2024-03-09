import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../theme'
const Break = () => {
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light
  const isMediumScreen = useMediaQuery('(min-width:1100px)')

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={dark}
      flex={1}
      height="110px"
    >
      <Typography
        variant={isMediumScreen ? 'h2' : 'h4'}
        fontWeight={500}
        color={light}
        id="projects"
      >
        PROJECTS
      </Typography>
    </Box>
  )
}

export default Break
