import React from "react";
import { Thumbnail, View, Button } from "native-base";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { ColorConstants } from "../../core/constants/ColorConstants";


interface IGridButtonProps {
    iconSource: ImageSourcePropType;
    title: string;
    onClick?: Function;
}

export const GridButton = (props: IGridButtonProps) => {
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
                    source={props.iconSource}
                />
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}