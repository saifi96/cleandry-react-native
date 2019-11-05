import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content, View } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen, NavigateToRoot } from "../../components/navigation-components/AppNavigations";
import IMapAppStateToProps from "../../base/interfaces/IMapAppStateToProps";
import IMapAppDispatchToProps from "../../base/interfaces/IMapAppDispatchToProps";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import { ServiceSelectionComponent } from "../../components/service-components/ServiceComponents";

interface IMapOwnStateToProps extends IMapAppStateToProps {
}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
}

class ServiceScreen extends React.Component<Props, IState> {

    constructor(props: Props) {
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
                    <Body>
                        <H3 style={[{ color: ColorConstants.white }]}>Services</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    contentContainerStyle={{ minHeight: "100%" }}
                    style={[GlobalStyle.posRelation]}
                >

                    <ServiceSelectionComponent />
                </Content>
            </MainContainerComponent>
        )
    }
}

export default ServiceScreen;