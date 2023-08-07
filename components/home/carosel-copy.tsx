import { memo, useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

console.log(windowWidth, windowHeight)

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth * 0.8, height: windowHeight * 0.7 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});

const slideList = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=1`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});
type SlideProp = typeof slideList[number]

const Slide = memo(function ({ data }: { data: SlideProp }) {
  return (
    <View style={styles.slide}>
      <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({ index }: { index: number }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s: any) => String(s.id), []),
    // getItemLayout: useCallback(
    //   (_: any, index: number) => ({
    //     index,
    //     length: windowWidth,
    //     offset: index * windowWidth,
    //   }),
    //   []
    // ),
  };

  const renderItem = useCallback(({ item }: { item: SlideProp }) => {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        renderItem={renderItem}
        style={styles.carousel}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        // bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
}
