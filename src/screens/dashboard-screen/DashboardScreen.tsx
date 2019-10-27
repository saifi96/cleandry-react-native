import * as React from 'react'
import { Button, Icon, Header, Left, Body, Right, Content, Drawer } from 'native-base';
import globalStyle from '../../styles/global-style';
import ImgSources from '../../core/img-sources';
import LeftMenuComponent from '../../components/general-components/LeftMenuComponent';
import { CarouselComponent } from '../../components/general-components/CrouselComponent';
import { OurTopServicesComponent, QuickCheckoutComponent, TrendingOfferComponent, RatingReviewComponent } from '../../components/dashboard-components/DashboardComponents';
import MainContainerComponent from '../../components/general-components/MainContainerComponent';
import { globalColors } from '../../styles/color-style';


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
                        style={[globalStyle.bgAppPrimary]}
                        androidStatusBarColor={globalColors.primary}>
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
                        style={[globalStyle.posRelation]}
                    >

                        <CarouselComponent entries={ImgSources.dashboardCrousel} />

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

