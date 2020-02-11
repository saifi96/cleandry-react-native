import * as React from 'react';
import * as Redux from "redux";
import { Button, Icon, Header, Left, Body, Right, Content, Drawer } from 'native-base';
import GlobalStyle from '../../styles/GlobalStyle';
import ImgPathConstants from '../../core/constants/ImgPathConstants';
import LeftMenuComponent from '../../components/general-components/LeftMenuComponent';
import { CarouselComponent } from '../../components/general-components/CrouselComponent';
import { OurTopServicesComponent, QuickCheckoutComponent, TrendingOfferComponent, RatingReviewComponent } from '../../components/dashboard-components/DashboardComponents';
import MainContainerComponent from '../../components/general-components/MainContainerComponent';
import ColorConstants from "../../core/constants/ColorConstants";
import IMapAppStateToProps from '../../base/interfaces/IMapAppStateToProps';
import IMapAppDispatchToProps from '../../base/interfaces/IMapAppDispatchToProps';
import IAppGlobalProps from '../../base/interfaces/IAppGlobalProps';
import { AppState } from '../../redux/reducers/Index';
import { connect } from 'react-redux';
import ServiceModel from '../../core/models/ServiceModel';
import ServiceUnitModel from '../../core/models/ServiceUnitModel';
import { ImageBackground, Image } from 'react-native';



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
}

class DashboardScreen extends React.Component<Props, IState> {

    /**
     * Element Reference
     */
    _drawer: any = React.createRef<Drawer>();

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
    }


    //#region Drawer Action Region
    closeDrawer = () => {
        this._drawer._root.close();
    }

    openDrawer = () => {
        this._drawer._root.open();
    }
    //#endregion

    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                acceptTap={true}
                side="left"
                type="overlay"
                captureGestures={true}
                tapToClose={true}
                content={<LeftMenuComponent userName="Cleandry In" navigation={this.props.navigation} />} >

                <MainContainerComponent isLoading={false}>

                    <Header
                        style={[GlobalStyle.bgAppPrimary]}
                        androidStatusBarColor={ColorConstants.primary}>
                        <Left>
                            <Button
                                transparent
                                onPress={() => { this.openDrawer() }}>
                                <Icon name="menu" type="MaterialCommunityIcons" />
                            </Button>
                        </Left>
                        <Body></Body>
                        <Right></Right>
                    </Header>

                    <Content
                        padder
                        enableAutomaticScroll={true}
                        style={[GlobalStyle.posRelation]}
                    >

                        <CarouselComponent entries={ImgPathConstants.dashboardCrousel} />

                        <OurTopServicesComponent
                            services={this.props.services}
                            navigation={this.props.navigation}
                        />

                        <QuickCheckoutComponent
                            services={this.props.services}
                            clothTypes={this.props.clothTypes}
                        />

                        <TrendingOfferComponent />

                        <RatingReviewComponent />
                    </Content>

                </MainContainerComponent >
            </Drawer>
        );
    }
}


const mapStateToProps = (state: AppState, ownProps: IOwnProps): IMapOwnStateToProps => ({
    appGlobalState: state.AppGlobalState,
    services: state.ServiceState.services,
    clothTypes: state.ServiceState.clothTypes,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IMapOwnDispatchToProps => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

