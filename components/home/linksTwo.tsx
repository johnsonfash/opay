import MateriaIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { Box, Center, HStack, Icon, Text } from 'native-base'
import React from 'react'

function SectionOneLinkTwo() {
  return (
    <HStack justifyContent='space-between' mt='5'>
      <Center w='1/4'>
        <Box position='relative' pb='1'>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='lightbulb-variant-outline' size='25px' color='app.splashGreen' />
          </Box>
        </Box>
        <Text fontSize={12}>Electricity</Text>
      </Center>
      <Center w='1/4'>
        <Box position='relative' mb='1' bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
          <Box bg='app.splashGreen' height='23px' width='23px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='wifi' size='14px' color='white' />
          </Box>
        </Box>
        <Text fontSize={12}>Internet</Text>
      </Center>
      <Center w='1/4' >
        <Box position='relative' pb='1'>
          <Box bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='school' size='25px' color='app.splashGreen' />
          </Box>
        </Box>
        <Text fontSize={12}>School&Exam</Text>
      </Center>
      <Center w='1/4' >
      <Box position='relative' mb='1' bg='green.100' height='37px' width='37px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
          <Box bg='app.splashGreen' height='23px' width='23px' display='flex' alignItems='center' justifyContent='center' borderRadius='3xl'>
            <Icon as={MateriaIcon} name='arrow-right' size='16px' color='white' />
          </Box>
        </Box>
        <Text fontSize={12}>More</Text>
      </Center>
    </HStack>
  )
}

export default SectionOneLinkTwo