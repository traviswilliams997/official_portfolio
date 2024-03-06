import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  Divider,
  Link,
} from '@mui/material'
import { EditOutlined } from '@mui/icons-material'
import { Formik } from 'formik'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import FlexBetween from './FlexBetween'

const Contact = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const form = useRef()

  const schema = yup.object().shape({
    user_name: yup.string().required('Required'),
    user_email: yup.string().email('Invalid email').required('Required'),
    message: yup.string().required('Required'),
  })

  const initialValues = {
    user_name: '',
    user_email: '',
    message: '',
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    sendEmail()
    onSubmitProps.resetForm()
  }

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      bgcolor="#17252A"
      flex={1}
      p="80px"
    >
      <Typography variant="h3" color="#3AAFA9">
        CONTACT ME
      </Typography>{' '}
      <Box p="1rem 0" mt="20px" width={'22vw'}>
        <Typography variant="h4" color={'#3AAFA9'} fontWeight="500" mb="1rem">
          Socials
        </Typography>

        <FlexBetween gap="1rem" mb="1rem">
          <FlexBetween gap="1rem">
            <img
              height="50px"
              width="50px"
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
              alt="linkedin"
            />
            <Link
              href={'https://linkedin.com/in/travis-travis'}
              sx={{ textDecoration: 'none' }}
              color="inherit"
            >
              <Typography variant="h5" color={'#DEF2F1'} fontWeight="500">
                LinkedIn
              </Typography>
            </Link>
          </FlexBetween>
          <Link
            href={'https://linkedin.com/in/travis-travis'}
            sx={{ textDecoration: 'none' }}
            color="inherit"
          >
            <EditOutlined sx={{ color: '#DEF2F1' }} />
          </Link>
        </FlexBetween>
        <FlexBetween gap="1rem" mb="1rem">
          <FlexBetween gap="1rem">
            <img
              height="50px"
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
              alt="twitter"
            />
            <Link
              href={'https://twitter.com/travis_87x'}
              sx={{ textDecoration: 'none' }}
              color="inherit"
            >
              <Typography variant="h5" color={'#DEF2F1'} fontWeight="500">
                Twitter
              </Typography>
            </Link>
          </FlexBetween>
          <Link
            href={'https://twitter.com/travis_87x'}
            sx={{ textDecoration: 'none' }}
            color="inherit"
          >
            <EditOutlined sx={{ color: '#DEF2F1' }} />
          </Link>
        </FlexBetween>
      </Box>
      <Divider color="white" />
      <Box mt="20px" width={'22vw'}>
        <Typography variant="h4" color={'#3AAFA9'} fontWeight="500">
          Email
        </Typography>{' '}
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form ref={form} onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                <TextField
                  label="Your Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.user_name}
                  name="user_name"
                  error={
                    Boolean(touched.user_name) && Boolean(errors.user_name)
                  }
                  helperText={touched.user_name && errors.user_name}
                  sx={{ gridColumn: 'span 4', bgcolor: '#DEF2F1' }}
                />{' '}
                <TextField
                  label="Your Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.user_email}
                  name="user_email"
                  error={
                    Boolean(touched.user_email) && Boolean(errors.user_email)
                  }
                  helperText={touched.user_email && errors.user_email}
                  sx={{ gridColumn: 'span 4', bgcolor: '#DEF2F1' }}
                />
                <TextField
                  label="Message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  multiline
                  error={Boolean(touched.message) && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                  sx={{ gridColumn: 'span 4', bgcolor: '#DEF2F1' }}
                />
              </Box>

              {/* BUTTONS */}
              <Box>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    m: '2rem 0',
                    p: '1rem',
                    backgroundColor: '#2B7A78',
                    color: 'white',
                    '&:hover': { color: 'white', backgroundColor: '#3AAFA9' },
                  }}
                >
                  {'SEND'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default Contact
