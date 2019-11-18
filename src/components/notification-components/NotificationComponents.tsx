import React from "react";
import { View, Text, List, ListItem, Left, Body, Thumbnail, Card, CardItem, H2, Button } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { Image, StyleSheet } from "react-native";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen } from "../navigation-components/AppNavigations";



interface INotificationListProps {
    navigation: any;
    Notifications?: Array<Object>;
}

export const NotificationListComponent = (props: INotificationListProps) => {

    return (
        <View>
            <CardItem style={[styles.noPadding]}>
                <Body>
                    <Image
                        defaultSource={ImgPathConstants.dashboardCrousel[0]}
                        style={{ width: "100%", height: 112 }}
                        source={ImgPathConstants.dashboardCrousel[1]}
                    />
                    <View style={[GlobalStyle.paddingL, { backgroundColor: ColorConstants.lightGray1 }]}>
                        <H2
                            textBreakStrategy="highQuality"
                            adjustsFontSizeToFit={true}>
                            Offer Title
                            </H2>
                        <Text
                            note
                            numberOfLines={3}
                            ellipsizeMode="tail"
                            textBreakStrategy="highQuality"
                            adjustsFontSizeToFit={true}
                            style={{ textAlign: "justify" }}
                        >
                            A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content.
                            </Text>

                        <Text
                            onPress={() => {
                                props.navigation.navigate(NavigateToScreen.NotificationDetailScreen);
                            }}
                            style={{ color: ColorConstants.primary }}>
                            Read more
                            </Text>
                    </View>
                </Body>
            </CardItem>
        </View>
    )
}


interface INotificationDetailProps {
    navigation: any;
    NotificationDetail?: any
}
export const NotificationDetailComponent = (props: INotificationDetailProps) => {

    return (
        <View>
            <CardItem style={[styles.noPadding]}>
                <Body>
                    <Image
                        resizeMode="cover"
                        style={{ width: "100%", height: 112 }}
                        source={ImgPathConstants.dashboardCrousel[0]}
                    />
                    <View style={[GlobalStyle.paddingL, { backgroundColor: ColorConstants.lightGray1 }]}>
                        <H2
                            textBreakStrategy="highQuality"
                            style={{ marginTop: 10, marginBottom: 10 }}
                            adjustsFontSizeToFit={true}>
                            Offer Title
                        </H2>
                        <Text
                            note
                            ellipsizeMode="tail"
                            textBreakStrategy="highQuality"
                            adjustsFontSizeToFit={true}
                            style={{ textAlign: "justify" }}
                        >
                            A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content.
                        </Text>
                    </View>
                </Body>
            </CardItem>
        </View>
    )
}


const styles = StyleSheet.create({
    noPadding: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    fullWidth: {
        width: "100%"
    }
})
