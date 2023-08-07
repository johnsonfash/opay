import { Box, FlatList, HStack } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import CaroselView from './caroselView';
import { InterfaceFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types';

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

let m = 0
function Carosel() {
  const [index, setIndex] = useState(0)
  const caroselRef = useRef<any>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setTimeout(() => {
      console.log((Object.keys(caroselRef.current) as any))
      // console.log((Object.keys(caroselRef.current?.updater) as any))

    }, 3000)
  }, [])

  useEffect(() => {
    // timer.current = setTimeout(autoPlay, 2000)

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const scrollList = () => {
    // caroselRef.current.scro 
  }

  const autoPlay = () => {

  }

  return (
    <Box position='relative'>
      <FlatList
        ref={function (ref: any) { caroselRef.current = ref } as any}
        horizontal
        pagingEnabled
        onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const slideSize = e.nativeEvent.layoutMeasurement.width;
          const index = e.nativeEvent.contentOffset.x / slideSize;
          const roundIndex = Math.round(index);
          const distance = Math.abs(roundIndex - index);
          const changeIndex = 0.4 > distance
          if (changeIndex) setIndex(roundIndex)
        }}
        scrollEventThrottle={100}
        removeClippedSubviews={true}
        data={DATA}
        getItemLayout={(_: any, index: number) => ({
          index,
          length: width,
          offset: index * width
        })}
        renderItem={({ item }) => <Box px='4' width={width}><CaroselView data={item} /></Box>}
      />
      <HStack
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='absolute'
        bottom='3px'>
        {
          DATA.map((_, i) =>
            <Box key={i} mr='10px' width='8px' height='8px' rounded='full' bg={i === index ? 'gray.400' : 'gray.300'}></Box>
          )
        }
      </HStack>
    </Box>
  )
}

export default Carosel