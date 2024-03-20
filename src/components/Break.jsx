import { Box, Typography, useTheme } from '@mui/material'
const Break = () => {
  const theme = useTheme()
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light
  const secondary = theme.palette.secondary.light

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      bgcolor={dark}
      flex={1}
      height="110px"
    >
      <Typography variant={'h2'} fontWeight={500} color={light} id="projects">
        PROJECTS
      </Typography>
      <Typography
        variant={'h7'}
        color={secondary}
        id="projects"
        pl={'20px'}
        pr={'20px'}
      >
        *Hosted on free servers that take a minute to start up
      </Typography>
    </Box>
  )
}

export default Break
