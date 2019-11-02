import React from "react";
import { View, Text, List, ListItem, Left, Body, Thumbnail } from "native-base";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import BookingData from "../../core/data-objects/BookingData";
import GlobalStyle from "../../styles/GlobalStyle";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { Grid, Row, Col } from "react-native-easy-grid";



interface IMyBookingListProps {
    navigation: any;
    MyBookings: Array<BookingData>;
}

export const MyBookingListComponent = (props: IMyBookingListProps) => {

    return (
        <View>
            <List>
                {
                    props.MyBookings.length > 0
                        ?
                        props.MyBookings.map(iBookingData =>
                            <ListItem
                                thumbnail
                                noIndent
                                noBorder
                                onPress={() => {
                                    console.log();
                                }}
                                style={[GlobalStyle.bgLighGray,
                                GlobalStyle.borderRadiusM, { marginBottom: 10 }]}
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
                                                <Text suppressHighlighting>{iBookingData.ServiceName}</Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Text note>Sub Category:</Text>
                                            </Col>
                                            <Col>
                                                <Text suppressHighlighting>{iBookingData.SubCategoryName}</Text>
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
                                    {/* <View style={{ flexDirection: "row", flex: 1 }}>
                                        <Text note>Service Name: </Text>
                                        <Text suppressHighlighting>{iBookingData.ServiceName}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text note>Sub Category: </Text>
                                        <Text suppressHighlighting>Sub Category Title</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text note>Ordered On: </Text>
                                        <Text suppressHighlighting>{new Date().toLocaleString()}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text note>CRN No: </Text>
                                        <Text suppressHighlighting>#45</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text note>Total Amount: </Text>
                                        <Text suppressHighlighting>&#8377; 45.78</Text>
                                    </View> */}
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
    Booking: BookingData
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
