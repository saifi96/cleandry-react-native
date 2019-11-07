import React from "react";
import * as Redux from "redux";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content, View } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen } from "../../components/navigation-components/AppNavigations";
import IMapAppStateToProps from "../../base/interfaces/IMapAppStateToProps";
import IMapAppDispatchToProps from "../../base/interfaces/IMapAppDispatchToProps";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import { ServiceSelectionComponent } from "../../components/service-components/ServiceComponents";
import ServiceData from "../../core/data-objects/ServiceData";
import ClothTypeData from "../../core/data-objects/ClothTypeData";
import { AppState } from "../../redux/reducers/Index";

interface IMapOwnStateToProps extends IMapAppStateToProps {
    services: Array<ServiceData>;
    clothTypes: Array<ClothTypeData>;
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

                    <ServiceSelectionComponent
                        services={this.props.services}
                        clothTypes={this.props.clothTypes}
                    />
                </Content>
            </MainContainerComponent>
        )
    }
}



const mapStateToProps = (state: AppState, ownProps: IOwnProps): IMapOwnStateToProps => ({
    appGlobalState: state.AppGlobalState,
    services: state.ServiceState.services,
    clothTypes: state.ServiceState.clothTypes,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IMapOwnDispatchToProps => ({
});
export default ServiceScreen;