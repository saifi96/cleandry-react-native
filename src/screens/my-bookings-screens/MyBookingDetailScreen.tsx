import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import globalStyle from "../../styles/global-style";
import { globalColors } from "../../styles/color-style";


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
                    style={[globalStyle.bgAppPrimary]}
                    androidStatusBarColor={globalColors.primary}>
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
                        <H3 style={[{ color: globalColors.white }]}>Booking Detail</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[globalStyle.posRelation]}
                >

                </Content>
            </MainContainerComponent>
        )
    }
}

export default MyBookingDetailScreen;