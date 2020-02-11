import React, { useState } from "react";
import { Thumbnail, View, Button } from "native-base";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import ColorConstants from "../../core/constants/ColorConstants";
import ImgPathConstants from "../../core/constants/ImgPathConstants";


interface IGridButtonProps {
    iconSource: ImageSourcePropType;
    title: string;
    onClick?: Function;
}

export const GridButton = (props: IGridButtonProps) => {
    const [state, setState] = useState({ imageSource: props.iconSource })
    function onImageLoadFailed() {
        setState({ ...state, imageSource: ImgPathConstants.serviceIcons.default })
    }
    return (
        <View style={{
            borderRadius: 5, padding: 3,
            borderWidth: 1,
            borderColor: ColorConstants.lightGray2
        }}>
            <TouchableOpacity
                onPress={() => {
                    if (props.onClick != null) {
                        props.onClick();
                    }
                }}
                style={{ alignItems: "center" }}
            >
                <Thumbnail
                    large
                    square
                    resizeMode="contain"
                    resizeMethod="auto"
                    defaultSource={ImgPathConstants.serviceIcons.washIron}
                    source={state.imageSource}
                    onError={onImageLoadFailed}
                />
                <Text numberOfLines={1} lineBreakMode="tail" adjustsFontSizeToFit={true} ellipsizeMode="tail">{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}