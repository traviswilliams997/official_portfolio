import { Box } from '@mui/material'
import { theme } from '../theme'

const TopRight = () => {
  const main = theme.palette.secondary.main
  return <Box bgcolor={main} flex={6} height="46vh"></Box>
}

export default TopRight
