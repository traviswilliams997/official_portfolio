import { Box, Typography } from '@mui/material'
import { theme } from '../theme'
const Break = () => {
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={dark}
      flex={1}
      height="110px"
    >
      <Typography variant="h2" fontWeight={500} color={light}>
        PROJECTS
      </Typography>
    </Box>
  )
}

export default Break
