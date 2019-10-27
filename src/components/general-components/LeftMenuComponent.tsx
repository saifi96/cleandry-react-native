import React from "react";
import { View, List, ListItem, Left, Thumbnail, Body, H3, Icon, H2 } from "native-base";
import globalStyle from "../../styles/global-style";
import ImgSources from "../../core/img-sources";
import { globalColors } from "../../styles/color-style";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigateToScreen, NavigateToStack } from "../navigation-components/AppNavigations";

interface ILeftMenuProps {
    userName: string,
    navigation: any
}

const LeftMenuComponent = (props: ILeftMenuProps) => {

    return (
        <View style={[{ flex: 1, flexDirection: "column", opacity: 0.9, paddingVertical: 25, backgroundColor: globalColors.primary }]}>
            <TouchableOpacity onPress={() => { props.navigation.navigate(NavigateToStack.UserProfileScreensStack); }
            }>
                <View style={[{ alignItems: "center" }]}>
                    <Thumbnail
                        circular
                        large
                        source={ImgSources.leftMenuIcons.face}
                    />
                    <H2 style={[globalStyle.verticalSpacing, leftMenuStyle.textWhie]}>{props.userName}</H2>
                </View>
            </TouchableOpacity>
            <List>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.home} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Home</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.card} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>My Bookings</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.chart} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Rate Charts</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.transfer} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Transaction History</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.reward} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Rewards</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.percentage} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Offer & Notification</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>FAQ</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.instruction} />
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
                        <Thumbnail small square source={ImgSources.leftMenuIcons.instruction} />
                    </Left>
                    <Body>
                        <H3 style={[leftMenuStyle.textWhie]}>Terms & Conditions</H3>
                    </Body>
                </ListItem>
                <ListItem
                    thumbnail
                    noBorder={true}
                    onPress={() => console.log("clicked")}
                >
                    <Left>
                        <Thumbnail small square source={ImgSources.leftMenuIcons.instruction} />
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
                        <Thumbnail small square source={ImgSources.leftMenuIcons.instruction} />
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
        color: globalColors.white
    }
})