import { extendTheme } from '@chakra-ui/react'

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

const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      200: '#F4FDFF',
      300: '#D7E5E9',
      400: '#C0CFD3',
      500: '#8B9A9E',
      800: '#203C44'
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
