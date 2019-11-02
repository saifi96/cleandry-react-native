import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content, Text } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import { ColorConstants } from "../../core/constants/ColorConstants";
import { NavigateToStack, NavigateToScreen, NavigateToRoot } from "../../components/navigation-components/AppNavigations";
import UserData from "../../core/data-objects/UserData";
import { ProfileViewComponent } from "../../components/profile-components/ProfileComponents";
import { TrendingOfferComponent } from "../../components/dashboard-components/DashboardComponents";


interface IProps {
    navigation: any,
}
interface IState {
    user: UserData;
}

class ProfileViewScreen extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);
        let objUser: UserData = new UserData();
        objUser.FullName = "Cleandry";
        objUser.Email = "xyz@gmail.com";
        objUser.Phone = 555;
        this.state = { user: objUser };
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
                    <Body>
                        <H3 style={[{ color: ColorConstants.white }]}>My Profile</H3>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate(NavigateToRoot.AuthScreensStack)
                            }}
                        >
                            <Icon name="sign-out-alt" type="FontAwesome5" />
                        </Button>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[GlobalStyle.posRelation]}
                >

                    <ProfileViewComponent user={this.state.user} navigation={this.props.navigation} />

                    <TrendingOfferComponent />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default ProfileViewScreen;