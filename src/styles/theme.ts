import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
        fontSize: '92.5%'
      }
    }
  }
})
export default theme
