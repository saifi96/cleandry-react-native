import React from "react";
import { View, List, ListItem, Left, Thumbnail, Body, H3, H2, Button, Text, Form, Item, Input } from "native-base";
import ImgSources from "../../core/img-sources";
import { globalColors } from "../../styles/color-style";
import { StyleSheet } from "react-native";
import UserData from "../../core/data-objects/UserData";
import globalStyle from "../../styles/global-style";
import { NavigateToScreen } from "../navigation-components/AppNavigations";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



interface IProfileViewProps {
    user: UserData;
    navigation: any;
}

export const ProfileViewComponent = (props: IProfileViewProps) => {

    return (
        <View style={[{
            flex: 1, flexDirection: "column", opacity: 0.9,
            paddingVertical: 25,
        }]}>
            <View style={[{
                alignSelf: "center",
                borderWidth: 5,
                borderRadius: 100,
                borderColor: globalColors.primary,
                marginBottom: -75,
                zIndex: 2
            }]}>
                <Thumbnail
                    large
                    resizeMode="contain"
                    style={{ padding: 70, borderRadius: 100 }}
                    source={ImgSources.leftMenuIcons.face}
                />
            </View>

            <View style={[{ backgroundColor: globalColors.lightGray1 }, globalStyle.borderRadiusM]}>

                <List style={{ marginTop: 100 }}>
                    <ListItem
                        thumbnail
                        noBorder={true}
                    >
                        <Left>
                            <FontAwesome5Icon name="user" size={26} color={globalColors.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgSources.profileIcons.user} /> */}
                        </Left>
                        <Body>
                            <H3 style={[profileStyle.textWhite]}>{props.user.FullName}</H3>
                        </Body>
                    </ListItem>
                    <ListItem
                        thumbnail
                        noBorder={true}
                    >
                        <Left>
                            <FontAwesome5Icon name="envelope" size={26} color={globalColors.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgSources.profileIcons.email} /> */}
                        </Left>
                        <Body>
                            <H3 style={[profileStyle.textWhite]}>{props.user.Email}</H3>
                        </Body>
                    </ListItem>
                    <ListItem
                        thumbnail
                        noBorder={true}
                    >
                        <Left>
                            <FontAwesome5Icon name="phone-square" size={30} color={globalColors.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgSources.profileIcons.phone} /> */}
                        </Left>
                        <Body>
                            <H3 style={[profileStyle.textWhite]}>{props.user.Phone}</H3>
                        </Body>
                    </ListItem>
                    <ListItem
                        thumbnail
                        noBorder={true}
                    >
                        <Left>
                            <FontAwesome5Icon name="id-card" size={26} color={globalColors.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgSources.leftMenuIcons.transfer} /> */}
                        </Left>
                        <Body>
                            <H3 style={[profileStyle.textWhite]}>Adhere Number</H3>
                        </Body>
                    </ListItem>
                </List>

                <View style={[globalStyle.verticalSpacing, { alignSelf: "center", flex: 1, flexDirection: "row" }]}>
                    <Button
                        full
                        primary
                        style={[globalStyle.borderRadiusM, globalStyle.width75Per, globalStyle.bgAppPrimary]}
                        onPress={() => {
                            props.navigation.navigate(NavigateToScreen.ProfileEditScreen);
                        }}
                    >
                        <Text uppercase={false} style={globalStyle.textSizeM}>Edit Information</Text>
                    </Button>
                </View>
            </View>
        </View >
    )
}


export const ProfileEditComponent = (props: IProfileViewProps) => {

    return (
        <View style={[{
            flex: 1, flexDirection: "column", opacity: 0.9,
            paddingVertical: 25,
        }]}>
            <View style={[{
                alignSelf: "center",
                borderWidth: 5,
                borderRadius: 100,
                borderColor: globalColors.primary,
                marginBottom: -75,
                zIndex: 2
            }]}>
                <Thumbnail
                    large
                    resizeMode="contain"
                    style={{ padding: 70, borderRadius: 100 }}
                    source={ImgSources.leftMenuIcons.face}
                />
            </View>

            <View style={[{ backgroundColor: globalColors.lightGray1 }, globalStyle.borderRadiusM]}>

                <Form style={[globalStyle.verticalSpacing, { marginTop: 100, paddingHorizontal: 15 }]}>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={globalStyle.textSizeM}
                            placeholder="Name"
                            placeholderTextColor={globalColors.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="user"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={globalStyle.textSizeM}
                            placeholder="Email"
                            placeholderTextColor={globalColors.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="envelope"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={globalStyle.textSizeM}
                            keyboardType="number-pad"
                            placeholder="Phone"
                            placeholderTextColor={globalColors.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="phone-square"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={globalStyle.textSizeM}
                            placeholder="E.g 10-07-1996"
                            placeholderTextColor={globalColors.placeholderText} />
                        <FontAwesome5Icon
                            name="calendar-alt"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                </Form>

                <View style={[globalStyle.verticalSpacing, { alignSelf: "center", flex: 1, flexDirection: "row" }]}>
                    <Button
                        full
                        primary
                        style={[globalStyle.borderRadiusM, globalStyle.width75Per, globalStyle.bgAppPrimary]}
                    >
                        <Text uppercase={false} style={globalStyle.textSizeM}>Save</Text>
                    </Button>
                </View>
            </View>
        </View >
    )
}


const profileStyle = StyleSheet.create({
    textWhite: {
        color: "black"
    },
    iconXS: {
        height: 25,
        width: 25
    },
    iconStyle: {
        marginRight: 10,
        color: globalColors.primary,
        fontSize: 26
    }
})