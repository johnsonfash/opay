import { useFonts } from 'expo-font';
import { Box, Flex, ScrollView } from 'native-base';
import { useCallback, useState } from 'react';
import { ImageBackground, RefreshControl } from 'react-native';
import Comfortaa from '../../assets/font/Comfortaa-Bold.ttf';
import HomeCard from '../../components/home/card';
import Carosel from '../../components/home/carosel';
import HomeHeader from '../../components/home/header';
import SectionOneLinkOne from '../../components/home/linksOne';
import SectionOneLinkTwo from '../../components/home/linksTwo';
import Refresh from '../../components/home/refresh';
import SectionThree from '../../components/home/sectionThree';
import CaroselTwo from '../../components/home/caroselTwo';

const Home = () => {
  const [spin, setSpin] = useState(false);
  const [loading, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    Comfortaa,
  });
  const onRefresh = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, []);

  if (!fontsLoaded) return null

  return (

    <Flex flex='1' bg='light.50' safeAreaTop>
      <HomeHeader />
      <ScrollView
        style={{ position: 'relative', paddingTop: 7 }}
        onScrollBeginDrag={() => {
          setSpin(false)
        }}
        onScrollEndDrag={() => {
          setSpin(true)
        }}
        refreshControl={
          <RefreshControl
            tintColor='transparent'
            colors={['transparent']}
            style={{ backgroundColor: 'transparent' }}
            onRefresh={onRefresh} refreshing={loading} />}
      >
        <Refresh spin={spin} loading={loading} />
        <Box px='4'>
          <HomeCard />
          <Box pt='7' pb='3' bg='white' mt='4' borderRadius='10' style={{ shadowColor: '#000', shadowOpacity: 0.01, shadowRadius: 10, shadowOffset: { height: 1, width: 1 } }}>
            <SectionOneLinkOne />
            <SectionOneLinkTwo />
          </Box>
          <SectionThree />
        </Box>
        {/* <Carosel /> */}
        <CaroselTwo />
      </ScrollView>
    </Flex >
  );
};

export default Home;
