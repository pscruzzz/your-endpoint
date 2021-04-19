import React from 'react'
import { Text, Flex, Box, Image } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Flex
      align="flex-start"
      justify="space-between"
      position="relative"
      w="100%"
      mt="2.5vh"
      mb="2.5vh"
    >
      <Box minWidth="50%" h="100%">
        <Image src="/assets/logo.svg" alt="Logo" maxWidth="270px" />
      </Box>
      <Box
        position="absolute"
        left={['15%', '15%', '15%', '10rem']}
        bottom="0rem"
      >
        <Text color="gray.500" fontSize={['2.2rem']}>
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
  )
}

export default Header
