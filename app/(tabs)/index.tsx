import { Box, Flex, ScrollView } from 'native-base';
import HomeCard from '../../components/home/card';
import Carosel from '../../components/home/carosel';
import HomeHeader from '../../components/home/header';
import SectionOneLinkOne from '../../components/home/linksOne';
import SectionOneLinkTwo from '../../components/home/linksTwo';
import SectionThree from '../../components/home/sectionThree';

const Home = () => {
  return (
    <Flex flex='1' bg='light.50'>
      <HomeHeader />
      <ScrollView>
        <Box px='4'>
          <HomeCard />
          <Box pt='7' pb='3' bg='white' mt='4' borderRadius='10' style={{ shadowColor: '#000', shadowOpacity: 0.01, shadowRadius: 10, shadowOffset: { height: 1, width: 1 } }}>
            <SectionOneLinkOne />
            <SectionOneLinkTwo />
          </Box>
          <SectionThree />
        </Box>
        <Carosel />
      </ScrollView>
    </Flex >
  );
};

export default Home;
