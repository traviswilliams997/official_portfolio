import { Box, useMediaQuery } from '@mui/material'
import { theme } from '../theme'

const TopRight = () => {
  const isDisplay = useMediaQuery('(min-width:1100px)')

  const main = theme.palette.secondary.main
  return (
    <Box
      bgcolor={main}
      flex={6}
      height="46vh"
      sx={{ display: isDisplay ? 'block' : 'none' }}
    ></Box>
  )
}

export default TopRight
