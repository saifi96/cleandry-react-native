import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import { ColorConstants } from "../../core/constants/ColorConstants";


interface IProps {
    navigation: any,
}
interface IState {
}

class MyBookingDetailScreen extends React.Component<IProps, IState> {


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
                                this.props.navigation.goBack();
                            }}
                        >
                            <Icon name="arrow-left" type="FontAwesome5" />
                        </Button>
                    </Left>
                    <Body>
                        <H3 style={[{ color: ColorConstants.white }]}>Booking Detail</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[GlobalStyle.posRelation]}
                >

                </Content>
            </MainContainerComponent>
        )
    }
}

export default MyBookingDetailScreen;