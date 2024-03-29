import React from "react";
import { View, Text, List, ListItem, Left, Body, Thumbnail } from "native-base";
import BookingModel from "../../core/models/BookingModel";
import GlobalStyle from "../../styles/GlobalStyle";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { Grid, Row, Col } from "react-native-easy-grid";



interface IMyBookingListProps {
    navigation: any;
    MyBookings: Array<BookingModel>;
}

export const MyBookingListComponent = (props: IMyBookingListProps) => {

    return (
        <View>
            <List>
                {
                    (props.MyBookings && props.MyBookings.length) > 0
                        ?
                        props.MyBookings.map(iBookingData =>
                            <ListItem
                                itemDivider
                                avatar
                                noIndent
                                noBorder
                                onPress={() => {
                                    console.log();
                                }}
                                style={[GlobalStyle.listItemNarrow]}
                            >
                                <Left>
                                    <Thumbnail
                                        circular
                                        source={{ uri: 'https://cleandry.in/assets/images/services/service_24507.png' }}
                                    />
                                </Left>
                                <Body>
                                    <Grid>
                                        <Row>
                                            <Col size={4}>
                                                <Text note>Service Name:</Text>
                                            </Col>
                                            <Col size={8}>
                                                <Text suppressHighlighting>{iBookingData.ServiceName}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size={4}>
                                                <Text note>Sub Category:</Text>
                                            </Col>
                                            <Col size={8}>
                                                <Text suppressHighlighting>{iBookingData.SubCategoryName}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size={4}>
                                                <Text note>Ordered On:</Text>
                                            </Col>
                                            <Col size={8}>
                                                <Text suppressHighlighting>{new Date().toDateString()}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size={4}>
                                                <Text note>CRN No:</Text>
                                            </Col>
                                            <Col size={8}>
                                                <Text suppressHighlighting>#45</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size={4}>
                                                <Text note>Total Amount:</Text>
                                            </Col>
                                            <Col size={8}>
                                                <Text suppressHighlighting>&#8377; 45.78</Text>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Body>
                            </ListItem>
                        )
                        :
                        <Text>Sorry, You haven't make any booking</Text>
                }
            </List>
        </View>
    )
}


interface IMyBookingDetailProps {
    navigation: any;
    Booking: BookingModel
}
export const MyBookingDetailComponent = (props: IMyBookingListProps) => {

    return (
        <View>
            <List>
                <ListItem
                    thumbnail
                    noIndent
                    noBorder
                    onPress={() => {
                        console.log();
                    }}
                    style={[GlobalStyle.bgLighGray,
                    GlobalStyle.borderRadiusM]}
                >
                    <Left>
                        <Thumbnail
                            large
                            circular
                            source={ImgPathConstants.dashboardCrousel[0]}
                        />
                    </Left>
                    <Body style={{ paddingBottom: 0, paddingTop: 0 }}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text note>Service Name:</Text>
                                </Col>
                                <Col>
                                    <Text suppressHighlighting></Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text note>Sub Category:</Text>
                                </Col>
                                <Col>
                                    <Text suppressHighlighting>Sub Category Title</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text note>Ordered On:</Text>
                                </Col>
                                <Col>
                                    <Text suppressHighlighting>{new Date().toDateString()}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text note>CRN No:</Text>
                                </Col>
                                <Col>
                                    <Text suppressHighlighting>#45</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text note>Total Amount:</Text>
                                </Col>
                                <Col>
                                    <Text suppressHighlighting>&#8377; 45.78</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Body>
                </ListItem>
            </List>
        </View>
    )
}
