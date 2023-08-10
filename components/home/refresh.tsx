import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "native-base";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";

const Refresh = ({ loading, spin }: { loading: boolean, spin: boolean }) => {

  const [val, setVal] = useState(0);
  const [load, setLoad] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  const anim = useRef(
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 360,
        duration: 700,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    )
  ).current

  useEffect(() => {
    setLoad(loading);
    if (loading) {
      spinValue?.addListener(({ value }) => {
        setVal(value)
      })
      if (spin) anim?.start()
    } else {
      anim?.stop()
      spinValue?.setValue(0)
    }
    return () => {
      spinValue?.removeAllListeners()
    }
  }, [loading, spin]);

  return <Box mb='15px'
    height='52px'
    width='100%'
    justifyContent='center'
    position='absolute'
    bottom='100%'
    display={load ? 'flex' : 'none'}
    alignItems='center'>
    <Animated.View
      style={[{ transform: [{ rotate: `${val}deg` }] }, { position: 'absolute', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }]}
    >
      <LinearGradient
        colors={['rgb(39, 186, 110)', 'rgba(39, 186, 110,0.5)', 'rgba(39, 186, 110,0.1)']}
        style={{ width: 50, position: 'absolute', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: '100%' as any }}
      >
      </LinearGradient>
    </Animated.View>
    <Box
      width='40px'
      height='40px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      background='white'
      rounded='full'
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontSize='20px'
        width='33px'
        height='33px'
        backgroundColor='white'
        margin='0'
        rounded='full'
        style={{ shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 1, shadowOffset: { height: 2, width: -1 } }}
      ><Text
        fontFamily='Comfortaa'
        fontWeight='bold'
        fontSize='20px'
        position='relative'
        bottom='2px'
        color='app.splashGreen'
      >p</Text></Box>
    </Box>
  </Box>
};

export default Refresh;
