import React from 'react'
import TopRight from './TopRight'
import TopLeft from './TopLeft'
import { Stack } from '@mui/material'

const Intro = () => {
  return (
    <Stack direction="row" sx={{ position: 'relative' }}>
      <TopLeft />
      <img
        className="profile"
        src="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709747635/uhjohchdi1nsdjzuccyk.jpg"
        height="300px"
        width="300px"
      ></img>
      <TopRight />
    </Stack>
  )
}

export default Intro
