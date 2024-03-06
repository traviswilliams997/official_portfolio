import React from 'react'
import ProjectImage from './/ProjectImage'
import ProjectInfo from './ProjectInfo'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import '../app.css'

const Projects = ({}) => {
  const [volunteeringStack, setVolunteeringStack] = useState([
    'REACT',
    'MUI',
    'REDUX',
    'NODE',
    'EXPRESS',
    'POSTGRES',
  ])
  const [scrapeStack, setScrapeStack] = useState([
    'REACT',
    'MUI',
    'REDUX',
    'NODE',
    'EXPRESS',
    'CHEERIO',
  ])

  const [etchStack, setEtchStack] = useState(['HTML', 'CSS', 'JAVASCRIPT'])
  return (
    <Box>
      {' '}
      <Stack direction="row">
        <ProjectImage imgUrl="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709589357/veprlo1rwdkwe3fplt38.png" />
        <ProjectInfo
          text={
            'A platform to find volunteering agencies and events near you, post about your good deeds and make lasting connections. This project was inspired by my, and other students, difficulties in finding a place to volunteer for UTechs community service module.'
          }
          title={'Jamaica Volunteering Platform'}
          repoLink={
            'https://github.com/traviswilliams997/jamaica_volunteer_platform'
          }
          liveDemoLink={'https://jamaica-volunteer-platform.fly.dev/'}
          stack={volunteeringStack}
        />
      </Stack>
      <Stack direction="row">
        <ProjectInfo
          text={
            "This website scrapes job postings from the official Jamaican Ministry's career pages; so you can easily find them all in one place."
          }
          title={'MINISTRY JOBS JA'}
          repoLink={'https://github.com/traviswilliams997/Ministry-Jobs-JA'}
          liveDemoLink={'https://traviswilliams997.github.io/ETCH-A-SKETCH/'}
          stack={scrapeStack}
        />
        <ProjectImage imgUrl="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709723720/zing3ta5hvavxlbdzan2.png" />
      </Stack>
      <Stack direction="row">
        <ProjectImage imgUrl="https://res.cloudinary.com/ddrcxv4fg/image/upload/v1709724792/gkanyyhlgjsozmsbo47h.png" />
        <ProjectInfo
          text={
            'A fun little website where you can draw in the sand. This was project assigned in The Odin Project foundations section. Where I first learnt HTML, CSS and Javascript'
          }
          title={'Etch-A-Sketch'}
          repoLink={'https://github.com/traviswilliams997/ETCH-A-SKETCH'}
          liveDemoLink={'https://traviswilliams997.github.io/ETCH-A-SKETCH/'}
          stack={etchStack}
        />
      </Stack>
    </Box>
  )
}

export default Projects