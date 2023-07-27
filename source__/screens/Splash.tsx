import { Box, Flex, HStack, Image, Text, useColorMode } from 'native-base';
import React, { useEffect } from 'react';
import { ReactNativeProp } from '../common';
import CONST from '../utils/Constant';

const Splash = ({ navigation }: ReactNativeProp) => {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Home');
    }, 5000);
  }, [navigation]);

  return (
    <Flex flex='1' alignItems='center' justifyContent='center' bg={CONST.SPLASH_GREEN}>
      <Box width='70px' height='70px' rounded='full' overflow='hidden'>
        <Image source={require('../assets/opay.jpg')} height='100%' width='100%' resizeMode='cover' alt='' />
      </Box>
      <Text color='blue.900' fontWeight='extrabold' fontSize='2xl'>We are Beyond Banking</Text>
      <HStack alignItems='center' mt='10'>
        <Box display='inline-block' width='40px' height='40px' rounded='full' overflow='hidden'>
          <Image source={require('../assets/coat_of_arm.png')} height='100%' width='100%' resizeMode='cover' alt='' />
        </Box>
        <Text fontSize='10px' mx='1' color='black' fontWeight='extrabold'>LICENSED BY CDN AND INSURED BY</Text>
        <Box display='inline-block' width='70px' height='19px'>
          <Image source={require('../assets/ndic.png')} height='100%' width='100%' resizeMode='contain' alt='' />
          <Text color='blue.900' fontSize='3.1px' fontWeight='extrabold'>Nigeria Deposit Insurance Corperation</Text>
          <Text color='green.700' fontSize='2.8px' textAlign='right' mr='2' fontWeight='extrabold'>Protecting your bank deposits</Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Splash;
