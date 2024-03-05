import { Box, Stack, Typography, Button } from '@mui/material'
import FlexBetween from './FlexBetween'
import { styled } from '@mui/system'

const NavLink = styled(Typography)(({}) => ({
  color: '#17252A',
  fontWeight: '500',
  marginLeft: '20px',
  marginRight: '20px',
}))

const Navbar = () => {
  return (
    <Box>
      <Stack direction="row" height="80px" sx={{ position: 'relative' }}>
        <Box
          display="flex"
          bgcolor="#3AAFA9"
          flexBasis="62.5%"
          minWidth="62.5%"
          justifyContent="left"
        >
          <Stack>
            {' '}
            <Typography
              variant="h4"
              fontWeight={700}
              color="#FEFFFF"
              mt="20px"
              ml="135px"
              sx={{ '&:hover': { color: '#2B7A78' } }}
            >
              {' '}
              TRAVIS WILLIAMS
            </Typography>
          </Stack>
        </Box>
        <Box
          display="flex"
          bgcolor="#2B7A78"
          flexBasis="37.5%"
          minWidth="37.5%"
          justifyContent="right"
        >
          <Stack mt="10px">
            <FlexBetween pt="5px">
              <NavLink
                variant="h5"
                sx={{ '&:hover': { borderBottom: '3px solid #17252A' } }}
              >
                About
              </NavLink>
              <NavLink
                variant="h5"
                sx={{ '&:hover': { borderBottom: '3px solid #17252A' } }}
              >
                Projects
              </NavLink>
              <NavLink
                variant="h5"
                sx={{ '&:hover': { borderBottom: '3px solid #17252A' } }}
              >
                Contacts
              </NavLink>
              <Button
                sx={{
                  bgcolor: '#17252A',
                  pl: '20px',
                  pr: '20px',
                  mr: '50px',
                  ml: '50px',
                }}
              >
                <Typography
                  color="#FEFFFF"
                  variant="h6 "
                  sx={{ '&:hover': { color: '#17252A', fontWeight: '800' } }}
                  fontWeight={500}
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
