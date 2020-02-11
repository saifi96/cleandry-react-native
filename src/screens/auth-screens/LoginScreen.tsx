import * as React from 'react'
import * as Redux from 'redux';
import { Container, Content, H1, Card, Text, Input, Button, View, Item, Icon } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import GlobalStyle from '../../styles/GlobalStyle';
import { NavigateToScreen, NavigateToRoot } from '../../components/navigation-components/AppNavigations';
import ColorConstants from '../../core/constants/ColorConstants';
import IAppGlobalProps from '../../base/interfaces/IAppGlobalProps';
import { AppState } from '../../redux/reducers/Index';
import IMapAppStateToProps from '../../base/interfaces/IMapAppStateToProps';
import IMapAppDispatchToProps from '../../base/interfaces/IMapAppDispatchToProps';
import { connect } from 'react-redux';
import FormFieldModel from '../../core/models/FormFieldModel';
import Validations from '../../core/helpers/Validations';
import GlobalFunctions from '../../core/helpers/GlobalFunctions';

interface IMapOwnStateToProps extends IMapAppStateToProps {
}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
    PhoneNo: FormFieldModel;
}

class LoginScreen extends React.Component<Props, IState> {

    constructor(props: Props) {
        super(props);
        this.state = { PhoneNo: new FormFieldModel() };
        this.getOTP = this.getOTP.bind(this);
    }

    getOTP() {

        let fieldPhoneNo = { ...this.state.PhoneNo };
        fieldPhoneNo.IsError = true;
        if (GlobalFunctions.IsUndefinedNullOrEmpty(fieldPhoneNo.Value)) {
            fieldPhoneNo.Message = 'Error! Phone number is required';
        }
        else if (!Validations.isValidateMobile(fieldPhoneNo.Value)) {
            fieldPhoneNo.Message = 'Error! Please enter valid phone number';
        }
        else {
            fieldPhoneNo.IsError = false;
            fieldPhoneNo.Message = "";
        }

        if (!fieldPhoneNo.IsError) {
            this.props.navigation.navigate(NavigateToScreen.LoginOTPScreen,
                { phoneNo: `+91 ${fieldPhoneNo.Value}` });
        }
        else {
            this.setState({
                ...this.state,
                PhoneNo: fieldPhoneNo
            });
        }

    }

    render() {
        return (
            <Container style={{ position: "relative" }}>
                <Grid style={GlobalStyle.posAsBackground}>
                    <Row style={[GlobalStyle.bgAppPrimary]}>
                    </Row>
                    <Row>
                    </Row>
                </Grid>
                <View style={[GlobalStyle.posAtBottom, { flex: 1, flexDirection: "column", bottom: -15 }]}>
                    <Card style={[GlobalStyle.borderRadiusL, { flex: 1, padding: 10, paddingTop: 25, paddingBottom: 25, marginLeft: 15, marginRight: 15 }]}>
                        <Grid>
                            <Row style={{ flexDirection: "column" }}>
                                <H1>Please Login Now</H1>
                                <Text style={{ marginTop: 5 }}>
                                    Here we will verify your identity to serve you better
                                </Text>
                            </Row>

                            <Row style={GlobalStyle.verticalSpacing}>
                                <Card style={[GlobalStyle.borderRadiusL, { flex: 1, paddingHorizontal: 20, paddingVertical: 25 }]}>
                                    <Row>
                                        <Col size={2}>
                                            <Item
                                                regular
                                                error={this.state.PhoneNo.IsError}
                                                style={GlobalStyle.borderRadiusM}>
                                                <Input
                                                    disabled={true}
                                                    style={[GlobalStyle.textSizeL, { textAlign: "center" }]}
                                                    placeholder="+91"
                                                    textAlignVertical="center"
                                                    keyboardType="number-pad" />
                                            </Item>
                                        </Col>
                                        <Col size={8}>
                                            <Item
                                                regular
                                                error={this.state.PhoneNo.IsError}
                                                style={GlobalStyle.borderRadiusM}
                                            >
                                                <Input
                                                    style={GlobalStyle.textSizeL}
                                                    placeholder="Enter phone no."
                                                    maxLength={10}
                                                    onChangeText={(txt) => {
                                                        this.setState({
                                                            ...this.state,
                                                            PhoneNo: {
                                                                ...this.state.PhoneNo,
                                                                Value: txt
                                                            }
                                                        });
                                                    }}
                                                    value={this.state.PhoneNo.Value}
                                                    placeholderTextColor={ColorConstants.placeholderText}
                                                    textAlignVertical="center"
                                                    keyboardType="number-pad"
                                                />
                                            </Item>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>

                            <Row style={[GlobalStyle.verticalSpacing, { justifyContent: "center" }]}>
                                <Button
                                    large
                                    block
                                    rounded
                                    iconRight
                                    style={[GlobalStyle.width75Per, GlobalStyle.bgAppPrimary]}
                                    onPress={this.getOTP}
                                >
                                    <Text
                                        uppercase={false}
                                        textBreakStrategy="balanced"
                                    >
                                        Get OTP
                                    </Text>
                                    <Icon name="arrow-right" type="FontAwesome5" />
                                </Button>
                            </Row>

                            <View style={[{ marginBottom: 10 }, { alignSelf: "flex-end" }]}>
                                <Button
                                    block
                                    transparent
                                    onPress={() => {
                                        this.props.navigation.navigate(NavigateToScreen.RegistrationScreen);
                                    }}
                                >
                                    <Text
                                        textBreakStrategy="highQuality"
                                        uppercase={false}
                                        style={[{ fontWeight: "400", fontSize: 16, color: ColorConstants.primary }]}
                                    >
                                        Don't have account register now
                                    </Text>
                                </Button>
                            </View>

                            <Row>
                                <Col>
                                    <Button
                                        iconRight={true}
                                        large
                                        style={[GlobalStyle.borderRadiusM, { margin: 5, backgroundColor: ColorConstants.danger }]}>
                                        <Text uppercase={false}>
                                            Google
                                        </Text>
                                        <Icon name="google" type="FontAwesome5" />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        iconRight={true}
                                        large
                                        style={[GlobalStyle.borderRadiusM, { margin: 5 }]}>
                                        <Text uppercase={false}>
                                            Facebook
                                        </Text>
                                        <Icon name="facebook" type="FontAwesome5" />
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </View>
            </Container >
        );
    }
}


const mapStateToProps = (state: AppState, ownProps: IOwnProps): IMapOwnStateToProps => ({
    appGlobalState: state.AppGlobalState,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, ownProps: IOwnProps): IMapOwnDispatchToProps => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
