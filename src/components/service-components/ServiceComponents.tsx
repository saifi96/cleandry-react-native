import React from "react";
import { View, ListItem, Left, Right, Text, List, Icon, Thumbnail, H3, Body, Picker, Button, Form } from "native-base";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import ColorConstants from "../../core/constants/ColorConstants";


export const ServiceSelectionComponent = () => {

    return (
        <View>
            <List style={{
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
                        <Text>Simon Mignolet</Text>
                        <Text note>Description goes here</Text>
                    </Body>
                    <Right>
                        <Icon name="chevron-right" type="FontAwesome5" />
                    </Right>
                </ListItem>
                <List>
                    <ListItem
                        noIndent
                        iconRight
                    >
                        <Left>
                            <Picker
                                mode="dropdown"
                                note
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
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
            </List>
        </View >
    )
}

export const DeliveryDetailFormComponent = () => {
    return (
        <View>

        </View>)
}