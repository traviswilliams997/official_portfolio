import {
  Box,
  Stack,
  Typography,
  Button,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import FlexBetween from './FlexBetween'
import { styled } from '@mui/system'
import { useState } from 'react'
import { theme } from '../theme'

const Navbar = () => {
  const dark = theme.palette.primary.dark
  const secondMain = theme.palette.secondary.main
  const secondLight = theme.palette.secondary.light
  const main = theme.palette.primary.main
  const light = theme.palette.primary.light

  const isDisplayResume = useMediaQuery('(min-width:1900px)')
  const isDisplayContact = useMediaQuery('(min-width:1300px)')
  const isDispayLinks = useMediaQuery('(min-width:1100px)')
  const isDisplay = useMediaQuery('(min-width:1100px)')

  const [open, setOpen] = useState(false)

  const NavLink = styled(Link)(({}) => ({
    color: secondLight,
    fontWeight: '500',
    marginLeft: '20px',
    marginRight: '20px',
    textDecoration: 'none',
    '&:hover': { borderBottom: `3px solid ${secondLight}` },
  }))

  const MenuLink = styled(Link)(({}) => ({
    color: dark,
    fontWeight: '500',
    textDecoration: 'none',
    '&:hover': { borderBottom: `3px solid ${dark}` },
  }))

  return (
    <Box>
      <Stack direction="row" height="80px" sx={{ position: 'relative' }}>
        <Box
          display="flex"
          bgcolor={main}
          flexBasis={isDispayLinks ? '62.5%' : '100%'}
          justifyContent={'space-between'}
        >
          <Stack>
            {' '}
            <Typography
              variant="h3"
              fontWeight={700}
              color={light}
              mt="20px"
              ml="135px"
              sx={{ '&:hover': { color: dark } }}
              id="home"
            >
              {' '}
              TRAVIS WILLIAMS
            </Typography>
          </Stack>
          {!isDispayLinks && (
            <Box mt="19px">
              <MenuIcon
                onClick={() => setOpen(true)}
                sx={{ height: '60px', width: '60px', color: light }}
              />
              <Menu
                id="positioned-menu"
                aria-labelledby="positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem>
                  <MenuLink variant="h5" href="#home">
                    Home
                  </MenuLink>{' '}
                </MenuItem>
                <MenuItem>
                  <MenuLink variant="h5" href="#projects">
                    Projects
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <MenuLink variant="h5" href="#about">
                    About{' '}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <MenuLink variant="h5" href="#contact">
                    Contact{' '}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <MenuLink
                    variant="h5"
                    href="https://drive.google.com/file/d/1P_1hzu4vILGWtwHoQL7mOWAxXd8KvVWj/view?usp=drive_link"
                  >
                    Resume{' '}
                  </MenuLink>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
        {isDispayLinks && (
          <Box
            sx={{ display: isDisplay ? 'flex' : 'none' }}
            bgcolor={secondMain}
            flexBasis="37.5%"
            justifyContent="right"
          >
            <Stack mt="10px">
              <FlexBetween pt="5px">
                <NavLink variant="h4" href="#projects">
                  Projects
                </NavLink>
                <NavLink variant="h4" href="#about">
                  About
                </NavLink>
                {isDisplayContact && (
                  <NavLink variant="h4" href="#contact">
                    Contacts
                  </NavLink>
                )}
                {isDisplayResume && (
                  <Button
                    sx={{
                      bgcolor: dark,
                      pl: '20px',
                      pr: '20px',
                      mr: '50px',
                      ml: '50px',
                      display: { md: 'none', lg: 'block' },
                    }}
                  >
                    <Link
                      color={secondLight}
                      variant="h5"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: dark,
                          fontWeight: '900',
                        },
                      }}
                      fontWeight={700}
                      href="https://drive.google.com/file/d/1P_1hzu4vILGWtwHoQL7mOWAxXd8KvVWj/view?usp=drive_link"
                    >
                      Resume
                    </Link>
                  </Button>
                )}
              </FlexBetween>
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default Navbar
