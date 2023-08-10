import { Box } from "native-base";
import { Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import CaroselView from "./caroselView";
const { width } = Dimensions.get("window");

export interface DATAProp {
  type: 'image' | 'icon';
  icon?: string;
  image?: any;
  title: string;
  detail: string
}

const DATA: DATAProp[] = [
  {
    type: 'image',
    title: 'Predict & Win',
    detail: 'Chance to win ₦10,000,000 with free prediction',
    image: require('../../assets/avatar.png')
  },
  {
    type: 'icon',
    icon: 'mobile1',
    title: 'Buy airtime, Get up to 6% cashback',
    detail: 'Get up to 6% cashback instantly on airtime recharge'
  }
]
const CaroselTwo = () => {
  return (
    <Carousel
      autoPlay={true}
      loop
      data={DATA}
      renderItem={({ item }) => <Box px='4' width={width}><CaroselView data={item} /></Box>}
      scrollAnimationDuration={1000}
      width={width}
    >
    </Carousel>);
};

export default CaroselTwo;
