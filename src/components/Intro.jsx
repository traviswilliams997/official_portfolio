import React from 'react'
import TopRight from './TopRight'
import TopLeft from './TopLeft'
import { Stack, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
const Intro = () => {
  const isDispay = useMediaQuery('(min-width:1100px)')

  return (
    <Stack direction="row" sx={{ position: 'relative' }}>
      <TopLeft />

      {isDispay && (
        <motion.img
          className="profile"
          src="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709747635/uhjohchdi1nsdjzuccyk.jpg"
          height="450px"
          width="450px"
          initial={{
            x: +500,
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
        ></motion.img>
      )}
      <TopRight />
    </Stack>
  )
}

export default Intro
