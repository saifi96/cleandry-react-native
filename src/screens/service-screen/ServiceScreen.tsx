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
import { DeliveryDetailFormComponent, OrderDetailComponent, ServiceUnitSelectionComponent } from "../../components/service-components/ServiceComponents";
import ServiceModel from "../../core/models/ServiceModel";
import ServiceUnitModel from "../../core/models/ServiceUnitModel";
import { AppState } from "../../redux/reducers/Index";
import { connect } from "react-redux";
import { ServiceUnitSelectionAdapter } from "../../core/models/Adapters";

interface IMapOwnStateToProps extends IMapAppStateToProps {
    services: Array<ServiceModel>;
    clothTypes: Array<ServiceUnitModel>;
}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
    currentService: ServiceModel
    serviceUnitSelections: ServiceUnitSelectionAdapter[]
}
class ServiceScreen extends React.Component<Props, IState> {

    //#region Life Cycle Hooks
    constructor(props: Props) {
        super(props);

        const serviceId = (this.props.navigation.state.params.serviceId || '')
        const serviceUnitSelectionAdapter: ServiceUnitSelectionAdapter[] = []
        for (const iServiceUnit of props.clothTypes) {
            serviceUnitSelectionAdapter.push({ selectionCount: 0, serviceUnit: iServiceUnit })
        }
        this.state = {
            currentService: (props.services.find(iService => serviceId === iService.id) || new ServiceModel()),
            serviceUnitSelections: serviceUnitSelectionAdapter
        }

        //#region Bind Functions
        this.onServiceUnitAdd = this.onServiceUnitAdd.bind(this)
        this.onServiceUnitRemove = this.onServiceUnitRemove.bind(this)
        //#endregion
    }
    componentWillMount() {
    }
    //#endregion

    //#region Service Unit
    onServiceUnitAdd(argServiceUnitId: number) {
        const serviceUnitSelections = this.state.serviceUnitSelections
        const serviceUnit = serviceUnitSelections.find(iServiceUnit => iServiceUnit.serviceUnit.id === argServiceUnitId)
        if (serviceUnit) {
            if ((serviceUnit.selectionCount + 1) <= serviceUnit.serviceUnit.maxlimit) {
            }
            serviceUnit.selectionCount++
            this.setState({ ...this.state, serviceUnitSelections })
        }
    }
    onServiceUnitRemove(argServiceUnitId: number) {
        const serviceUnitSelections = this.state.serviceUnitSelections
        const serviceUnit = serviceUnitSelections.find(iServiceUnit => iServiceUnit.serviceUnit.id === argServiceUnitId)
        if (serviceUnit) {
            if (serviceUnit.selectionCount > 0) {
                serviceUnit.selectionCount--
            }
            this.setState({ ...this.state, serviceUnitSelections })
        }
    }
    //#endregion

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
                        <H3 style={[{ color: ColorConstants.white }]}>{this.state.currentService.title}</H3>
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
                    <ServiceUnitSelectionComponent
                        service={this.state.currentService}
                        serviceUnitSelections={this.state.serviceUnitSelections}
                        onServiceUnitAdd={this.onServiceUnitAdd}
                        onServiceUnitRemove={this.onServiceUnitRemove}
                    />

                    <DeliveryDetailFormComponent />

                    <OrderDetailComponent />

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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceScreen);