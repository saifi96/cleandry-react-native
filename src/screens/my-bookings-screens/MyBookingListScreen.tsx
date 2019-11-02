import React from "react";
import MainContainerComponent from "../../components/general-components/MainContainerComponent";
import { Header, Button, Left, Icon, Body, Right, H3, Content } from "native-base";
import GlobalStyle from "../../styles/GlobalStyle";
import { ColorConstants } from "../../core/constants/ColorConstants";
import { NavigateToScreen } from "../../components/navigation-components/AppNavigations";
import { MyBookingListComponent } from "../../components/my-booking-components/MyBookingComponents";
import MyBookingData from "../../core/data-objects/BookingData";


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
                        <H3 style={[{ color: ColorConstants.white }]}>My Bookings</H3>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={[GlobalStyle.posRelation]}
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