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
      pl="150px"
      pb="30px"
    >
      <img className="project" src={imgUrl} width={'1000px'}></img>
    </Box>
  )
}

export default ProjectImage
