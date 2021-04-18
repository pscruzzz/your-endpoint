import React from 'react'
import Head from 'next/head'

import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Text, Flex, Box, Image } from '@chakra-ui/react'

const breakpoints = {
  sm: '2rem',
  md: '2rem',
  lg: '2rem',
  xl: '2rem'
}

const Home: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>Homepage</title>
      </Head>

      <Flex
        maxWidth="1450px"
        w="95%"
        align="flex-start"
        justify="space-between"
        m="1%"
        position="relative"
      >
        <Box minWidth="50%" h="100%">
          <Image src="/assets/logo.svg" alt="Logo" maxWidth="270px" />
        </Box>
        <Box
          position="absolute"
          left={['15%', '15%', '15%', '10rem']}
          bottom="0rem"
        >
          <Text
            color="gray.500"
            fontSize={[
              '1.8rem',
              '2rem',
              '2rem',
              '2rem',
              '2.2rem',
              '2.2rem',
              '2.2rem',
              '2.5rem'
            ]}
          >
            life, just like requests, goes by every ms.
          </Text>
        </Box>
        <Flex minWidth="40%" justify="flex-end">
          <Image
            src="/assets/arrowFlag.svg"
            alt="Logo"
            p="1%"
            w="70%"
            maxWidth="180px"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
