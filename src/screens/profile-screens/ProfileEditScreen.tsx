import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen, NavigateToRoot } from "../../components/navigation-components/AppNavigations";
import UserData from "../../core/data-objects/UserData";
import { ProfileEditComponent } from "../../components/profile-components/ProfileComponents";
import { TrendingOfferComponent } from "../../components/dashboard-components/DashboardComponents";


interface IProps {
    navigation: any,
}
interface IState {
    user: UserData;
}

class ProfileEditScreen extends React.Component<IProps, IState> {


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
                                this.props.navigation.goBack();
                            }}
                        >
                            <Icon name="arrow-left" type="FontAwesome5" />
                        </Button>
                    </Left>
                    <Body>
                        <H3 style={[{ color: ColorConstants.white }]}>Edit Profile</H3>
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

                    <ProfileEditComponent user={this.state.user} navigation={this.props.navigation} />

                    <TrendingOfferComponent />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default ProfileEditScreen;