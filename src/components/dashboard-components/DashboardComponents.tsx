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
import ServiceUnitModel from "../../core/models/ServiceUnitModel";
import DateTimePicker from "react-native-modal-datetime-picker";
import GlobalFunctions from "../../core/helpers/GlobalFunctions";



interface IOurTopServicesProps extends IAppGlobalProps {
    services: Array<ServiceModel>
    navigation: any
}
export const OurTopServicesComponent = (props: IOurTopServicesProps) => {
    const services = props.services.sort((a, b) => {
        if (a.position > b.position) return 1
        if (b.position > a.position) return -1
        return 0
    }).filter(iService => iService.status === "E")
    function renderServices() {
        if (services.length > 0) {
            const itemsPerRow = 4
            const numberOfRows = ((services.length / itemsPerRow % 2) === 0) ? (services.length / itemsPerRow) : (parseInt(`${services.length / itemsPerRow}`) + 1)
            const aryOfRows = new Array(numberOfRows).fill({})
            const aryOfColumns = new Array(itemsPerRow).fill({})
            let iServiceIndex = -1
            return aryOfRows.map((rowVal, rowIdx) =>
                <Row>
                    {
                        aryOfColumns.map((columnVal, columnIdx) => {
                            ++iServiceIndex
                            const iService = iServiceIndex < services.length ? services[iServiceIndex] : null
                            if (iService) {
                                return (
                                    <Col style={[GlobalStyle.gridColContent]} size={3}>
                                        <GridButton
                                            title={iService.title}
                                            iconSource={{ uri: iService.image }}
                                            onClick={() => {
                                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: iService.id });
                                            }}
                                        />
                                    </Col>
                                )
                            } else {
                                return <Col size={3}></Col>
                            }
                        }
                        )
                    }
                </Row>
            )
        } else {
            return <Text>Services not available</Text>
        }
    }
    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Our Top Services</Text>
            <Grid>
                {renderServices()}
                {/* <Row>
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
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 2 });
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Dry Clean"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 3 });
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Wash & Iron"
                            iconSource={ImgPathConstants.serviceIcons.washIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 4 });
                            }}
                        />
                    </Col>
                </Row> */}

                {/* <Row style={{ marginVertical: 10 }}>
                    <Col style={[dashboardStyle.gridColContent]} >
                        <GridButton
                            title="Dress Iron"
                            iconSource={ImgPathConstants.serviceIcons.dressIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 5 });
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bedsheet"
                            iconSource={ImgPathConstants.serviceIcons.bedsheetIron}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 6 });
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Cloths"
                            iconSource={ImgPathConstants.serviceIcons.dryClean}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 7 });
                            }}
                        />
                    </Col>
                    <Col style={[dashboardStyle.gridColContent]}>
                        <GridButton
                            title="Bleaching"
                            iconSource={ImgPathConstants.serviceIcons.bleaching}
                            onClick={() => {
                                props.navigation.navigate(NavigateToScreen.ServiceScreen, { serviceId: 8 });
                            }}
                        />
                    </Col>
                </Row> */}
            </Grid>
        </View>
    )
}


interface IQuickCheckoutProps {
    services: Array<ServiceModel>;
    clothTypes: Array<ServiceUnitModel>;
}
class QuickCheckoutState {
    selectedServiceId: number = 0;
    selectedClothTypeId: number = 0;
    scheduleDate: string = "";
    totalWeightInKg: number = 0;
    showDateTimePicker: boolean = false;
}
export const QuickCheckoutComponent = (props: IQuickCheckoutProps) => {
    const [state, setState] = useState(new QuickCheckoutState());

    //#region Date picker functionality
    function showDatePicker() {
        setState({
            ...state,
            showDateTimePicker: true
        });
    }

    function hideDatePicker() {
        setState({
            ...state,
            showDateTimePicker: false
        });
    }

    function confirmScheduleDate(argDate: Date) {
        setState({
            ...state,
            scheduleDate: GlobalFunctions.GetShortDate(argDate)
        })
    }
    //#endregion

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
                                onFocus={showDatePicker}
                                onKeyPress={showDatePicker}
                                onBlur={hideDatePicker}
                                value={state.scheduleDate}
                                placeholder="Schedule Delivery"
                                placeholderTextColor={ColorConstants.placeholderText}
                            />

                        </Item>

                        <DateTimePicker
                            isVisible={state.showDateTimePicker}
                            mode="date"
                            onConfirm={confirmScheduleDate}
                            onCancel={hideDatePicker}
                            onHideAfterConfirm={hideDatePicker}
                        />
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
            {/* <CarouselComponent entries={ImgPathConstants.dashboardCrousel} /> */}
        </View>
    )
}

export const RatingReviewComponent = () => {

    return (
        <View style={[dashboardStyle.section]}>
            <Text style={[dashboardStyle.sectionTitle]}>Rating Review</Text>
            {/* <CarouselComponent entries={ImgPathConstants.dashboardCrousel} /> */}
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
    }
})