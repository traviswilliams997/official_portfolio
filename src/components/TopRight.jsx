import { Box, useMediaQuery, useTheme } from '@mui/material'

const TopRight = () => {
  const isDisplay = useMediaQuery('(min-width:1100px)')
  const theme = useTheme()

  const main = theme.palette.secondary.main
  return (
    <Box
      bgcolor={main}
      flex={6}
      height="46vh"
      minHeight={'530px'}
      sx={{ display: isDisplay ? 'block' : 'none' }}
    ></Box>
  )
}

export default TopRight
