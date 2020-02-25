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
    gridColContent: {
        alignItems: "center",
        margin: 5
    },
    blockElement: {
        flex: 1, flexDirection: 'row'
    },
    gridButton: {
        borderRadius: 5,
        padding: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: ColorConstants.lightGray2,
        width: '100%'
    },
    gridButtonTitle: {
        marginTop: 5,
        fontWeight: '500'
    },
    listItemNarrow: {
        marginBottom: 8,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 5
    },
    horizontalElmSeparator: {
        marginLeft: 5,
        marginRight: 5
    }
});

export default GlobalStyle;