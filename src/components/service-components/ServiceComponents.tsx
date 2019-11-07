import React, { useState } from "react";
import { View, ListItem, Left, Right, Text, List, Icon, Thumbnail, H3, Body, Picker, Button, Form } from "native-base";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import ColorConstants from "../../core/constants/ColorConstants";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import ServiceData from "../../core/data-objects/ServiceData";
import ClothTypeData from "../../core/data-objects/ClothTypeData";

interface IServiceSelectionProps extends IAppGlobalProps {
    services: Array<ServiceData>;
    clothTypes: Array<ClothTypeData>;
}

interface ChoosenServicesData {
    id: number;
    clothTypes: Array<{
        id: number,
        itemCount: number,
        basePrice: number,
        selectableCloths: Array<ClothTypeData>
    }>;
}
class ServiceSelectionState {
    public choosenServices: Array<ChoosenServicesData> = [];
    public expandedServiceId: number = -1;
}
export const ServiceSelectionComponent = (props: IServiceSelectionProps) => {

    const [state, setState] = useState(new ServiceSelectionState());

    function addNewClothForService(argServiceId: number) {
        if (props.clothTypes.length > 0) {

            let newState = { ...state };
            let serviceIndex = newState.choosenServices.findIndex(iService => iService.id == argServiceId);
            if (serviceIndex > -1) {
                let currentServices = newState.choosenServices[serviceIndex];

                let selectableCloths = props.clothTypes.filter((iCloth) => {
                    if (currentServices.clothTypes.find(iCurrentServiceCloth => iCloth.id == iCurrentServiceCloth.id) != undefined) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });

                if (selectableCloths.length > 0) {
                    currentServices.clothTypes.push({
                        id: selectableCloths[0].id,
                        itemCount: 1, basePrice: selectableCloths[0].base_price,
                        selectableCloths: selectableCloths
                    });
                }

                newState.choosenServices[serviceIndex] = currentServices;
            }
            else {
                let objFirstClothType = props.clothTypes.find(iCloth => iCloth.position == 1);
                if (objFirstClothType != undefined) {
                    newState.choosenServices.push({
                        id: argServiceId, clothTypes: [{
                            id: objFirstClothType.id,
                            basePrice: objFirstClothType.base_price,
                            itemCount: 1,
                            selectableCloths: props.clothTypes
                        }]
                    });
                }
            }

            setState(newState);
        }
    }

    function renderCurrentServiceItems(argServiceId: number) {

        let currentService = state.choosenServices.find(iService => iService.id == argServiceId);
        if (currentService != undefined) {

            return (
                currentService.clothTypes.map(iServiceItem =>
                    <ListItem
                        noIndent
                        iconRight
                    >
                        <Left>
                            <Picker
                                note
                                mode="dropdown"
                                onValueChange={(value, index) => {

                                }}
                            >
                                {
                                    iServiceItem.selectableCloths.map(iClothType =>
                                        <Picker.Item
                                            key={`${iClothType}_cloth_type`}
                                            label={iClothType.units_title}
                                            value={iClothType.id}
                                        />
                                    )
                                }
                            </Picker>
                        </Left>
                        <Body>
                            <Text>{iServiceItem.itemCount} X {iServiceItem.basePrice}</Text>
                            <Text note>Total: {iServiceItem.itemCount * iServiceItem.basePrice}</Text>
                        </Body>
                        <Right>
                            <Button
                                icon
                                small
                                success
                                rounded
                                bordered
                                style={{ marginLeft: -80, marginBottom: 5 }}
                                onPress={() => {
                                    addServiceItemCount(argServiceId, iServiceItem.id);
                                }}
                            >
                                <Icon name='plus-square-o' type="FontAwesome" />
                            </Button>

                            <Button
                                icon
                                small
                                danger
                                rounded
                                bordered
                                style={{ marginLeft: -80 }}
                                onPress={() => {
                                    removeServiceItemCount(argServiceId, iServiceItem.id);
                                }}
                            >
                                <Icon name='minus-square-o' type="FontAwesome" />
                            </Button>
                        </Right>
                    </ListItem>)
            );
        }


    }

    function addServiceItemCount(argServiceId: number, argClothId: number) {

        // let currentService = state.choosenServices.find(iService => iService.id == argServiceId);
        // if (currentService != undefined) {
        //     let currentServiceItem = currentService.clothTypes.find(iCloth => iCloth.id == argClothId);
        //     if (currentServiceItem != undefined) {
        //         currentServiceItem.itemCount++;
        //     }
        // }


        let newState = { ...state };
        newState.choosenServices.map(iService => {
            if (iService.id == argServiceId) {
                iService.clothTypes.map(iCloth => {
                    if (iCloth.id == argClothId) {
                        iCloth.itemCount++;
                    }
                })
            }
        });
        setState(newState);
    }

    function removeServiceItemCount(argServiceId: number, argClothId: number) {
        let newState = { ...state };
        newState.choosenServices.map(iService => {
            if (iService.id == argServiceId) {
                iService.clothTypes.map(iCloth => {
                    if (iCloth.id == argClothId && iCloth.itemCount > 0) {
                        iCloth.itemCount--;
                    }
                })
            }
        });

        setState(newState);
    }

    return (
        <View>
            {
                props.services.map(iSerice =>
                    <List
                        key={`${iSerice.id}_service_type`}
                        style={{
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: ColorConstants.lightGray2,
                        }}>
                        <ListItem
                            thumbnail
                            noIndent
                        >
                            <Left style={{
                                borderWidth: 1,
                                borderRadius: 3,
                                padding: 3,
                                borderColor: ColorConstants.lightGray2
                            }}>
                                <Thumbnail
                                    source={ImgPathConstants.serviceIcons.washing}
                                    square
                                    resizeMode="contain"
                                    resizeMethod="auto"
                                />
                            </Left>
                            <Body>
                                <Text>{iSerice.title}</Text>
                                <Text note>{iSerice.description}</Text>
                            </Body>
                            <Right>
                                <Icon name="chevron-right" type="FontAwesome5" onPress={() => {
                                    let expandedServiceId = -1;
                                    if (state.expandedServiceId < 1) {
                                        expandedServiceId = iSerice.id;
                                    }
                                    setState({ ...state, expandedServiceId });
                                }}
                                />
                            </Right>
                        </ListItem>
                        {
                            props.clothTypes.length > 0 && state.expandedServiceId == iSerice.id ?
                                <List
                                    key={`${iSerice.id}_cloth_types`}
                                >
                                    {
                                        renderCurrentServiceItems(iSerice.id)
                                    }

                                    <Button
                                        small
                                        light
                                        style={[{ alignSelf: "flex-end" }]}
                                        onPress={() => {
                                            addNewClothForService(iSerice.id);
                                        }}
                                    >
                                        <Text uppercase={false}>Add new</Text>
                                    </Button>
                                </List>
                                : null
                        }
                    </List>
                )
            }

        </View >
    )
}

export const DeliveryDetailFormComponent = () => {
    return (
        <View>

        </View>
    )
}