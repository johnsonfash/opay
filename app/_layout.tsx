import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, useColorModeValue } from 'native-base';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { colorModeManager, config, theme } from '../lib/nativeBase';

const StackLayout = () => {
  const bg = useColorModeValue("light.50", "black");
  useEffect(() => {
    const subscribe = AppState.addEventListener('change', (state) => {
      if (state === 'active') {

      } else if (state === 'inactive') {

      }
      else if (state === 'background') {

      }
    })
    return () => {
      subscribe.remove()
    }
  }, [AppState]);

  return (
    <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
      <StatusBar animated translucent style={bg === 'light.50' ? 'dark' : 'light'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </NativeBaseProvider>
  );
};

export default StackLayout;
