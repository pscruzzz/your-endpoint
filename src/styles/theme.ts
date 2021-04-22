import { extendTheme, Theme } from '@chakra-ui/react'

const theme: Theme = extendTheme({
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
        solid: {
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
        md: {
          fontSize: '2.2rem',
          py: '2rem',
          px: '2.5rem'
        }
      }
    },
    Input: {
      sizes: {
        lg: {
          field: {
            fontSize: '2rem',
            px: '3rem',
            h: '5rem',
            borderRadius: '0.8rem'
          }
        }
      }
    },
    FormLabel: {
      baseStyle: {
        fontSize: '1.8rem',
        fontWeight: '400'
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
        fontSize: ['40%', '45%', '50%', '60%', '62.5%']
      }
    }
  }
})
export default theme
