import { Box } from '@mui/material'
import { theme } from '../theme'
const ProjectImage = ({ imgUrl }) => {
  return (
    <Box
      display="flex"
      bgcolor={theme.palette.secondary.light}
      flex={1}
      height="450px"
      pt="40px"
      pl="30px"
      pr="30px"
      pb="30px"
    >
      <img className="project" src={imgUrl} width="100%"></img>
    </Box>
  )
}

export default ProjectImage
