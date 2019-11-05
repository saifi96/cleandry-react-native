import React, { useState } from "react";
import { View, ListItem, Left, Right, Text, List, Icon, Thumbnail, H3, Body, Picker, Button, Form } from "native-base";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import ColorConstants from "../../core/constants/ColorConstants";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import ServiceData from "../../core/data-objects/ServiceData";
import ClothTypeData from "../../core/data-objects/ClothTypeData";

interface IServiceSelectionProps extends IAppGlobalProps {
    services: Array<ServiceData>;
}

class ServiceSelectionState {
    public choosenServices: Array<ServiceData> = [];
    public expandedServiceId: number = -1;
}
export const ServiceSelectionComponent = (props: IServiceSelectionProps) => {

    const [state, setState] = useState(new ServiceSelectionState());

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
                            iSerice.cloth_types.length > 0 && state.expandedServiceId == iSerice.id ?
                                <List
                                    key={`${iSerice.id}_cloth_types`}
                                >
                                    <ListItem
                                        noIndent
                                        iconRight
                                    >
                                        <Left>
                                            <Picker
                                                mode="dropdown"
                                                note
                                            >
                                                {
                                                    iSerice.cloth_types.map(iClothType =>
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
                                            <Text>1 X 200</Text>
                                            <Text note>Total: 200</Text>
                                        </Body>
                                        <Right>
                                            <Button
                                                icon
                                                small
                                                success
                                                rounded
                                                bordered
                                                style={{ marginLeft: -80, marginBottom: 5 }}
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
                                            >
                                                <Icon name='minus-square-o' type="FontAwesome" />
                                            </Button>
                                        </Right>
                                    </ListItem>
                                    <Button
                                        small
                                        light
                                        style={[{ alignSelf: "flex-end" }]}
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