import MatrialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { Box, Icon, Text } from 'native-base';
import Comfortaa from '../assets/font/Comfortaa-Bold.ttf';
import CONST from './constant';

export type TabType = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => BottomTabNavigationOptions

export const tabOptions: TabType = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let [fontsLoaded] = useFonts({
      Comfortaa,
    });

    if (!fontsLoaded) return null

    if (route.name === 'index') {
      return <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontSize='20px'
        width='23px'
        height='23px'
        backgroundColor={focused ? CONST.APP_GREEN : ''}
        position='relative'
        margin='0'
        borderStyle='solid'
        borderRadius='15px'
        borderColor={focused ? 'app.splashGreen' : 'gray.300'}
        borderWidth='2px'
      ><Text
        fontFamily='Comfortaa'
        fontWeight='bold'
        display='flex'
        position='relative'
        bottom='3px'
        fontSize='14px'
        color={focused ? 'white' : 'gray.400'}
      >p</Text></Box>
    } else if (route.name === 'rewards') {
      return <Box><Icon as={MatrialIcon} name={focused ? 'diamond' : 'diamond-outline'} size={25} color={focused ? 'app.splashGreen' : 'gray.400'} /></Box>;
    } else if (route.name === 'finance') {
      return <Box
        bgColor={focused ? 'app.splashGreen' : 'white'}
        borderWidth='2px'
        borderStyle='solid'
        borderRadius='5'
        height='23px'
        width='23px'
        borderColor={focused ? 'app.splashGreen' : 'gray.300'}
      >
        <Icon as={MatrialIcon} name='chart-line-variant' size='18px' color={focused ? 'white' : 'gray.400'} />
      </Box>;
    } else if (route.name === 'cards') {
      return <Icon as={MatrialIcon} name={focused ? 'credit-card' : 'credit-card-outline'} size={25} color={focused ? 'app.splashGreen' : 'gray.400'} />;
    } else {
      return <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontSize='20px'
        backgroundColor={focused ? CONST.APP_GREEN : ''}
        position='relative'
        margin='0'
        width='23px'
        height='23px'
        borderStyle='solid'
        borderRadius='15px'
        borderColor={focused ? 'app.splashGreen' : 'gray.300'}
        borderWidth='2px'
      ><Box
        position='absolute'
        width='8px'
        height='3px'
        borderRadius='10px'
        bottom='4px'
        backgroundColor={focused ? 'white' : 'gray.400'}
      >p</Box></Box >
    }
  },
  tabBarStyle: {
    paddingTop: 7,
    backgroundColor: 'white',
  },
  headerShown: false
})