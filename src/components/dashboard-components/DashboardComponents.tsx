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
import ServiceModel from "../../core/models/ServiceModel";
import ClothTypeModel from "../../core/models/ClothTypeModel";



interface IOurTopServicesProps extends IAppGlobalProps {
    services: Array<ServiceModel>;
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
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Ironing"
                            iconSource={ImgPathConstants.serviceIcons.ironing}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dry Clean"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Wash & Iron"
                            iconSource={ImgPathConstants.serviceIcons.washIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                </Row>

                <Row style={{ marginVertical: 10 }}>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dress Iron"
                            iconSource={ImgPathConstants.serviceIcons.dressIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bedsheet"
                            iconSource={ImgPathConstants.serviceIcons.bedsheetIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Cloths"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bleaching"
                            iconSource={ImgPathConstants.serviceIcons.bleaching}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen);
                            }}
                        />
                    </Col>
                </Row>

            </Grid>
        </View>
    )
}


interface IQuickCheckoutProps {
    services: Array<ServiceModel>;
    clothTypes: Array<ClothTypeModel>;
}
class QuickCheckoutState {
    selectedServiceId: number = 0;
    selectedClothTypeId: number = 0;
    scheduleDate: string = "";
    totalWeightInKg: number = 0;
}
export const QuickCheckoutComponent = (props: IQuickCheckoutProps) => {
    const [state, setState] = useState(new QuickCheckoutState());

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Quick Checkout</Text>
            <Grid>
                <Row>
                    <Col size={3}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Picker
                                note
                                mode="dropdown"
                                selectedValue={`${state.selectedServiceId}`}
                                onValueChange={(value, index) => {
                                    setState({ ...state, selectedServiceId: parseInt(value) });
                                }}
                            >
                                <Picker.Item
                                    label="Select Service Type"
                                    value={0}
                                    key="service_1"
                                />
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
                                selectedValue={`${state.selectedClothTypeId}`}
                                onValueChange={(value, index) => {
                                    setState({ ...state, selectedClothTypeId: parseInt(value) });
                                }}
                            >
                                <Picker.Item
                                    label="Cloth Type"
                                    value={0}
                                    key="clothtype_1"
                                />
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
                    <Col size={3}>
                        <Item
                            regular
                            style={[GlobalStyle.borderRadiusM, { backgroundColor: ColorConstants.white }]}
                        >
                            <Input
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
                            <Input
                                keyboardType="numeric"
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