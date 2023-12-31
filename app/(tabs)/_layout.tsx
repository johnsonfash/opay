import { Tabs } from "expo-router";
import { Text } from "native-base";
import { tabOptions } from "../../lib/tabs";

const TabsLayout = () => {
  return <Tabs screenOptions={tabOptions}>
    <Tabs.Screen name='index' options={{ tabBarLabel: ({ focused: f }) => <Text paddingBottom={1} fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Home</Text> }} />
    <Tabs.Screen name='rewards' options={{ tabBarLabel: ({ focused: f }) => <Text paddingBottom={1} fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Rewards</Text> }} />
    <Tabs.Screen name='finance' options={{ tabBarLabel: ({ focused: f }) => <Text paddingBottom={1} fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Finance</Text> }} />
    <Tabs.Screen name='cards' options={{ tabBarLabel: ({ focused: f }) => <Text paddingBottom={1} fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Cards</Text> }} />
    <Tabs.Screen name='me' options={{ tabBarLabel: ({ focused: f }) => <Text paddingBottom={1} fontWeight='bold' color={f ? 'app.splashGreen' : 'gray.400'} fontSize='10px'>Me</Text> }} />
  </Tabs>;
};

export default TabsLayout;
