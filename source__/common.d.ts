import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ReactNativeProp<T = Record<string, any>> = T &
  NativeStackScreenProps<any>;
