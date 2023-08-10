import { StatusBar } from 'expo-status-bar';
import { Flex, useColorModeValue } from 'native-base';
import { ReactNode } from 'react';

const SafeArea = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("light.50", "black");
  return <Flex flex={1} bg={bg}>
    <StatusBar animated translucent style={bg === 'light.50' ? 'dark' : 'light'} />
    {children}
  </Flex>;
};

export default SafeArea;
