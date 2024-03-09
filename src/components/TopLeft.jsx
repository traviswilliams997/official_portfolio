import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../theme.js'
const TopLeft = () => {
  const main = theme.palette.primary.main
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light
  const isDisplayLinks = useMediaQuery('(min-width:1100px)')

  return (
    <Box
      bgcolor={main}
      flex={isDisplayLinks ? 10 : 1}
      height={isDisplayLinks ? '46vh' : '60vh'}
      display="flex"
      justifyContent="center"
    >
      <Stack mt="6vh">
        <Typography
          variant={isDisplayLinks ? 'h1' : 'h3'}
          fontWeight={700}
          color={light}
        >
          Software
        </Typography>
        <Typography
          variant={isDisplayLinks ? 'h1' : 'h3'}
          fontWeight={700}
          color={light}
        >
          Engineer.
        </Typography>
        <Typography
          variant={isDisplayLinks ? 'h4' : 'h5'}
          fontWeight={400}
          color={dark}
          width={isDisplayLinks ? '650px' : '300px'}
        >
          Focused on solving real problems that add measurable gains to the
          bottom line.
        </Typography>
        <Typography
          variant={isDisplayLinks ? 'h5' : 'h6'}
          fontWeight={100}
          color={dark}
          width={isDisplayLinks ? '650px' : '300px'}
          mt="10px"
        >
          I achieve this by crafting: modular, well tested, maintainable and
          scalelabe software systems.
        </Typography>
      </Stack>
    </Box>
  )
}

export default TopLeft
