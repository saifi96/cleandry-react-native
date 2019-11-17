import * as React from 'react'
import { Container, H1, Card, Text, Input, Button, View, Item, Icon, Form, Header, Left, Body, Right, Content } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import DateTimePicker from "react-native-modal-datetime-picker";
import GlobalStyle from '../../styles/GlobalStyle';
import { NavigateToScreen } from '../../components/navigation-components/AppNavigations';
import ColorConstants from '../../core/constants/ColorConstants';
import FormFieldModel from '../../core/models/FormFieldModel';
import GlobalFunctions from '../../core/helpers/GlobalFunctions';
import Validations from '../../core/helpers/Validations';


export interface IProps {
    navigation: any
}

type Props = IProps;

export interface IState {
    Name: FormFieldModel;
    Email: FormFieldModel;
    Phone: FormFieldModel;
    DOB: FormFieldModel;
    ShowDateTimePicker: boolean;
}

class RegistrationScreen extends React.Component<Props, IState> {


    constructor(props: Props) {
        super(props);
        this.state = {
            Name: new FormFieldModel(),
            Email: new FormFieldModel(),
            Phone: new FormFieldModel(),
            DOB: new FormFieldModel(),
            ShowDateTimePicker: false,
        }

        this.showDatePicker = this.showDatePicker.bind(this);
        this.hideDatePicker = this.hideDatePicker.bind(this);
        this.confirmDOB = this.confirmDOB.bind(this);
        this.getOTP = this.getOTP.bind(this);
    }

    getOTP() {

        let formState = { ...this.state };
        let bIsValid = true;

        if (!Validations.isValidName(formState.Name.Value.trim())) {
            bIsValid = false;
            formState.Name.IsError = true;
        }
        else {
            formState.Name.IsError = false;
        }

        if (!GlobalFunctions.IsUndefinedNullOrEmpty(formState.Email.Value)) {
            if (!Validations.isValidateEmail(formState.Email.Value.trim())) {
                bIsValid = false;
                formState.Email.IsError = true;
            }
            else {
                formState.Email.IsError = false;
            }
        }

        if (!Validations.isValidateMobile(formState.Phone.Value.trim())) {
            bIsValid = false;
            formState.Phone.IsError = true;
        }
        else {
            formState.Phone.IsError = false;
        }

        //ToDo
        //Date of birth validation
        if (bIsValid) {
            this.props.navigation.navigate(NavigateToScreen.LoginOTPScreen,
                { phoneNo: `+91 ${formState.Phone.Value}` });
        }
        else {
            this.setState({ ...formState });
        }

    }

    //#region Date picker functionality
    showDatePicker() {
        this.setState({
            ...this.state,
            ShowDateTimePicker: true
        });
    }

    hideDatePicker() {
        this.setState({
            ...this.state,
            ShowDateTimePicker: false
        });
    }

    confirmDOB(argDate: Date) {
        this.setState({
            ...this.state,
            DOB: { ...this.state.DOB, Value: GlobalFunctions.GetShortDate(argDate) }
        })
    }
    //#endregion

    render() {
        return (
            <Container style={{ position: "relative" }}>
                <Header noShadow style={GlobalStyle.bgAppPrimary}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => { this.props.navigation.navigate(NavigateToScreen.LoginScreen) }}>
                            <Icon name="arrow-left" type="FontAwesome5" />
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>

                <Content
                    padder
                    enableAutomaticScroll={true}
                    style={{ position: "relative" }}
                    contentContainerStyle={{ minHeight: "100%" }}
                >
                    <Grid style={[GlobalStyle.posAsBackground]}>
                        <Row style={GlobalStyle.bgAppPrimary}>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>

                    <Card style={[GlobalStyle.borderRadiusL, { flex: 1, padding: 10, paddingTop: 50, paddingBottom: 0, marginBottom: -15, marginTop: "10%" }]}>
                        <View style={{ flexDirection: "column" }}>
                            <H1>Register Now</H1>
                            <Text style={{ marginTop: 5 }}>
                                Here we will verify your identity to serve you better
                            </Text>
                        </View>

                        <Form style={[GlobalStyle.verticalSpacing]}>

                            <Item
                                fixedLabel={true}
                                regular
                                error={this.state.Name.IsError}
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="Name*"
                                    onChangeText={(txt) => {
                                        this.setState({
                                            ...this.state,
                                            Name: { ...this.state.Name, Value: txt }
                                        });
                                    }}
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="user" type="FontAwesome5">
                                </Icon>
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                error={this.state.Email.IsError}
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="Email"
                                    onChangeText={(txt) => {
                                        this.setState({
                                            ...this.state,
                                            Email: { ...this.state.Email, Value: txt }
                                        });
                                    }}
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="email-outline" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                error={this.state.Phone.IsError}
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    keyboardType="phone-pad"
                                    onChangeText={(txt) => {
                                        this.setState({
                                            ...this.state,
                                            Phone: { ...this.state.Phone, Value: txt }
                                        });
                                    }}
                                    maxLength={10}
                                    placeholder="Phone*"
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="cellphone-android" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                error={this.state.DOB.IsError}
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="DD/MM/YYYY"
                                    value={this.state.DOB.Value}
                                    onFocus={this.showDatePicker}
                                    onBlur={this.hideDatePicker}
                                    placeholderTextColor={ColorConstants.placeholderText} />
                                <Icon
                                    name="calendar-month"
                                    type="MaterialCommunityIcons"
                                    onPress={this.showDatePicker}
                                />
                            </Item>

                        </Form>

                        <DateTimePicker
                            isVisible={this.state.ShowDateTimePicker}
                            mode="date"
                            onConfirm={this.confirmDOB}
                            onCancel={this.hideDatePicker}
                            onHideAfterConfirm={this.hideDatePicker}
                        />

                        <View style={[GlobalStyle.verticalSpacing, { justifyContent: "center", flexDirection: "row" }]}>
                            <Button
                                iconRight={true}
                                large
                                block
                                rounded
                                style={[GlobalStyle.width75Per, GlobalStyle.bgAppPrimary]}
                                onPress={this.getOTP}
                            >
                                <Text
                                    uppercase={false}
                                    textBreakStrategy="balanced"
                                >
                                    Register now
                                    </Text>
                                <Icon name="arrow-right" type="FontAwesome5" />
                            </Button>
                        </View>

                        <View style={[{ marginBottom: 10 }, { alignSelf: "flex-end" }]}>
                            <Button
                                block
                                transparent
                                onPress={() => { this.props.navigation.navigate(NavigateToScreen.LoginScreen); }}
                            >
                                <Text
                                    textBreakStrategy="highQuality"
                                    uppercase={false}
                                    style={{ fontWeight: "400", fontSize: 16 }}
                                >
                                    Already have account
                                    </Text>
                            </Button>
                        </View>

                        <View style={[{ flexDirection: "row" }]}>
                            <View style={{ flex: 1 }}>
                                <Button
                                    iconRight={true}
                                    large
                                    style={[GlobalStyle.borderRadiusM, { margin: 5, backgroundColor: ColorConstants.danger }]}>
                                    <Text uppercase={false}>
                                        Google
                                        </Text>
                                    <Icon name="google" type="FontAwesome5">
                                    </Icon>
                                </Button>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    iconRight={true}
                                    large
                                    style={[GlobalStyle.borderRadiusM, GlobalStyle.bgAppPrimary, { margin: 5 }]}>
                                    <Text uppercase={false}>
                                        Facebook
                                        </Text>
                                    <Icon name="facebook" type="FontAwesome5" />
                                </Button>
                            </View>
                        </View>
                    </Card>
                </Content>

            </Container >
        );
    }
}

export default RegistrationScreen;


