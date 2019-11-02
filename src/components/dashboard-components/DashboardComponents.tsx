import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import ColorConstants from "../../core/constants/ColorConstants";
import { Text, Thumbnail, View, Item, Input, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { Function } from "@babel/types";
import { GridButton } from "../general-components/UIComponents";
import GlobalStyle from "../../styles/GlobalStyle";
import { CarouselComponent } from "../general-components/CrouselComponent";


export const OurTopServicesComponent = () => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Our Top Services</Text>
            <Grid>
                <Row>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Washing"
                            iconSource={ImgPathConstants.serviceIcons.washing}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Ironing"
                            iconSource={ImgPathConstants.serviceIcons.ironing}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dry Clean"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Wash & Iron"
                            iconSource={ImgPathConstants.serviceIcons.washIron}
                        />
                    </Col>
                </Row>

                <Row style={{ marginVertical: 10 }}>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dress Iron"
                            iconSource={ImgPathConstants.serviceIcons.dressIron}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bedsheet"
                            iconSource={ImgPathConstants.serviceIcons.bedsheetIron}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Cloths"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bleaching"
                            iconSource={ImgPathConstants.serviceIcons.bleaching}
                        />
                    </Col>
                </Row>

            </Grid>
        </View>
    )
}

export const QuickCheckoutComponent = () => {
    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Quick Checkout</Text>
            <Grid>
                <Row>
                    <Col size={4}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Input style={GlobalStyle.textSizeM}
                                placeholder="Select Service Type"
                                placeholderTextColor={ColorConstants.placeholderText}
                            />
                        </Item>
                    </Col>
                    <Col size={2}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Input style={GlobalStyle.textSizeM}
                                placeholder="Clothes"
                                placeholderTextColor={ColorConstants.placeholderText}
                            />
                        </Item>
                    </Col>
                </Row>

                <Row style={[{ marginTop: 5 }]}>
                    <Col size={4}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Input style={GlobalStyle.textSizeM}
                                placeholder="Schedule Delivery"
                                placeholderTextColor={ColorConstants.placeholderText}
                            />
                        </Item>
                    </Col>
                    <Col size={2}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Input style={GlobalStyle.textSizeM}
                                placeholder="KG"
                                placeholderTextColor={ColorConstants.placeholderText}
                            />
                        </Item>
                    </Col>
                </Row>

                <Row style={[{ marginVertical: 5 }]}>
                    <Col>
                        <Button
                            full
                            block
                            style={[GlobalStyle.borderRadiusM, GlobalStyle.bgAppPrimary, { margin: 5, width: "50%", alignSelf: "center" }]}>
                            <Text uppercase={false} style={[GlobalStyle.textSizeM]}>
                                Get Estimate
                            </Text>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        </View>
    )
}

export const TrendingOfferComponent = () => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Trending Offers</Text>
            <CarouselComponent entries={ImgPathConstants.dashboardCrousel} />
        </View>
    )
}

export const RatingReviewComponent = () => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Rating Review</Text>
            <CarouselComponent entries={ImgPathConstants.dashboardCrousel} />
        </View>
    )
}






const dashboardStyle = StyleSheet.create({
    section: {
        backgroundColor: ColorConstants.lightGray1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5
    },
    sectionTitle: {
        color: ColorConstants.primary,
        marginBottom: 5
    },
    gridColContent: {
        alignItems: "center",
        margin: 5
    }
})