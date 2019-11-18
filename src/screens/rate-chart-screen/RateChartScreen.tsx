import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import ColorConstants from "../../core/constants/ColorConstants";
import { NavigateToScreen } from "../../components/navigation-components/AppNavigations";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { CarouselComponent } from "../../components/general-components/CrouselComponent";
import { RateChartComponent } from "../../components/shared-components/RateChartComponents";


interface IProps {
    navigation: any,
}
interface IState {
}

class RateChartScreen extends React.Component<IProps, IState> {


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
                    <Body>
                        <H3 style={[{ color: ColorConstants.white }]}>Rate Charts</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[GlobalStyle.posRelation]}
                >

                    <CarouselComponent
                        entries={ImgPathConstants.dashboardCrousel}
                    />


                    <RateChartComponent />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default RateChartScreen;