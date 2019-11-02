import React from 'react';
import { StyleSheet } from 'react-native';
import ColorConstants from '../core/constants/ColorConstants';

const GlobalStyle = StyleSheet.create({
    borderRadiusS: { borderRadius: 5 },
    borderRadiusM: { borderRadius: 10 },
    borderRadiusL: { borderRadius: 15 },
    paddingS: { padding: 3 },
    paddingM: { padding: 5 },
    paddingL: { padding: 8 },
    txtPrimaryColor: { color: ColorConstants.primary },
    containerPadding: {
        padding: 10,
        paddingHorizontal: 15
    },
    verticalSpacing: {
        marginVertical: 10, paddingVertical: 15
    },
    itemSpacing: {
        marginTop: 10,
        marginBottom: 10
    },
    posAsBackground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    posAtBottom: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },
    posRelation: {
        position: "relative"
    },
    textSizeL: {
        fontSize: 26,
        fontWeight: "400"
    },
    textSizeM: {
        fontSize: 18,
        fontWeight: "400"
    },
    textSizeS: {
        fontSize: 14,
        fontWeight: "400"
    },
    errorMessage: {
        color: ColorConstants.danger,
        textAlignVertical: "center",
        marginVertical: 5
    },
    width75Per: {
        width: "75%"
    },
    bgAppPrimary: {
        backgroundColor: ColorConstants.primary
    },
    bgLighGray: {
        backgroundColor: ColorConstants.lightGray1,
    },


});

export default GlobalStyle;