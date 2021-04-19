import { extendTheme, Theme } from '@chakra-ui/react'

import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  xs: '320px',
  '2xs': '366px',
  sm: '412px',
  '2sm': '501px',
  '3sm': '590px',
  '4sm': '679px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '1440px'
})

const theme: Theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      200: '#F4FDFF',
      300: '#D7E5E9',
      400: '#C0CFD3',
      500: '#8B9A9E',
      800: '#203C44',
      900: '#172A30'
    },
    red: {
      300: '#FF7A7A'
    },
    green: {
      400: '#409B8B'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0.8rem',
        fontWeight: '400',
        transition: '0.2s'
      },
      variants: {
        ghost: {
          color: 'gray.200',
          _hover: {
            bg: 'gray.900'
          },
          _focus: {
            boxShadow: 'none'
          },

          _active: {
            bg: 'gray.300'
          },
          bg: 'gray.800'
        }
      },
      sizes: {
        lg: {
          fontSize: '2.5rem',
          px: '3rem',
          py: '2rem'
        },
        md: {
          fontSize: '1.5rem',
          p: '3rem'
        },
        sm: {
          fontSize: '1rem',
          p: '3rem'
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.400',
        color: 'gray.800'
      },
      html: {
        fontSize: [
          '35%',
          '32.5%',
          '35%',
          '40%',
          '50%',
          '60%',
          '62.5%',
          '62.5%',
          '62.5%',
          '62.5%',
          '62.5%'
        ]
      }
    }
  }
})
export default theme
