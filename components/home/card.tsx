import MateriaIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { Box, HStack, Icon, Pressable, Text } from 'native-base';
import React, { useState } from 'react';

function HomeCard() {
  const [showAmount, setShowAmount] = useState(false);

  return (
    <Box px='22px' pt='3' pb='4' borderRadius='10' bg='app.splashGreen'>
      <HStack alignItems='center' color='white' justifyContent='space-between'>
        <HStack alignItems='center'>
          <Text fontSize={13} mr='5px' color='white' fontWeight={500}>Available Balance</Text>
          <Pressable onPress={() => setShowAmount(!showAmount)}>
            <Icon as={MateriaIcon} name={showAmount ? 'eye' : 'eye-off-outline'} size='18px' color='white' />
          </Pressable>
        </HStack>
        <HStack alignItems='center'>
          <Text fontSize={15} color='white' mr='4px' fontWeight={500}>Transaction History</Text>
          <Icon as={MateriaIcon} name='chevron-right' size='15px' color='white' />
        </HStack>
      </HStack>
      <HStack alignItems='baseline'>
        <Text color='white' fontSize='2xl' mr='8px' lineHeight='xs' fontWeight='bold'>{showAmount ? '₦' : ''}</Text>
        <Text color='white' fontSize='4xl' lineHeight='sm' fontWeight='800'>{showAmount ? '17,355,200.' : '****'}</Text>
        <Text color='white' fontSize='2xl' lineHeight='xs' fontWeight='bold'>{showAmount ? '90' : ''}</Text>
      </HStack>
      <HStack>
        <Text fontSize={13} color='white' fontWeight={500}>& Cashback </Text>
        <Text fontSize={13} color='white' fontWeight={500}>{showAmount ? '₦300.00' : '****'}</Text>
      </HStack>
      <HStack mt='6' justifyContent='space-between'>
        <Link href='/'>
          <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box height={8} borderRadius='lg' width={8} bg='white' mb='1' display='flex' alignItems='center' justifyContent='center'>
              <Text textAlign='center' position='absolute' pb='1' fontSize='25px' color='app.splashGreen'>+</Text>
            </Box>
            <Text color='white' fontSize={13} fontWeight={500}>Add money</Text>
          </Box>
        </Link>
        <Link href='/'>
          <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box height={8} borderRadius='lg' width={8} bg='white' mb='1' display='flex' alignItems='center' justifyContent='center'>
              <Icon as={MateriaIcon} name='arrow-collapse' size='20px' color='app.splashGreen' />
            </Box>
            <Text color='white' fontSize={13} fontWeight={500}>Transfer</Text>
          </Box>
        </Link>
        <Link href='/'>
          <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box height={8} borderRadius='lg' width={8} bg='white' mb='1' display='flex' alignItems='center' justifyContent='center'>
              <Icon as={MateriaIcon} name='arrow-top-right' size='20px' color='app.splashGreen' />
            </Box>
            <Text color='white' fontSize={13} fontWeight={500}>Withdraw</Text>
          </Box>
        </Link>
      </HStack>
    </Box>
  )
}

export default HomeCard