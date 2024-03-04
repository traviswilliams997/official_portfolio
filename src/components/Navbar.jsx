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
      <Stack direction="row" height="80px">
        <Box display="flex" bgcolor="#3AAFA9" flex={10} justifyContent="left">
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
        </Box>
        <Box display="flex" bgcolor="#2B7A78" flex={6} justifyContent="right">
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
        </Box>
      </Stack>
    </Box>
  )
}

export default Navbar
