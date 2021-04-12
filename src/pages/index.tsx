import React from 'react'
import Head from 'next/head'

import { Text, Flex, Box, Image } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Head>
        <title>Homepage</title>
      </Head>

      <Flex maxWidth="1450px" w="100%" align="center" justify="center">
        <Flex direction="column" align="center" justify="center">
          <Image src="/assets/logo.svg" alt="Logo" />
          <Text color="gray.500" fontSize="2rem">
            life, just like requests, goes by every ms.
          </Text>
        </Flex>
        <Image src="/assets/arrowFlag.svg" alt="Logo" />
      </Flex>
    </Flex>
  )
}

export default Home
