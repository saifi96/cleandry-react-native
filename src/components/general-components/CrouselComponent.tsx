import React, { useState } from "react";
import { View, Thumbnail } from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import ColorConstants from "../../core/constants/ColorConstants";
import BannerModel from "../../core/models/BannerModel";



interface ICarouselProps {
    banners: BannerModel[];
}

export const CarouselComponent = (props: ICarouselProps) => {

    const [state, setState] = useState({
        banners: props.banners ? props.banners : [],
        activeSlideIndex: 0,
        sliderWidth: Dimensions.get("screen").width - 20,
        itemWidth: Dimensions.get("screen").width - 20
    });

    const _renderItem = ({ item, index }: any) => {
        const instanceOfBanner = item as BannerModel
        return (<View>
            <Thumbnail
                resizeMode="cover"
                resizeMethod="auto"
                borderBottomRightRadius={3}
                borderBottomLeftRadius={3}
                borderTopLeftRadius={3}
                borderTopRightRadius={3}
                source={{ uri: instanceOfBanner.pic }}
                style={{ height: 125, width: "100%", flex: 1 }}
            />
        </View>)
    }

    return (

        <View
            onLayout={(event) => {
                setState({
                    ...state,
                    sliderWidth: event.nativeEvent.layout.width,
                    itemWidth: event.nativeEvent.layout.width
                });
            }}
        >
            <Carousel
                autoplay={true}
                autoplayDelay={1000}
                autoplayInterval={2500}
                loop={true}
                sliderWidth={state.sliderWidth}
                itemWidth={state.itemWidth}
                data={state.banners}
                renderItem={_renderItem}
                style={{ backgroundColor: "red" }}
                onSnapToItem={(index) => setState({ ...state, activeSlideIndex: index })}
            />

            <Pagination
                dotsLength={state.banners.length}
                activeDotIndex={state.activeSlideIndex}
                containerStyle={{
                    paddingTop: 3,
                    paddingBottom: 3,
                }}
                dotContainerStyle={{
                    marginRight: 0,
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: ColorConstants.primary
                }}
                inactiveDotStyle={{
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}
