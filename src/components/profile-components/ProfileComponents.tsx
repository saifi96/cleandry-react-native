import React from "react";
import { View, List, ListItem, Left, Thumbnail, Body, H3, H2, Button, Text, Form, Item, Input } from "native-base";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { ColorConstants } from "../../core/constants/ColorConstants";
import { StyleSheet } from "react-native";
import UserData from "../../core/data-objects/UserData";
import GlobalStyle from "../../styles/GlobalStyle";
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
                borderColor: ColorConstants.primary,
                marginBottom: -75,
                zIndex: 2
            }]}>
                <Thumbnail
                    large
                    resizeMode="contain"
                    style={{ padding: 70, borderRadius: 100 }}
                    source={ImgPathConstants.leftMenuIcons.face}
                />
            </View>

            <View style={[{ backgroundColor: ColorConstants.lightGray1 }, GlobalStyle.borderRadiusM]}>

                <List style={{ marginTop: 100 }}>
                    <ListItem
                        thumbnail
                        noBorder={true}
                    >
                        <Left>
                            <FontAwesome5Icon name="user" size={26} color={ColorConstants.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgPathConstants.profileIcons.user} /> */}
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
                            <FontAwesome5Icon name="envelope" size={26} color={ColorConstants.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgPathConstants.profileIcons.email} /> */}
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
                            <FontAwesome5Icon name="phone-square" size={30} color={ColorConstants.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgPathConstants.profileIcons.phone} /> */}
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
                            <FontAwesome5Icon name="id-card" size={26} color={ColorConstants.primary} solid />
                            {/* <Thumbnail style={[profileStyle.iconXS]} square source={ImgPathConstants.leftMenuIcons.transfer} /> */}
                        </Left>
                        <Body>
                            <H3 style={[profileStyle.textWhite]}>Adhere Number</H3>
                        </Body>
                    </ListItem>
                </List>

                <View style={[GlobalStyle.verticalSpacing, { alignSelf: "center", flex: 1, flexDirection: "row" }]}>
                    <Button
                        full
                        primary
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.width75Per, GlobalStyle.bgAppPrimary]}
                        onPress={() => {
                            props.navigation.navigate(NavigateToScreen.ProfileEditScreen);
                        }}
                    >
                        <Text uppercase={false} style={GlobalStyle.textSizeM}>Edit Information</Text>
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
                borderColor: ColorConstants.primary,
                marginBottom: -75,
                zIndex: 2
            }]}>
                <Thumbnail
                    large
                    resizeMode="contain"
                    style={{ padding: 70, borderRadius: 100 }}
                    source={ImgPathConstants.leftMenuIcons.face}
                />
            </View>

            <View style={[{ backgroundColor: ColorConstants.lightGray1 }, GlobalStyle.borderRadiusM]}>

                <Form style={[GlobalStyle.verticalSpacing, { marginTop: 100, paddingHorizontal: 15 }]}>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={GlobalStyle.textSizeM}
                            placeholder="Name"
                            placeholderTextColor={ColorConstants.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="user"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={GlobalStyle.textSizeM}
                            placeholder="Email"
                            placeholderTextColor={ColorConstants.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="envelope"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={GlobalStyle.textSizeM}
                            keyboardType="number-pad"
                            placeholder="Phone"
                            placeholderTextColor={ColorConstants.placeholderText}
                        />
                        <FontAwesome5Icon
                            name="phone-square"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                    <Item
                        fixedLabel={true}
                        regular
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                        <Input
                            style={GlobalStyle.textSizeM}
                            placeholder="E.g 10-07-1996"
                            placeholderTextColor={ColorConstants.placeholderText} />
                        <FontAwesome5Icon
                            name="calendar-alt"
                            style={[profileStyle.iconStyle]}
                        />
                    </Item>

                </Form>

                <View style={[GlobalStyle.verticalSpacing, { alignSelf: "center", flex: 1, flexDirection: "row" }]}>
                    <Button
                        full
                        primary
                        style={[GlobalStyle.borderRadiusM, GlobalStyle.width75Per, GlobalStyle.bgAppPrimary]}
                    >
                        <Text uppercase={false} style={GlobalStyle.textSizeM}>Save</Text>
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
        color: ColorConstants.primary,
        fontSize: 26
    }
})