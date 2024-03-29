import React, { useState } from "react";
import { View, ListItem, Left, Right, Text, List, Icon, H3, Body, Picker, Button, Form, Item, Input } from "native-base";
import ImgPathConstants from "../../core/constants/ImgPathConstants";
import ColorConstants from "../../core/constants/ColorConstants";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import ServiceModel from "../../core/models/ServiceModel";
import ServiceUnitModel from "../../core/models/ServiceUnitModel";
import GlobalStyle from "../../styles/GlobalStyle";
import { StyleSheet } from "react-native";
import FormFieldModel from "../../core/models/FormFieldModel";
import { Grid, Row, Col } from "react-native-easy-grid";
import { ThumbnailRenderer } from "../general-components/UIComponents";
import { ServiceUnitSelectionAdapter } from "../../core/models/Adapters";

//#region Service Selection Component
interface IServiceSelectionProps extends IAppGlobalProps {
    services: Array<ServiceModel>;
    clothTypes: Array<ServiceUnitModel>;
}
interface ChoosenServicesData {
    id: number;
    clothTypes: Array<{
        id: number,
        itemCount: number,
        basePrice: number,
        selectableCloths: Array<ServiceUnitModel>
    }>;
}
class ServiceSelectionState {
    public choosenServices: Array<ChoosenServicesData> = [];
    public expandedServiceId: number = -1;
}
// export const ServiceSelectionComponent = (props: IServiceSelectionProps) => {
//     const [state, setState] = useState(new ServiceSelectionState());

//     function addNewClothForService(argServiceId: number) {
//         if (props.clothTypes.length) {

//             let newState = { ...state };
//             let serviceIndex = newState.choosenServices.findIndex(iService => iService.id == argServiceId);
//             if (serviceIndex > -1) {
//                 let currentServices = newState.choosenServices[serviceIndex];

//                 let selectableCloths = props.clothTypes.filter((iCloth) => {
//                     if (currentServices.clothTypes.find(iCurrentServiceCloth => iCloth.id == iCurrentServiceCloth.id) != undefined) {
//                         return false;
//                     }
//                     else {
//                         return true;
//                     }
//                 });

//                 if (selectableCloths.length > 0) {
//                     currentServices.clothTypes.push({
//                         id: selectableCloths[0].id,
//                         itemCount: 1, basePrice: selectableCloths[0].base_price,
//                         selectableCloths: selectableCloths
//                     });
//                 }

//                 newState.choosenServices[serviceIndex] = currentServices;
//             }
//             else {
//                 let objFirstClothType = props.clothTypes.find(iCloth => iCloth.position == 1);
//                 if (objFirstClothType != undefined) {
//                     newState.choosenServices.push({
//                         id: argServiceId, clothTypes: [{
//                             id: objFirstClothType.id,
//                             basePrice: objFirstClothType.base_price,
//                             itemCount: 1,
//                             selectableCloths: props.clothTypes
//                         }]
//                     });
//                 }
//             }

//             setState(newState);
//         }
//     }

//     function renderCurrentServiceItems(argServiceId: number) {
//         if (props.clothTypes.length) {
//             return (
//                 props.clothTypes.map(iServiceItem =>
//                     <ListItem
//                         noIndent
//                         iconRight
//                     >
//                         <Left>
//                             <Button
//                                 icon
//                                 small
//                                 danger
//                                 transparent
//                                 style={{ marginLeft: -10, marginTop: 8 }}
//                                 onPress={() => {
//                                     removeServiceItem(argServiceId, iServiceItem.id);
//                                 }}
//                             >
//                                 <Icon name='remove' type="FontAwesome" />
//                             </Button>
//                             <Picker
//                                 note
//                                 mode="dropdown"
//                                 onValueChange={(value, index) => {

//                                 }}
//                             >
//                                 {
//                                     iServiceItem.selectableCloths.map(iClothType =>
//                                         <Picker.Item
//                                             key={`${iClothType}_cloth_type`}
//                                             label={iClothType.units_title}
//                                             value={iClothType.id}
//                                         />
//                                     )
//                                 }
//                             </Picker>
//                         </Left>
//                         <Body>
//                             <View style={{ flexDirection: "row" }}>
//                                 <Text note>
//                                     QTY:&nbsp;
//                                     </Text>
//                                 <Text>
//                                     {iServiceItem.itemCount} X&nbsp;
//                                     </Text>
//                                 <Text note>
//                                     &#8377;&nbsp;:
//                                     </Text>
//                                 <Text>
//                                     {iServiceItem.basePrice}
//                                 </Text>
//                             </View>
//                             <Text note style={{ fontSize: 18, marginLeft: 0 }}>
//                                 Total: &#8377; {iServiceItem.itemCount * iServiceItem.basePrice}
//                             </Text>
//                         </Body>
//                         <Right>
//                             <Button
//                                 icon
//                                 small
//                                 success
//                                 transparent
//                                 style={{ marginLeft: -80 }}
//                                 onPress={() => {
//                                     updateServiceItemCount(argServiceId, iServiceItem.id, 1);
//                                 }}
//                             >
//                                 <Icon name='plus-square-o' type="FontAwesome" />
//                             </Button>

//                             <Button
//                                 icon
//                                 small
//                                 danger
//                                 transparent
//                                 style={{ marginLeft: -80 }}
//                                 onPress={() => {
//                                     updateServiceItemCount(argServiceId, iServiceItem.id, -1);
//                                 }}
//                             >
//                                 <Icon name='minus-square-o' type="FontAwesome" />
//                             </Button>
//                         </Right>
//                     </ListItem>)
//             )
//         } else {
//             return null
//         }

//     }

//     function updateServiceItemCount(argServiceId: number, argClothId: number, unitChange: number) {
//         let newState = { ...state };
//         newState.choosenServices.map(iService => {
//             if (iService.id == argServiceId) {
//                 iService.clothTypes.map(iCloth => {
//                     if (iCloth.id == argClothId) {
//                         if (unitChange == 1) {
//                             iCloth.itemCount++;
//                         } if (unitChange == -1 && iCloth.itemCount > 0) {
//                             iCloth.itemCount--;
//                         }
//                     }
//                 })
//             }
//         });
//         setState(newState);
//     }

//     function removeServiceItem(argServiceId: number, argClothId: number) {
//         let newState = { ...state };
//         let serviceIndex = newState.choosenServices.findIndex(iService => iService.id == argServiceId);
//         if (serviceIndex > -1) {
//             let clothIndex = newState.choosenServices[serviceIndex].clothTypes.findIndex(iCloth => iCloth.id == argClothId);
//             if (clothIndex > -1) {
//                 newState.choosenServices[serviceIndex].clothTypes.splice(clothIndex, 1);
//             }
//         }
//         setState(newState);
//     }

//     return (
//         <View>
//             <H3 style={styles.sectionTitle}>Choose Services</H3>
//             {
//                 props.services.map(iSerice =>
//                     <List
//                         key={`${iSerice.id}_service_type`}
//                         style={{
//                             borderWidth: 1,
//                             borderRadius: 5,
//                             borderColor: ColorConstants.lightGray2,
//                             marginBottom: 10
//                         }}>
//                         <ListItem
//                             thumbnail
//                             noIndent
//                             noBorder
//                             onPress={() => {
//                                 let expandedServiceId = -1;
//                                 if (state.expandedServiceId < 1) {
//                                     expandedServiceId = iSerice.id;
//                                 }
//                                 setState({ ...state, expandedServiceId });
//                             }}
//                         >
//                             <Left style={{
//                                 borderWidth: 1,
//                                 borderRadius: 3,
//                                 padding: 3,
//                                 borderColor: ColorConstants.lightGray2
//                             }}>
//                                 <Thumbnail
//                                     source={ImgPathConstants.serviceIcons.washing}
//                                     square
//                                     resizeMode="contain"
//                                     resizeMethod="auto"
//                                 />
//                             </Left>
//                             <Body>
//                                 <Text>{iSerice.title}</Text>
//                                 <Text note>{iSerice.description}</Text>
//                             </Body>
//                             <Right>
//                                 <Icon name={state.expandedServiceId == iSerice.id ? 'chevron-down' : 'chevron-right'} type="FontAwesome5" />
//                             </Right>
//                         </ListItem>
//                         {
//                             props.clothTypes.length && state.expandedServiceId == iSerice.id ?
//                                 <List
//                                     key={`${iSerice.id}_cloth_types`}
//                                 >
//                                     {renderCurrentServiceItems(iSerice.id)}

//                                     <Button
//                                         small
//                                         light
//                                         style={[{ alignSelf: "flex-end" }]}
//                                         onPress={() => {
//                                             addNewClothForService(iSerice.id);
//                                         }}
//                                     >
//                                         <Text uppercase={false}>Add new</Text>
//                                     </Button>
//                                 </List>
//                                 : null
//                         }
//                     </List>
//                 )
//             }

//         </View >
//     )
// }
//#endregion

//#region Service Unit Selection Component
interface IServiceUnitSelectionProps extends IAppGlobalProps {
    serviceUnitSelections: ServiceUnitSelectionAdapter[]
    onServiceUnitAdd?: (argServiceUnitId: number) => void
    onServiceUnitRemove?: (argServiceUnitId: number) => void
}
export const ServiceUnitSelectionComponent = (props: IServiceUnitSelectionProps) => {

    return (
        <View>
            <H3 style={styles.sectionTitle}>Choose Service Unit</H3>
            <List>
                {
                    props.serviceUnitSelections.map((iClothAdapter, idx) => {
                        return (
                            <ListItem thumbnail itemDivider noBorder style={[GlobalStyle.listItemNarrow]} key={iClothAdapter.serviceUnit.id}>
                                <Left style={{ flex: 0.2 }}>
                                    <ThumbnailRenderer source={{ uri: iClothAdapter.serviceUnit.predefine_image }} square />
                                </Left>
                                <Body style={{ flex: 0.5 }}>
                                    <Text>{iClothAdapter.serviceUnit.units_title}</Text>
                                    <Text note numberOfLines={1} style={{ color: ColorConstants.primaryText }}>Price &#8377;{iClothAdapter.serviceUnit.base_price}</Text>
                                </Body>
                                <Right style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center' }}>
                                    <Button
                                        icon
                                        small
                                        rounded
                                        danger
                                        onPress={props.onServiceUnitRemove?.bind(null, iClothAdapter.serviceUnit.id)}
                                    >
                                        <Icon name='minus-square-o' type="FontAwesome" />
                                    </Button>

                                    <Button bordered style={[GlobalStyle.horizontalElmSeparator]}>
                                        <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{iClothAdapter.selectionCount}</Text>
                                    </Button>

                                    <Button
                                        icon
                                        small
                                        rounded
                                        success
                                        onPress={props.onServiceUnitAdd?.bind(null, iClothAdapter.serviceUnit.id)}
                                    >
                                        <Icon name='plus-square-o' type="FontAwesome" />
                                    </Button>

                                </Right>
                            </ListItem>
                        )
                    }
                    )
                }
            </List>
        </View>
    )
}
//#endregion

//#region Delivery Detail Form Component
class DeliveryDetailFormState {
    public Name = new FormFieldModel();
    public Phone = new FormFieldModel();
    public Pincode = new FormFieldModel();
    public Address = new FormFieldModel();
}
export const DeliveryDetailFormComponent = () => {
    const [state, setState] = useState(new DeliveryDetailFormState());
    return (
        <View>
            <H3 style={styles.sectionTitle}>Delivery Detail</H3>
            <Form>
                <Item
                    fixedLabel={true}
                    regular
                    error={state.Name.IsError}
                    style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                    <Input
                        style={GlobalStyle.textSizeM}
                        placeholder="Your name"
                        onChangeText={(txt) => {
                            setState({
                                ...state,
                                Name: { ...state.Name, Value: txt }
                            });
                        }}
                        placeholderTextColor={ColorConstants.placeholderText} />
                    <Icon name="user" type="FontAwesome5" />
                </Item>

                <Item
                    fixedLabel={true}
                    regular
                    error={state.Phone.IsError}
                    style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                    <Input
                        style={GlobalStyle.textSizeM}
                        keyboardType="numeric"
                        placeholder="Phone"
                        maxLength={10}
                        onChangeText={(txt) => {
                            setState({
                                ...state,
                                Phone: { ...state.Phone, Value: txt }
                            });
                        }}
                        placeholderTextColor={ColorConstants.placeholderText}
                    />
                    <Icon name="cellphone-android" type="MaterialCommunityIcons" />
                </Item>

                <Item
                    fixedLabel={true}
                    regular
                    error={state.Pincode.IsError}
                    style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                    <Input
                        style={GlobalStyle.textSizeM}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(txt) => {
                            setState({
                                ...state,
                                Pincode: { ...state.Pincode, Value: txt }
                            });
                        }}
                        placeholder="Enter pincode"
                        placeholderTextColor={ColorConstants.placeholderText}
                    />
                    <Icon name="my-location" type="MaterialIcons">
                    </Icon>
                </Item>

                <Item
                    fixedLabel={true}
                    regular
                    error={state.Address.IsError}
                    style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                    <Input
                        style={GlobalStyle.textSizeM}
                        onChangeText={(txt) => {
                            setState({
                                ...state,
                                Address: { ...state.Address, Value: txt }
                            });
                        }}
                        placeholder="Enter address"
                        placeholderTextColor={ColorConstants.placeholderText}
                    />
                    <Icon name="add-location" type="MaterialIcons" />
                </Item>

            </Form>
        </View>
    )
}
//#endregion

//#region Order Detail Component
interface IOrderDetailProps {
    cartItems: ServiceUnitSelectionAdapter[]
}
export const OrderDetailComponent = (props: IOrderDetailProps) => {
    return (
        <View>
            <H3 style={styles.sectionTitle}>Order Detail</H3>
            {
                props.cartItems.map(item => {
                    return (
                        <View style={[GlobalStyle.blockElement]} key={item.serviceUnit.id}>
                            <Left style={{ flex: 0.6 }}>
                                <Button iconLeft transparent>
                                    <Icon name="close" type="FontAwesome" style={{ color: ColorConstants.danger }} active />
                                    <Text uppercase={false} adjustsFontSizeToFit style={GlobalStyle.textSizeM}>{item.serviceUnit.units_title}</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 0.4 }}>
                                <Button iconLeft transparent>
                                    <Icon name="rupee" type="FontAwesome" style={styles.rupeeIcon} />
                                    <Text suppressHighlighting adjustsFontSizeToFit style={[GlobalStyle.textSizeM]} uppercase={false}>{item.serviceUnit.base_price} X {item.selectionCount} K.g</Text>
                                </Button>
                            </Right>
                        </View>
                    )
                })
            }
            {
                props.cartItems.length > 0
                    ?
                    <View style={{ marginTop: 10 }}>
                        <View style={[{ borderTopWidth: 1, borderTopColor: ColorConstants.lightGray2 }, GlobalStyle.blockElement, styles.condencedRow]}>
                            <Left style={{ flex: 0.6 }}>
                                <Button transparent>
                                    <Text style={[GlobalStyle.textSizeM, { marginLeft: 5 }]} adjustsFontSizeToFit uppercase={false}>Sub Total</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 0.4 }}>
                                <Button iconLeft transparent>
                                    <Icon name="rupee" type="FontAwesome" style={styles.rupeeIcon} />
                                    <Text style={[GlobalStyle.textSizeM]} adjustsFontSizeToFit>
                                        {props.cartItems.map(item => item.selectionCount * item.serviceUnit.base_price).reduce((prev, current) => (prev + current))}.00
                                        </Text>
                                </Button>
                            </Right>
                        </View>
                        <View style={[GlobalStyle.blockElement, styles.condencedRow]}>
                            <Left style={{ flex: 0.6 }}>
                                <Button transparent>
                                    <Text style={[GlobalStyle.textSizeM, { marginLeft: 5 }]} adjustsFontSizeToFit uppercase={false}>Tax</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 0.4 }}>
                                <Button iconLeft transparent>
                                    <Icon name="rupee" type="FontAwesome" style={styles.rupeeIcon} />
                                    <Text style={[GlobalStyle.textSizeM]} adjustsFontSizeToFit>
                                        20.00
                                    </Text>
                                </Button>
                            </Right>
                        </View>
                        <View style={[GlobalStyle.blockElement]}>
                            <Left style={{ flex: 0.6 }}>
                                <Button transparent>
                                    <Text style={[GlobalStyle.textSizeM, { marginLeft: 5 }]} adjustsFontSizeToFit uppercase={false}>Delivery Charges</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 0.4 }}>
                                <Button transparent>
                                    <Text style={[GlobalStyle.textSizeM]} adjustsFontSizeToFit>
                                        Free
                                    </Text>
                                </Button>
                            </Right>
                        </View>
                        <View style={[GlobalStyle.blockElement, GlobalStyle.verticalSpacing]}>
                            <Item regular style={[GlobalStyle.blockElement]} rounded>
                                <Input placeholder='Have a promocode?' />
                            </Item>
                        </View>
                        <View style={[GlobalStyle.blockElement, { justifyContent: 'center' }]}>
                            <Button large hasText={true} style={[GlobalStyle.width75Per, GlobalStyle.borderRadiusL, GlobalStyle.bgAppPrimary]}>
                                <Text uppercase={false} textBreakStrategy="balanced" style={[GlobalStyle.blockElement, { textAlign: 'center' }]}>Apply</Text>
                            </Button>
                        </View>
                    </View>
                    : null
            }
        </View>
    )
}
//#endregion

const styles = StyleSheet.create({
    sectionTitle: {
        marginVertical: 10,
        fontWeight: "bold",
        color: ColorConstants.placeholderText
    },
    condencedRow: { marginBottom: -12 },
    rupeeIcon: {
        marginRight: -12,
        fontSize: 16
    }
})