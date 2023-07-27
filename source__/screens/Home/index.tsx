import React from 'react';
import { Text } from 'native-base';
import SafeArea from '../../components/SafeArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeTab = () => {
  return <Text>Home</Text>
}
const RewardsTab = () => {
  return <Text>Rewards</Text>
}


const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Rewards" component={RewardsTab} />
    </Tab.Navigator>
  );
};

export default Home;
