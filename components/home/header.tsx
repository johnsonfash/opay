import MateriaIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { Link } from 'expo-router'
import { Box, HStack, Icon, Image, Text } from 'native-base'
import React from 'react'

function HomeHeader() {
  return (
    <HStack bg='light.50' color='dark.100' pb='15px' justifyContent='space-between' px='4'>
      <HStack alignItems='center' display='flex' justifyContent='center'>
        <Box width='60px' height='60px' mr='10px' display='flex' justifyContent='center' alignItems='center'>
          <Image source={require('../../assets/avatar.png')} width='100%' height='100%' alt='' />
        </Box>
        <Text fontSize='18px' fontWeight='bold' >Hi,Tosin</Text>
      </HStack>
      <HStack display='flex' alignItems='center' mt='1'>
        <Link href='/'>
          <Box p='8px'>
            <Icon as={MateriaIcon} name='headset' size='25px' color='dark.100' />
          </Box>
        </Link>
        <Link href='/'>
          <Box p='8px'>
            <Icon as={MateriaIcon} name='line-scan' size='25px' color='dark.100' />
          </Box>
        </Link>
        <Link href=''>
          <Box p='8px'>
            <Icon as={MateriaIcon} name='bell-outline' size='27px' color='dark.100' />
          </Box>
        </Link>
      </HStack>
    </HStack>
  )
}

export default HomeHeader