import { Box, Stack, Typography } from '@mui/material'

const TopLeft = () => {
  return (
    <Box
      bgcolor="#3AAFA9"
      flex={10}
      height="42vh"
      display="flex"
      justifyContent="center"
    >
      <Stack mt="20px">
        <Typography variant="h2" fontWeight={700} color="#FEFFFF">
          Software
        </Typography>
        <Typography variant="h2" fontWeight={700} color="#FEFFFF">
          Engineer.
        </Typography>
        <Typography variant="h5" fontWeight={400} color="#17252A" width="500px">
          Focused on solving real problems that add measurable gains to the
          bottom line.
        </Typography>
        <Typography
          variant="h6"
          fontWeight={100}
          color="#17252A"
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
