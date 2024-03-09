import React from 'react'
import TopRight from './TopRight'
import TopLeft from './TopLeft'
import { Stack, useMediaQuery } from '@mui/material'

const Intro = () => {
  const isDispay = useMediaQuery('(min-width:1100px)')

  return (
    <Stack direction="row" sx={{ position: 'relative' }}>
      <TopLeft />
      {isDispay && (
        <img
          className="profile"
          src="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709747635/uhjohchdi1nsdjzuccyk.jpg"
          height="450px"
          width="450px"
        ></img>
      )}
      <TopRight />
    </Stack>
  )
}

export default Intro
