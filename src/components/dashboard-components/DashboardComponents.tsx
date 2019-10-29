import React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { globalColors } from "../../styles/color-style";
import { Text, Thumbnail, View, Item, Input, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImgSources from "../../core/img-sources";
import { Function } from "@babel/types";
import { GridButton } from "../general-components/UIComponents";
import globalStyle from "../../styles/global-style";
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
                            iconSource={ImgSources.serviceIcons.washing}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Ironing"
                            iconSource={ImgSources.serviceIcons.ironing}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dry Clean"
                            iconSource={ImgSources.serviceIcons.dryClean}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Wash & Iron"
                            iconSource={ImgSources.serviceIcons.washIron}
                        />
                    </Col>
                </Row>

                <Row style={{ marginVertical: 10 }}>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dress Iron"
                            iconSource={ImgSources.serviceIcons.dressIron}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bedsheet"
                            iconSource={ImgSources.serviceIcons.bedsheetIron}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Cloths"
                            iconSource={ImgSources.serviceIcons.dryClean}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bleaching"
                            iconSource={ImgSources.serviceIcons.bleaching}
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
                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                        >
                            <Input style={globalStyle.textSizeM}
                                placeholder="Select Service Type"
                                placeholderTextColor={globalColors.placeholderText}
                            />
                        </Item>
                    </Col>
                    <Col size={2}>
                        <Item
                            regular
                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                        >
                            <Input style={globalStyle.textSizeM}
                                placeholder="Clothes"
                                placeholderTextColor={globalColors.placeholderText}
                            />
                        </Item>
                    </Col>
                </Row>

                <Row style={[{ marginTop: 5 }]}>
                    <Col size={4}>
                        <Item
                            regular
                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                        >
                            <Input style={globalStyle.textSizeM}
                                placeholder="Schedule Delivery"
                                placeholderTextColor={globalColors.placeholderText}
                            />
                        </Item>
                    </Col>
                    <Col size={2}>
                        <Item
                            regular
                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                        >
                            <Input style={globalStyle.textSizeM}
                                placeholder="KG"
                                placeholderTextColor={globalColors.placeholderText}
                            />
                        </Item>
                    </Col>
                </Row>

                <Row style={[{ marginVertical: 5 }]}>
                    <Col>
                        <Button
                            full
                            block
                            style={[globalStyle.borderRadiusM, globalStyle.bgAppPrimary, { margin: 5, width: "50%", alignSelf: "center" }]}>
                            <Text uppercase={false} style={[globalStyle.textSizeM]}>
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
            <CarouselComponent entries={ImgSources.dashboardCrousel} />
        </View>
    )
}

export const RatingReviewComponent = () => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Rating Review</Text>
            <CarouselComponent entries={ImgSources.dashboardCrousel} />
        </View>
    )
}






const dashboardStyle = StyleSheet.create({
    section: {
        backgroundColor: globalColors.lightGray1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5
    },
    sectionTitle: {
        color: globalColors.primary,
        marginBottom: 5
    },
    gridColContent: {
        alignItems: "center",
        margin: 5
    }
})