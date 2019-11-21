import React, { useState } from 'react';
import { View, Input, Text } from 'native-base';
import GlobalStyle from '../../styles/GlobalStyle';
import ColorConstants from '../../core/constants/ColorConstants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export const RateReviewComponent = () => {
    const [state, setState] = useState(0);
    const aryRateStar = new Array<number>(5).fill(0);


    function onRatingClick() {
        console.log("executed");
    }

    return (
        <View style={[GlobalStyle.borderRadiusM, GlobalStyle.bgLighGray, GlobalStyle.paddingL]}>
            <Text style={[styles.sectionTitle]}>Rate &amp; Review</Text>
            <Input
                multiline={true}
                numberOfLines={3}
                style={[GlobalStyle.borderRadiusS, { backgroundColor: ColorConstants.white, marginVertical: 10 }]}
            />
            <View style={{ flexDirection: "row" }}>

                {
                    aryRateStar.map((iStar, idx) =>
                        <FontAwesome
                            size={35}
                            name="start-o"
                            style={[styles.marginRight]}
                            onPress={onRatingClick}
                        />
                    )
                }

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    marginRight: {
        marginRight: 10,
    },
    ratedStar: {
        color: ColorConstants.danger
    },
    unRatedStar: {
        color: ColorConstants.placeholderText
    },
    sectionTitle: {
        color: ColorConstants.primary,
        marginBottom: 5
    },
})