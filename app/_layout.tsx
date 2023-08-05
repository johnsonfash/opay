import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { colorModeManager, config, theme } from '../lib/nativeBase';
import SafeArea from '../components/safeArea';

const StackLayout = () => {
  return (
    <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
      <SafeArea>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </Stack>
      </SafeArea>
    </NativeBaseProvider>
  );
};

export default StackLayout;
