import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { colorModeManager, config } from '../source__/utils/Theme';
import { StatusBar } from 'expo-status-bar';

const StackLayout = () => {
  return (
    <NativeBaseProvider config={config} colorModeManager={colorModeManager}>
      <StatusBar  style='dark'/>
      <Stack
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="{tabs)" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </NativeBaseProvider>
  );
};

export default StackLayout;
