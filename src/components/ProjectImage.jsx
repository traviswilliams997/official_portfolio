import { Box } from '@mui/material'

const ProjectImage = ({ imgUrl }) => {
  return (
    <Box
      display="flex"
      bgcolor="#FEFFF"
      border="20px solid  #DEF2F1"
      flex={1}
      height="400px"
    >
      <img className="project" src={imgUrl} width="100%"></img>
    </Box>
  )
}

export default ProjectImage
