import React from "react";
import { View, List, ListItem, Left, Thumbnail, Body, H3, Icon, H2 } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import ColorConstants from "../../core/constants/ColorConstants";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigateToScreen, NavigateToStack } from "../navigation-components/AppNavigations";

interface ILeftMenuProps {
    userName: string,
    navigation: any
}

const LeftMenuComponent = (props: ILeftMenuProps) => {

    return (
        <View style={[{ flex: 1, flexDirection: "column", opacity: 0.9, paddingVertical: 25, backgroundColor: ColorConstants.primary }]}>
            <TouchableOpacity onPress={() => { props.navigation.navigate(NavigateToStack.UserProfileScreensStack); }
            }>
                <View style={[{ alignItems: "center" }]}>
                    <Thumbnail
                        circular
                        large
                        source={ImgPathConstants.leftMenuIcons.face}
                    />
                    <H2 style={[GlobalStyle.verticalSpacing, leftMenuStyle.textWhie]}>{props.userName}</H2>
                </View>
            </TouchableOpacity>
            <List>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToScreen.DashboardScreen)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.home} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Home</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => {
                        props.navigation.navigate(NavigateToStack.MyBookingScreensStack);
                    }}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.card} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>My Bookings</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => {
                        props.navigation.navigate(NavigateToStack.RateChartScreensStack);
                    }}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.chart} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Rate Charts</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.MyBookingScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.transfer} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Transaction History</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.RewardScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.reward} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Rewards</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.NotificationScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.percentage} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Offer & Notification</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.FAQScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>FAQ</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.AboutUsScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>About Us</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Terms & Conditions</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => props.navigation.navigate(NavigateToStack.PrivacyPolicyScreensStack)}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Policy</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgPathConstants.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Share & Rate Us</H3>
                    </Body>
                </ListItem>
            </List>
        </View >
    )
}

export default LeftMenuComponent;

const leftMenuStyle = StyleSheet.create({
    textWhie: {
        color: ColorConstants.white
    }
})