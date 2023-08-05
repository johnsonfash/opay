import { Tabs } from "expo-router";
import { tabOptions } from "../../lib/tabs";
import { Text } from "native-base";

const TabsLayout = () => {
  return <Tabs screenOptions={tabOptions}>
    <Tabs.Screen name='index' options={{ tabBarLabel: ({ focused: f }) => <Text fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Home</Text> }} />
    <Tabs.Screen name='rewards' options={{ tabBarLabel: ({ focused: f }) => <Text fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Rewards</Text> }} />
    <Tabs.Screen name='finance' options={{ tabBarLabel: ({ focused: f }) => <Text fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Finance</Text> }} />
    <Tabs.Screen name='cards' options={{ tabBarLabel: ({ focused: f }) => <Text fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Cards</Text> }} />
    <Tabs.Screen name='me' options={{ tabBarLabel: ({ focused: f }) => <Text fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Me</Text> }} />
  </Tabs>;
};

export default TabsLayout;
