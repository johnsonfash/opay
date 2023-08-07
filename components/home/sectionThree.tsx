import { Box, HStack, Icon, Text } from 'native-base'
import React from 'react'
import MateriaIcon from '@expo/vector-icons/MaterialCommunityIcons'

function SectionThree() {
  return (
    <Box px='4' position='relative' py='3' bg='white' mt='2' borderRadius='10' style={{ shadowColor: '#000', shadowOpacity: 0.01, shadowRadius: 10, shadowOffset: { height: 1, width: 1 } }}>
      <HStack alignItems='center'>
        <Box mr='18px' height='32px' width='32px' display='flex' alignItems='center' justifyContent='center' position='relative' rounded='full' bg='green.100' borderColor='green.400' borderWidth='1px' borderStyle='solid'>
          <Icon as={MateriaIcon} name='volume-medium' size='30px' color='app.splashGreen' />
          <Box bottom='5px' left='4px' height='11px' width='11px' borderColor='green.100' borderWidth='1px' borderStyle='solid' position='absolute' rounded='full' bg='app.splashGreen' display='flex' alignItems='center' justifyContent='center' >
            <Text fontSize='8px' left='1.7px' fontWeight='bold' position='absolute' color='white'>₦</Text>
          </Box>
        </Box>
        <Box>
          <Text lineHeight='sm' fontSize={15} fontWeight={500}>Refer & Earn</Text>
          <Text fontSize={13} color='dark.300'>Earn ₦800 Cashback per referral</Text>
        </Box>
      </HStack>
      <Box position='absolute' top='0' p='3px' borderTopRightRadius='10' right='0' bg='gray.200' borderBottomLeftRadius='10'>
        <Icon as={MateriaIcon} name='window-close' size='13px' color='black' />
      </Box>
    </Box>
  )
}

export default SectionThree