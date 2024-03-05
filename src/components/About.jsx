import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      bgcolor="#3AAFA9"
      flex={1}
    >
      <Typography variant="h2" color="#17252A">
        ABOUT
      </Typography>
      <Typography variant="h5" color="#17252A" width="50vw">
        <b>I Am Grateful.</b> I am grateful for many things, but I am
        particularly grateful to all: engineers, inventors and scientists; past
        and present. <b>I Am</b> repaying this gratitude by,{' '}
        <b> Dedicating My Life To Engineering</b>. Not just engineering, but
        Solving problems and creating value. <b>I Am</b> allocating my fintite
        time on earth to
        <b> Helping Improve The Lives Of Others</b>, in ways they do not yet
        think is possible. Many things we take for granted today were thought to
        be impossible. Unimaginable even. To this end of contribting to society,
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
