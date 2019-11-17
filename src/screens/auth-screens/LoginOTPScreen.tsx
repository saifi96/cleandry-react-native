import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Item, Input, Container, Row, View, H1, Card, Button, Text, Header, H3, Left, Icon, Body, Title, Right, Content } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import GlobalStyle from '../../styles/GlobalStyle';
import ColorConstants from '../../core/constants/ColorConstants';
import { NavigateToScreen } from '../../components/navigation-components/AppNavigations';


interface IProps {
    navigation: any;
}
interface IState {
    otp: string[];
    errorOTPMsg: string;
}

class LoginOTPScreen extends React.Component<IProps, IState> {

    otpTextInput: any[] = [];

    constructor(props: IProps) {
        super(props);
        this.state = { otp: [], errorOTPMsg: "" };
    }

    componentDidMount() {
        this.otpTextInput[0]._root.focus();
    }

    renderInputs() {
        const inputs = Array(5).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}>
                <Item regular style={{ borderRadius: 10 }}>
                    <Input
                        style={[styles.inputRadius, GlobalStyle.textSizeL, { borderRadius: 10 }]}
                        keyboardType="numeric"
                        placeholder="0"
                        maxLength={1}
                        onChangeText={v => this.focusNext(j, v)}
                        onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                        ref={ref => this.otpTextInput[j] = ref}
                    />
                </Item>
            </Col>
        );
        return txt;
    }

    focusPrevious(key: string, index: number) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1]._root.focus();
    }

    focusNext(index: number, value: string) {
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1]._root.focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index]._root.blur();
        }
        const otp = this.state.otp as Array<string>;
        otp[index] = value;
        this.setState({ otp });
        //this.props.getOtp(otp.join(''));
    }

    verifyOTP() {

        if (this.state.otp.length == 5) {
            //Make API call to verify otp
            this.props.navigation.navigate(NavigateToScreen.DashboardScreen);
        }
        else {
            this.setState({ ...this.state, errorOTPMsg: "Please Enter OTP" });
        }
    }


    render() {


        return (
            <Container>
                <Header noShadow style={[GlobalStyle.bgAppPrimary]} androidStatusBarColor={ColorConstants.primary}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name="arrow-left" type="FontAwesome5" />
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <Content
                    style={{ position: "relative" }}
                    scrollEnabled={true}
                    contentContainerStyle={{ minHeight: "100%" }}>
                    <Grid style={[GlobalStyle.posAsBackground]}>
                        <Row style={[GlobalStyle.bgAppPrimary]}>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>
                    <View style={[GlobalStyle.posAtBottom, { backgroundColor: ColorConstants.white, bottom: 50 }]}>
                        <Grid style={GlobalStyle.containerPadding}>
                            <Row style={[GlobalStyle.verticalSpacing, { flexDirection: "column" }]}>
                                <H3>
                                    We have sent you OTP at
                                </H3>
                                <H1 style={[{ color: ColorConstants.primaryText, marginTop: 5 }]}>{this.props.navigation.getParam('PhoneNo')}</H1>
                            </Row>
                            <Row style={GlobalStyle.verticalSpacing}>
                                <Card style={[GlobalStyle.borderRadiusL, { flex: 1, padding: 20, paddingVertical: 40 }]}>
                                    <Grid>
                                        {this.renderInputs()}
                                    </Grid>
                                    {
                                        this.state.errorOTPMsg.length > 0
                                            ?
                                            <Text style={[GlobalStyle.errorMessage, { textAlign: "center" }]}
                                                allowFontScaling={true}
                                                textBreakStrategy="balanced"
                                            >
                                                {this.state.errorOTPMsg}
                                            </Text>
                                            :
                                            null
                                    }
                                </Card>
                            </Row>

                            <Row style={[GlobalStyle.verticalSpacing, { justifyContent: "center" }]}>
                                <Button
                                    large
                                    block
                                    iconRight={true}
                                    style={[GlobalStyle.borderRadiusM, GlobalStyle.width75Per, GlobalStyle.bgAppPrimary, { alignSelf: "center" }]}
                                    onPress={this.verifyOTP}
                                >
                                    <Text uppercase={false}>Verify Now</Text>
                                    <Icon name="arrow-right" type="FontAwesome5" />
                                </Button>
                            </Row>

                        </Grid>
                    </View>
                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    gridPad: {
        padding: 30,
    },
    txtMargin: { margin: 3 },
    inputRadius: {
        textAlign: 'center',
    }
});

export default LoginOTPScreen;