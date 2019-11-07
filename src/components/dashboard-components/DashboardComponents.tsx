import React, { useState } from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import ColorConstants from "../../core/constants/ColorConstants";
import { Text, Thumbnail, View, Item, Input, Button, Picker } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import { GridButton } from "../general-components/UIComponents";
import GlobalStyle from "../../styles/GlobalStyle";
import { CarouselComponent } from "../general-components/CrouselComponent";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import { NavigateToScreen } from "../navigation-components/AppNavigations";
import ServiceData from "../../core/data-objects/ServiceData";
import ClothTypeData from "../../core/data-objects/ClothTypeData";



interface IOurTopServicesProps extends IAppGlobalProps {
    services: Array<ServiceData>;
}
export const OurTopServicesComponent = (props: IOurTopServicesProps) => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Our Top Services</Text>
            <Grid>
                <Row>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Washing"
                            iconSource={ImgPathConstants.serviceIcons.washing}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 1 });
                            }}
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


interface IQuickCheckoutProps {
    services: Array<ServiceData>;
    clothTypes: Array<ClothTypeData>;
}
class QuickCheckoutState {
    selectedServiceId: number = -1;
    selectedClothTypeId: number = -1;
    scheduleDate: string = "";
    totalWeightInKg: number = -1;
}
export const QuickCheckoutComponent = (props: IQuickCheckoutProps) => {
    const [state, setState] = useState(new QuickCheckoutState());

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
                            <Picker
                                mode="dropdown"
                                note
                                onValueChange={(value, index) => {
                                    setState({ ...state, selectedServiceId: parseInt(value) });
                                }}
                            >
                                <Picker.Item
                                    label="Select service type"
                                    value="0"
                                    key="service_1" />
                                {
                                    props.services.map(iService =>
                                        <Picker.Item
                                            key={`service_${iService.id}`}
                                            label={iService.title}
                                            value={iService.id}
                                        />
                                    )
                                }
                            </Picker>
                        </Item>
                    </Col>
                    <Col size={2}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}

                        >
                            <Picker
                                note
                                mode="dropdown"
                                onValueChange={(value, index) => {
                                    setState({ ...state, selectedClothTypeId: parseInt(value) });
                                }}
                            >
                                <Picker.Item label="Select cloth type" value="0" key="clothtype_1" />
                                {
                                    props.clothTypes.map(iClothType =>
                                        <Picker.Item
                                            key={`service_${iClothType.id}`}
                                            label={iClothType.units_title}
                                            value={iClothType.id}
                                        />
                                    )
                                }
                            </Picker>
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