import MateriaIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { Box, Center, HStack, Icon, Text } from 'native-base'
import React from 'react'

function SectionOneLinkOne() {
  return (
    <HStack justifyContent='space-between' >
      <Center w='1/4' >
        <Box position='relative' pb='1'>
          <Box zIndex='2' px='4px' py='3px' borderRightRadius={10} borderTopLeftRadius={7} left='30%' bg='red.500' position='absolute' bottom='115%'>
            <Text color='white' fontSize='8px'>Up to 6%</Text>
          </Box>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Box bg='app.splashGreen' height='63%' width='45%' borderRadius='3px' display='flex' justifyContent='center' alignItems='center'>
              <Icon as={MateriaIcon} name='signal-cellular-outline' size='10px' color='white' />
            </Box>
          </Box>
        </Box>
        <Text fontSize={12}>Airtime</Text>
      </Center>
      <Center w='1/4'>
        <Box position='relative' pb='1'>
          <Box zIndex='2' px='4px' py='3px' borderRightRadius={10} borderTopLeftRadius={7} left='30%' bg='red.500' position='absolute' bottom='115%'>
            <Text color='white' fontSize='8px'>Up to 6%</Text>
          </Box>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Box bg='app.splashGreen' height='63%' width='45%' borderRadius='3px' display='flex' justifyContent='center' alignItems='center'>
              <Icon as={MateriaIcon} name='arrow-collapse' size='10px' color='white' />
            </Box>
          </Box>
        </Box>
        <Text fontSize={12}>Data</Text>
      </Center>
      <Center w='1/4' >
        <Box position='relative' pb='1'>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='basketball' size='23px' color='app.splashGreen' />
          </Box>
        </Box>
        <Text fontSize={12}>Betting</Text>
      </Center>
      <Center w='1/4' >
        <Box position='relative' pb='1'>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='youtube-tv' size='23px' color='app.splashGreen' />
          </Box>
        </Box>
        <Text fontSize={12}>TV</Text>
      </Center>
    </HStack>
  )
}

export default SectionOneLinkOne