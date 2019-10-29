import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import globalStyle from "../../styles/global-style";
import { globalColors } from "../../styles/color-style";
import { NavigateToScreen } from "../../components/navigation-components/AppNavigations";
import { MyBookingListComponent } from "../../components/my-booking-components/MyBookingComponents";
import MyBookingData from "../../core/data-objects/MyBookingData";


interface IProps {
    navigation: any,
}
interface IState {
    MyBookings: Array<MyBookingData>;
}

class MyBookingListScreen extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);

        let listDTOMyBooking = new Array<MyBookingData>();
        let dtoMyBooking = new MyBookingData();
        dtoMyBooking.ServiceName = "Cleandry";
        dtoMyBooking.SubCategoryName = "Cleandry category title";

        let dtoMyBooking2 = new MyBookingData();
        dtoMyBooking2.ServiceName = "Navigo";
        dtoMyBooking2.SubCategoryName = "Navigo category title";
        listDTOMyBooking.push(dtoMyBooking);
        listDTOMyBooking.push(dtoMyBooking2);

        this.state = { MyBookings: listDTOMyBooking };
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
                        <H3 style={[{ color: globalColors.white }]}>My Bookings</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[globalStyle.posRelation]}
                >

                    <MyBookingListComponent
                        MyBookings={this.state.MyBookings}
                        navigation={this.props.navigation}
                    />

                </Content>
            </MainContainerComponent>
        )
    }
}

export default MyBookingListScreen;