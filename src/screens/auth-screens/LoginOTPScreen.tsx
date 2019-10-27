import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Item, Input, Container, Row, View, H1, Card, Button, Text, Header, H3, Left, Icon, Body, Title, Right, Content } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import globalStyle from '../../styles/global-style';
import { globalColors } from '../../styles/color-style';
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
        this.state = { otp: [], errorOTPMsg: "Invalid OTP" };
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
                        style={[styles.inputRadius, globalStyle.textSizeL, { borderRadius: 10 }]}
                        keyboardType="numeric"
                        placeholder="0"
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


    render() {
        return (
            <Container>
                <Header noShadow style={[globalStyle.bgAppPrimary]}>
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
                    scrollsToTop={true}
                    scrollEnabled={true}
                    snapToStart={true}
                    contentContainerStyle={{ minHeight: "100%" }}>
                    <Grid style={[globalStyle.posAsBackground]}>
                        <Row style={[globalStyle.bgAppPrimary]}>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>
                    <View style={[globalStyle.posAtBottom, { backgroundColor: globalColors.white, bottom: 50 }]}>
                        <Grid style={globalStyle.containerPadding}>
                            <Row style={[globalStyle.verticalSpacing, { flexDirection: "column" }]}>
                                <H3>
                                    We have sent you OTP at
                                </H3>
                                <H1 style={[{ color: globalColors.primaryText, marginTop: 5 }]}>+91 800 244 0033</H1>
                            </Row>
                            <Row style={globalStyle.verticalSpacing}>
                                <Card style={[globalStyle.borderRadiusL, { flex: 1, padding: 20, paddingVertical: 40 }]}>
                                    <Grid>
                                        {this.renderInputs()}
                                    </Grid>
                                    {
                                        this.state.errorOTPMsg.length > 0
                                            ?
                                            <Text style={[globalStyle.errorMessage, { textAlign: "center" }]}
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

                            <Row style={[globalStyle.verticalSpacing, { justifyContent: "center" }]}>
                                <Button
                                    large
                                    block
                                    iconRight={true}
                                    style={[globalStyle.borderRadiusM, globalStyle.width75Per, globalStyle.bgAppPrimary, { alignSelf: "center" }]}
                                    onPress={() => {
                                        this.props.navigation.navigate(NavigateToScreen.DashboardScreen);
                                    }}
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