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
  VStack
} from '@chakra-ui/react'
import Header from '../components/Header'

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
        h="100vh"
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
            direction="row"
            align="flex-end"
            justify="space-between"
            w="100%"
            className="SignWrapper"
          >
            <Flex
              direction={{ xs: 'column', lg: 'row' }}
              w="60%"
              h="60vh"
              className="SignBox"
            >
              <Flex
                as="form"
                className="SignIn"
                w={{ xs: '100%', lg: '65%' }}
                bg="gray.300"
                borderRadius="1.5rem 0rem 0rem 1.5rem"
                align="center"
                justify="center"
              >
                <VStack w="70%" h="100%">
                  <VStack w="100%" h="66.66%" align="center" justify="center">
                    <FormControl
                      id="email"
                      display="flex"
                      flexDirection="column"
                      h="fit-content"
                      w="100%"
                    >
                      <FormLabel w="fit-content">Your email</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl
                      id="password"
                      display="flex"
                      flexDirection="column"
                      h="fit-content"
                      w="100%"
                    >
                      <FormLabel w="fit-content">Your password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                  </VStack>
                  <Flex
                    align="center"
                    justify="space-between"
                    marginTop="0px"
                    w="100%"
                    h="33.33%"
                  >
                    <Button variant="ghost" size="lg" type="submit" w="70%">
                      Your Click
                    </Button>
                    <Heading>OR</Heading>
                  </Flex>
                </VStack>
              </Flex>
              <Flex
                direction="column"
                className="SignUp"
                w={{ xs: '100%', lg: '35%' }}
                bg="gray.200"
                justify="space-around"
                align="center"
                borderRadius="0rem 1.5rem 1.5rem 0rem"
              >
                <Flex
                  direction="column"
                  h="33%"
                  align="center"
                  justify="center"
                >
                  <Text textAlign="center" fontSize="3rem">
                    your step to
                  </Text>
                  <Heading textAlign="center" fontSize="3rem">
                    signUp
                  </Heading>
                </Flex>
                <Flex
                  direction="column"
                  h="33%"
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
                <Flex h="33%" align="center" justify="center">
                  <Button variant="ghost" size="lg">
                    Your Chance
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex justify="flex-end" w="38%">
              <Image
                src="/assets/HomeBoy.svg"
                alt="Endpoint Boy"
                maxWidth="480px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
