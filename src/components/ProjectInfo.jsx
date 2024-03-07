import { Box, Stack, Typography, Link } from '@mui/material'
import { GitHub, Launch } from '@mui/icons-material'
import { styled } from '@mui/system'
import { theme } from '../theme'

const ProjectInfo = ({ text, title, repoLink, liveDemoLink, stack }) => {
  const main = theme.palette.primary.main
  const secondLight = theme.palette.secondary.light
  const dark = theme.palette.primary.dark
  const StackText = styled(Typography)(({}) => ({
    color: main,
  }))
  const BottomText = styled(Typography)(({}) => ({
    color: main,
  }))

  const StyledGithub = styled(GitHub)(({}) => ({
    color: main,
  }))

  const StyledLaunch = styled(Launch)(({}) => ({
    color: main,
  }))

  return (
    <Box
      bgcolor={secondLight}
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
        <Typography variant="h3" color={dark}>
          {' '}
          {title}
        </Typography>
        <Stack display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h5" color={dark} mt="30px">
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
                  border: `1.5px solid ${main}`,
                },
                transition: 'all 0.5s',
              }}
              borderBottom={`1.5px solid ${main}`}
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
                '&:hover': { border: `1.5px solid ${main}` },
                transition: 'all 0.5s',
              }}
              borderBottom={`1.5px solid ${main}`}
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
