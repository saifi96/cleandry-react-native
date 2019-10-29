import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import globalStyle from "../../styles/global-style";
import { globalColors } from "../../styles/color-style";
import { NavigateToScreen, NavigateToRoot } from "../../components/navigation-components/AppNavigations";
import UserData from "../../core/data-objects/UserData";
import { ProfileEditComponent } from "../../components/profile-components/ProfileComponents";


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
                    style={[globalStyle.bgAppPrimary]}
                    androidStatusBarColor={globalColors.primary}>
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
                        <H3 style={[{ color: globalColors.white }]}>Edit Profile</H3>
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
                    style={[globalStyle.posRelation]}
                >

                    <ProfileEditComponent user={this.state.user} navigation={this.props.navigation} />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default ProfileEditScreen;