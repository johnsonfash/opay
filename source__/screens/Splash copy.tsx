import { Button, Flex, Text, useColorMode, useColorModeValue } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ReactNativeProp } from '../common';
import { StatusBar } from 'expo-status-bar';
import SafeArea from '../components/SafeArea';

const Splash = ({ navigation }: ReactNativeProp) => {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Home');
    }, 5000);
  }, [navigation]);

  return (
    <SafeArea bg={bg}>
      <StatusBar animated translucent style={bg === 'warmGray.50' ? 'dark' : 'light'} />
      <Text>
        {colorMode} {bg}
      </Text>
      <Button onPress={toggleColorMode}>Change Theme Color</Button>
    </SafeArea>
  );
};

export default Splash;
