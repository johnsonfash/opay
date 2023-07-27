import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorMode } from "native-base";
import type { StorageManager } from "native-base";

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@my-app-color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      if (value) await AsyncStorage.setItem("@my-app-color-mode", value);
    } catch (e) {
    }
  },
};

export const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};