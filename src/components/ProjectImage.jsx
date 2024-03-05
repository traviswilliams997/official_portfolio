import { Box } from '@mui/material'

const ProjectImage = ({ imgUrl }) => {
  return (
    <Box
      display="flex"
      bgcolor="#DEF2F1"
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
