import { Box, Typography } from '@mui/material'

const TopLeft = () => {
  return (
    <Box bgcolor="#3AAFA9" flex={10} height="400px">
      <Box>
        <Typography variant="h2" fontWeight={700} color="#FEFFFF">
          Software
        </Typography>
        <Typography variant="h3" fontWeight={700} color="#FEFFFF">
          Engineer
        </Typography>
      </Box>
    </Box>
  )
}

export default TopLeft
