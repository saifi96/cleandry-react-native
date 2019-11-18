import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen } from "../../components/navigation-components/AppNavigations";
import { NotificationListComponent } from "../../components/notification-components/NotificationComponents";


interface IProps {
    navigation: any,
}
interface IState {
}

class NotificationListScreen extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);

    }


    render() {

        return (
            <MainContainerComponent isLoading={false}>
                <Header
                    style={[GlobalStyle.bgAppPrimary]}
                    androidStatusBarColor={ColorConstants.primary}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate(NavigateToScreen.DashboardScreen);
                            }}
                        >
                            <Icon name="arrow-left" type="FontAwesome5" />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: "-20%" }}>
                        <H3 style={[{ color: ColorConstants.white }]}>Offers &#38; Notification</H3>
                    </Body>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[GlobalStyle.posRelation]}
                >

                    <NotificationListComponent
                        navigation={this.props.navigation}
                    />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default NotificationListScreen;