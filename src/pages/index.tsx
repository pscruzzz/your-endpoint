import React from 'react'
import Head from 'next/head'

import {
  Text,
  Flex,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Heading,
  Button,
  VStack,
  ResponsiveValue,
  Stack
} from '@chakra-ui/react'
import Header from '../components/Header'

interface IResponsive {
  [key: string]: IResponsiveProperty
}

interface IResponsiveProperty {
  [key: string]: ResponsiveValue<any>
}

const responsive: IResponsive = {
  signWrapper: {
    direction: ['column', 'row', 'row', 'column', 'row'],
    align: ['center', 'flex-end', 'flex-start', 'flex-end', 'flex-end']
  },
  signBox: {
    direction: ['column', 'column', 'column', 'row', 'row'],
    w: ['100%', '48%', '48%', '100%', '58%']
  },
  signIn: {
    w: ['100%', '100%', '100%', '60%', '65%'],
    borderRadius: [
      '1.5rem 1.5rem 0rem 0rem',
      '1.5rem 1.5rem 0rem 0rem',
      '1.5rem 1.5rem 0rem 0rem',
      '1.5rem 0rem 0rem 1.5rem',
      '1.5rem 0rem 0rem 1.5rem'
    ],
    h: ['100%', '70%', '70%', '100%', '100%']
  },
  signUp: {
    w: ['100%', '100%', '100%', '40%', '35%'],
    borderRadius: [
      '0rem 0rem 1.5rem 1.5rem',
      '0rem 0rem 1.5rem 1.5rem',
      '0rem 0rem 1.5rem 1.5rem',
      '0rem 1.5rem 1.5rem 0rem',
      '0rem 1.5rem 1.5rem 0rem'
    ]
  },
  signUpWrapper: {
    direction: ['row', 'row', 'row', 'column'],
    justify: [
      'space-between',
      'space-around',
      'space-between',
      'space-between',
      'space-between'
    ]
  },
  signUpWrapperText: {
    fontSize: ['3rem', '2.5rem', '2.2rem', '3rem']
  },
  middleTextSignUp: {
    display: ['none', 'none', 'none', 'flex', 'flex']
  },
  SVGBoyContainer: {
    w: ['80%', '48%', '48%', '100%', '38%']
  }
}

const Home: React.FC = () => {
  return (
    <Flex align="center" justify="center" w="100vw">
      <Head>
        <title>Homepage</title>
      </Head>
      <Flex
        className="FirstSection"
        direction="column"
        align="center"
        justify="space-between"
        w="95%"
        maxWidth="1440px"
        h="90vh"
      >
        <Header />
        <Flex
          align="center"
          justify="center"
          flex="1"
          w="100%"
          className="SignContainer"
        >
          <Flex
            direction={responsive.signWrapper.direction}
            align={responsive.signWrapper.align}
            justify="space-between"
            w="100%"
            className="SignWrapper"
            h={['100%', '100%', '100%', '100%', '70%']}
          >
            <Flex
              direction={responsive.signBox.direction}
              w={responsive.signBox.w}
              justify="center"
              className="SignBox"
              h={['fit-content', 'fit-content', 'fit-content', '100%']}
            >
              <Flex
                py="2rem"
                as="form"
                className="SignIn"
                w={responsive.signIn.w}
                bg="gray.300"
                borderRadius={responsive.signIn.borderRadius}
                align="center"
                justify="center"
              >
                <VStack
                  w="85%"
                  spacing="3rem"
                  minH="85%"
                  justify="space-between"
                >
                  <VStack
                    spacing="3rem"
                    w="100%"
                    h="66.66%"
                    align="center"
                    justify="center"
                  >
                    <FormControl
                      id="email"
                      display="flex"
                      flexDirection="column"
                      h="fit-content"
                      w="100%"
                    >
                      <FormLabel w="fit-content">Your email</FormLabel>
                      <Input
                        type="email"
                        focusBorderColor="gray.800"
                        variant="outline"
                        size="lg"
                      />
                    </FormControl>
                    <FormControl
                      id="password"
                      display="flex"
                      flexDirection="column"
                      h="fit-content"
                      w="100%"
                    >
                      <FormLabel w="fit-content">Your password</FormLabel>
                      <Input
                        type="password"
                        focusBorderColor="gray.800"
                        variant="outline"
                        size="lg"
                      />
                    </FormControl>
                  </VStack>
                  <Flex
                    align="center"
                    justify="space-between"
                    marginTop="0px"
                    w="100%"
                    h="33.33%"
                  >
                    <Button variant="solid" size="md" maxWidth="90%">
                      Your Click
                    </Button>
                    <Heading>OR</Heading>
                  </Flex>
                </VStack>
              </Flex>
              <Flex
                className="SignUp"
                justify="center"
                align="center"
                w={responsive.signUp.w}
                bg="gray.200"
                py="2rem"
                borderRadius={responsive.signUp.borderRadius}
              >
                <Stack
                  className="SignUpWrapper"
                  w="85%"
                  direction={responsive.signUpWrapper.direction}
                  justify={responsive.signUpWrapper.justify}
                  align="center"
                  minH="85%"
                  h={{ sm: '100%', xl: 'auto' }}
                >
                  <Flex direction="column" align="center" justify="center">
                    <Text
                      textAlign="center"
                      fontSize={responsive.signUpWrapperText.fontSize}
                    >
                      your step to
                    </Text>
                    <Heading
                      textAlign="center"
                      fontSize={responsive.signUpWrapperText.fontSize}
                    >
                      signUp
                    </Heading>
                  </Flex>
                  <Flex
                    direction="column"
                    className="middleTextSignUp"
                    display={responsive.middleTextSignUp.display}
                    align="center"
                    justify="center"
                  >
                    <Text fontSize="2rem" textAlign="center">
                      yes, silly.
                    </Text>
                    <Text fontSize="2rem" textAlign="center">
                      it’s free.
                    </Text>
                  </Flex>
                  <Button variant="solid" size="md" maxWidth="100%">
                    Your Chance
                  </Button>
                </Stack>
              </Flex>
            </Flex>
            <Flex
              className="SVGBoyContainer"
              h={['fit-content', 'fit-content', 'fit-content', 'auto']}
              justify="flex-end"
              align="flex-end"
              w={responsive.SVGBoyContainer.w}
              display={['none', 'flex', 'flex', 'flex']}
            >
              <Image
                src="/assets/HomeBoy.svg"
                alt="Endpoint Boy"
                maxWidth={['700px', '480px', '480px', '700px', '480px']}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
