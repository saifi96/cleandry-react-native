import * as React from 'react'
import { Button, Icon, Header, Left, Body, Right, Content, Drawer } from 'native-base';
import GlobalStyle from '../../styles/GlobalStyle';
import ImgPathConstants from '../../core/constants/ImgPathConstants';
import LeftMenuComponent from '../../components/general-components/LeftMenuComponent';
import { CarouselComponent } from '../../components/general-components/CrouselComponent';
import { OurTopServicesComponent, QuickCheckoutComponent, TrendingOfferComponent, RatingReviewComponent } from '../../components/dashboard-components/DashboardComponents';
import MainContainerComponent from '../../components/general-components/MainContainerComponent';
import { ColorConstants } from '../../core/constants/ColorConstants';
import Axios from 'axios';
import ServiceData from '../../core/data-objects/ServiceData';
import UserData from '../../core/data-objects/UserData';


export interface IProps {
    navigation: any
}
export interface IState {
}

class DashboardScreen extends React.Component<IProps, IState> {

    /**
     * Element Reference
     */
    _drawer: any = React.createRef<Drawer>();

    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {

    }


    /**Drawer Action Region Start */
    closeDrawer = () => {
        this._drawer._root.close();
    }

    openDrawer = () => {
        this._drawer._root.open();
    }
    /**Drawer Action Region End */

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

                        <OurTopServicesComponent />

                        <QuickCheckoutComponent />

                        <TrendingOfferComponent />

                        <RatingReviewComponent />
                    </Content>

                </MainContainerComponent >
            </Drawer>
        );
    }
}

export default DashboardScreen;

