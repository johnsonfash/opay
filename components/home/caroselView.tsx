import AntDesign from '@expo/vector-icons/AntDesign'
import { Box, HStack, Icon, Image, Text } from 'native-base'
import React from 'react'
import { DATAProp } from './carosel'

const iconProp = (icon: boolean) => {
  return icon ? {
    bg: 'green.100',
    borderColor: 'green.400',
    borderWidth: '1px',
    height: '32px',
    width: '32px',
    mr: '18px',
    borderStyle: 'solid'
  } : {
    height: '38px',
    mr: '14px',
    width: '38px',
  }
}

function CaroselView({ data }: { data: DATAProp }) {
  return (
    <Box px='4' position='relative' pt='3' pb='2' bg='white' mt='2' borderRadius='10' style={{ shadowColor: '#000', shadowOpacity: 0.01, shadowRadius: 10, shadowOffset: { height: 1, width: 1 } }}>
      <HStack alignItems='center'>
        <Box {...iconProp(!!data?.icon)} overflow='hidden' display='flex' alignItems='center' justifyContent='center' position='relative' rounded='full'>
          {
            data?.image ?
              <Image width='100%' height='100%' source={data?.image} alt='' />
              :
              <Icon as={AntDesign} name={data?.icon} size='18px' color='app.splashGreen' />
          }
        </Box>
        <Box flexShrink='1'>
          <Text lineHeight='sm' fontSize={15} fontWeight={500}>{data?.title}</Text>
          <Text lineHeight='sm' fontSize={13} color='dark.300'>{data?.detail}</Text>
        </Box>
      </HStack >
      <Box position='absolute' top='0' p='3px' borderTopRightRadius='10' right='0' bg='gray.200' borderBottomLeftRadius='10'>
        <Icon as={AntDesign} name='close' size='13px' color='black' />
      </Box>
    </Box >
  )
}

export default CaroselView