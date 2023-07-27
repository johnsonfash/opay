import { Tabs } from "expo-router";

const TabsLayout = () => {
  return <Tabs>
    <Tabs.Screen name='index' />
    <Tabs.Screen name='rewards' />
    <Tabs.Screen name='finance' />
    <Tabs.Screen name='cards' />
    <Tabs.Screen name='me' />
  </Tabs>;
};

export default TabsLayout;
