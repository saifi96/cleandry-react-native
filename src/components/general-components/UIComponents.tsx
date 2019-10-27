import React from "react";
import { Thumbnail, View, Button } from "native-base";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { globalColors } from "../../styles/color-style";


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
            borderColor: globalColors.lightGray2
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