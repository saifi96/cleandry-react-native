import React from 'react';
import { View, Grid, Row, Item, Input, Col, Text, Picker } from 'native-base';
import GlobalStyle from '../../styles/GlobalStyle';
import ColorConstants from '../../core/constants/ColorConstants';

export const RateChartComponent = () => {

    return (
        <View>
            <View style={[{
                backgroundColor: ColorConstants.lightGray1
            },
            GlobalStyle.borderRadiusM, GlobalStyle.paddingL]}>
                <Grid>
                    <Row>
                        <Col>
                            <Item
                                style={[{ backgroundColor: ColorConstants.white }, GlobalStyle.borderRadiusS]}
                            >
                                <Input
                                    keyboardType="numeric"
                                    placeholder="Pin Code"
                                />
                            </Item>

                        </Col>

                        <Col>
                            <Item
                                style={[{ backgroundColor: ColorConstants.white }, GlobalStyle.borderRadiusS]}
                            >
                                <Picker
                                    note
                                    mode="dropdown"
                                //selectedValue={`${state.selectedServiceId}`}
                                // onValueChange={(value, index) => {
                                //     setState({ ...state, selectedServiceId: parseInt(value) });
                                // }}
                                >
                                    <Picker.Item
                                        label="Service Type"
                                        value={0}
                                        key="service_1"
                                    />
                                </Picker>
                            </Item>
                        </Col>

                        <Col>
                            <Item
                                style={[{ backgroundColor: ColorConstants.white }, GlobalStyle.borderRadiusS]}
                            >
                                <Picker
                                    note
                                    mode="dropdown"
                                //selectedValue={`${state.selectedServiceId}`}
                                // onValueChange={(value, index) => {
                                //     setState({ ...state, selectedServiceId: parseInt(value) });
                                // }}
                                >
                                    <Picker.Item
                                        label="Cloth Type"
                                        value={0}
                                        key="cloth_type_1"
                                    />
                                </Picker>
                            </Item>
                        </Col>

                    </Row>
                </Grid>
            </View>

            <View style={[{ backgroundColor: ColorConstants.lightGray1 }, GlobalStyle.borderRadiusM, GlobalStyle.verticalSpacing]}>
                <Text>Rate Chart Table</Text>
            </View>
        </View>
    )
}