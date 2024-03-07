import { Box, Stack, Typography } from '@mui/material'
import { theme } from '../theme.js'
const TopLeft = () => {
  const main = theme.palette.primary.main
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light

  return (
    <Box
      bgcolor={main}
      flex={10}
      height="46vh"
      display="flex"
      justifyContent="center"
    >
      <Stack mt="40px">
        <Typography variant="h2" fontWeight={700} color={light}>
          Software
        </Typography>
        <Typography variant="h2" fontWeight={700} color={light}>
          Engineer.
        </Typography>
        <Typography variant="h5" fontWeight={400} color={dark} width="500px">
          Focused on solving real problems that add measurable gains to the
          bottom line.
        </Typography>
        <Typography
          variant="h6"
          fontWeight={100}
          color={dark}
          width="350px"
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
