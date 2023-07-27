import { StatusBar } from 'expo-status-bar';
import { Flex, useColorModeValue } from 'native-base';
import { ReactNode } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const SafeArea = ({ children }: { children: ReactNode }) => {
  const bg = useColorModeValue("warmGray.50", "coolGray.800");
  return <Flex flex={1} bg={bg} paddingTop={initialWindowMetrics?.insets.top} paddingBottom={initialWindowMetrics?.insets.bottom}>
    <StatusBar animated translucent style={bg === 'warmGray.50' ? 'dark' : 'light'} />
    {children}
  </Flex>;
};

export default SafeArea;
