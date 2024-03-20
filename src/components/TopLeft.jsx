import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
const TopLeft = () => {
  const theme = useTheme()

  const main = theme.palette.primary.main
  const dark = theme.palette.primary.dark
  const light = theme.palette.primary.light
  const isDisplayLinks = useMediaQuery('(min-width:1100px)')

  return (
    <Box
      bgcolor={main}
      flex={isDisplayLinks ? 10 : 1}
      height={isDisplayLinks ? '46vh' : '60vh'}
      display="flex"
      justifyContent="center"
    >
      <Stack
        mt="6vh"
        component={motion.div}
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        }}
      >
        <Typography variant={'h1'} fontWeight={700} color={light}>
          Software
        </Typography>
        <Typography variant={'h1'} fontWeight={700} color={light}>
          Engineer.
        </Typography>
        <Typography
          variant={'h4'}
          fontWeight={400}
          color={dark}
          width={isDisplayLinks ? '650px' : '300px'}
        >
          Focused on solving real problems that add measurable gains to the
          bottom line.
        </Typography>
        <Typography
          variant={'h5'}
          fontWeight={100}
          color={dark}
          width={isDisplayLinks ? '650px' : '300px'}
          mt="10px"
        >
          I achieve this by crafting: modular, well tested, maintainable and
          scalelabe software systems.
        </Typography>
      </Stack>
    </Box>
  )
}

export default TopLeft
