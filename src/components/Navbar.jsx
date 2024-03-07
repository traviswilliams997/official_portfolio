import { Box, Stack, Typography, Button } from '@mui/material'
import FlexBetween from './FlexBetween'
import { styled } from '@mui/system'

import { theme } from '../theme'

const Navbar = () => {
  const dark = theme.palette.primary.dark

  const secondMain = theme.palette.secondary.main
  const secondLight = theme.palette.secondary.light
  const main = theme.palette.primary.main
  const light = theme.palette.primary.light

  const NavLink = styled(Typography)(({}) => ({
    color: secondLight,
    fontWeight: '500',
    marginLeft: '20px',
    marginRight: '20px',
    '&:hover': { borderBottom: `3px solid ${secondLight}` },
  }))

  return (
    <Box>
      <Stack direction="row" height="80px" sx={{ position: 'relative' }}>
        <Box
          display="flex"
          bgcolor={main}
          flexBasis="62.5%"
          minWidth="62.5%"
          justifyContent="left"
        >
          <Stack>
            {' '}
            <Typography
              variant="h4"
              fontWeight={700}
              color={light}
              mt="20px"
              ml="135px"
              sx={{ '&:hover': { color: dark } }}
            >
              {' '}
              TRAVIS WILLIAMS
            </Typography>
          </Stack>
        </Box>
        <Box
          display="flex"
          bgcolor={secondMain}
          flexBasis="37.5%"
          minWidth="37.5%"
          justifyContent="right"
        >
          <Stack mt="10px">
            <FlexBetween pt="5px">
              <NavLink variant="h5">Projects</NavLink>
              <NavLink variant="h5">About</NavLink>
              <NavLink variant="h5">Contacts</NavLink>
              <Button
                sx={{
                  bgcolor: dark,
                  pl: '20px',
                  pr: '20px',
                  mr: '50px',
                  ml: '50px',
                }}
              >
                <Typography
                  color={secondLight}
                  variant="h5 "
                  fontSize="17px"
                  sx={{
                    '&:hover': {
                      color: secondLight,
                      fontWeight: '800',
                    },
                  }}
                  fontWeight={700}
                >
                  Resume
                </Typography>
              </Button>
            </FlexBetween>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Navbar
