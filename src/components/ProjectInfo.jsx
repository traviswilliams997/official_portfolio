import { Box, Stack, Typography, Link } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import { styled } from '@mui/system'
const ProjectInfo = ({ text, title, repoLink, liveDemoLink, stack }) => {
  const StackText = styled(Typography)(({}) => ({
    color: '#3AAFA9',
  }))
  const BottomText = styled(Typography)(({}) => ({
    color: '#3AAFA9',
  }))

  const StyledGithub = styled(GitHub)(({}) => ({
    color: '#3AAFA9',
  }))

  const StyledLaunch = styled(Launch)(({}) => ({
    color: '#3AAFA9',
  }))

  return (
    <Box
      bgcolor="#DEF2F1"
      flex={1}
      height="450px"
      display="flex"
      justifyContent="center"
      pt="40px"
      pl="30px"
      pr="30px"
      pb="30px"
    >
      <Stack width="500px">
        <Typography variant="h3" color="#17252A">
          {' '}
          {title}
        </Typography>
        <Stack display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h5" color="#17252A" mt="30px">
            {' '}
            {text}
          </Typography>
          <Box display="flex" mt="20px">
            {stack &&
              stack.map((s) => (
                <StackText variant="h6" mr="20px" key={s}>
                  {' '}
                  {s}
                </StackText>
              ))}
          </Box>
          <Box display="flex" mt="20px">
            <Box
              display="flex"
              mr="25px"
              sx={{
                '&:hover': {
                  border: '1.5px solid #3AAFA9',
                },
                transition: 'all 0.5s',
              }}
              borderBottom="1.5px solid #3AAFA9"
              p="5px"
            >
              <BottomText variant="h6">
                {' '}
                <Link
                  href={repoLink}
                  sx={{ textDecoration: 'none' }}
                  color="inherit"
                >
                  Code
                </Link>
              </BottomText>
              <StyledGithub />
            </Box>
            <Box
              display="flex"
              ml="25px"
              sx={{
                '&:hover': { border: '1.5px solid #3AAFA9' },
                transition: 'all 0.5s',
              }}
              borderBottom="1.5px solid #3AAFA9"
              p="5px"
            >
              <BottomText variant="h6">
                {' '}
                <Link
                  href={liveDemoLink}
                  sx={{ textDecoration: 'none' }}
                  color="inherit"
                >
                  Live Demo
                </Link>
              </BottomText>
              <StyledLaunch />
            </Box>
          </Box>
        </Stack>
      </Stack>{' '}
    </Box>
  )
}

export default ProjectInfo
