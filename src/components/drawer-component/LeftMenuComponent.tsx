import React from "react";
import { View, List, ListItem, Left, Thumbnail, Body, Text, Right, Button, H3, Icon, H2 } from "native-base";
import globalStyle from "../../styles/global-style";
import ImgSources from "../../core/img-sources";

class LeftMenuComponent extends React.Component {

    render() {

        return (
            <View style={[globalStyle.bgLighGray, { flex: 1, flexDirection: "column", opacity: 0.9, paddingVertical: 25 }]}>
                <View style={[{ alignItems: "center" }]}>
                    <Thumbnail
                        circular
                        large
                        source={ImgSources.drawerIcons.face1}
                    />
                    <H2 style={[globalStyle.verticalSpacing]}>Cleandry In</H2>
                </View>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail small source={ImgSources.drawerIcons.award} />
                        </Left>
                        <Body>
                            <H3>Home</H3>
                        </Body>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail small source={ImgSources.drawerIcons.award} />
                        </Left>
                        <Body>
                            <H3>My Bookings</H3>
                        </Body>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail small source={ImgSources.drawerIcons.award} />
                        </Left>
                        <Body>
                            <H3>Rate Charts</H3>
                        </Body>
                    </ListItem>
                </List>
            </View>
        )
    }
}

export default LeftMenuComponent;