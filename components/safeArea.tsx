import { StatusBar } from 'expo-status-bar';
import { Flex, useColorModeValue } from 'native-base';
import { ReactNode } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const SafeArea = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("white", "black");
  return <Flex flex={1} bg={bg} paddingTop={initialWindowMetrics?.insets.top}>
    <StatusBar animated translucent style={bg === 'white' ? 'dark' : 'light'} />
    {children}
  </Flex>;
};

export default SafeArea;
