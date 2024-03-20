import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const About = () => {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery('(min-width:1100px)')

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      bgcolor={theme.palette.primary.main}
      flex={1}
      p={isMediumScreen ? '80px' : '20px'}
    >
      <Typography
        variant={'h1'}
        color={theme.palette.primary.dark}
        fontWeight={500}
        pb={isMediumScreen ? '40px' : '10px'}
        id="about"
      >
        ABOUT
      </Typography>
      <Typography
        variant={'h4'}
        color={theme.palette.primary.dark}
        width={isMediumScreen ? '50vw' : '90vw'}
      >
        <b>I Am Grateful.</b> I am grateful for many things, but I am
        particularly grateful to all: engineers, inventors and scientists; past
        and present. <b>I Am</b> repaying this gratitude by,{' '}
        <b> Dedicating My Life To Engineering</b>. Not just engineering, but
        Solving problems and Creating value. <b>I Am</b> allocating my finite
        time on earth to
        <b> Helping Improve The Lives Of Others</b>, in ways they do not yet
        believe is possible. Many things we take for granted today were thought
        to be impossible. Unimaginable even. To this end of contribting to
        society,
        <b>
          I Have Completed A Degree In Electrical And Computer Engineering;{' '}
        </b>
        during which I developed high level problem solving skills.{' '}
        <b>I Then Went On To Self Teach Software Engineering.</b> I seek to
        apply these acquired skills to helping others at scale. I understand
        that many large scale breakthroughs were not done alone, so{' '}
        <b>I Strive To Be A Team Player.</b>
      </Typography>
    </Box>
  )
}

export default About
