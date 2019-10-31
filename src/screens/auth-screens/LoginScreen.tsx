import * as React from 'react'
import * as Redux from 'redux';
import { Container, Content, H1, Card, Text, Input, Button, View, Item, Icon } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import globalStyle from '../../styles/global-style';
import { NavigateToScreen, NavigateToRoot } from '../../components/navigation-components/AppNavigations';
import { globalColors } from '../../styles/color-style';
import IAppGlobalProps from '../../base/interfaces/IAppGlobalProps';
import { AppState } from '../../redux/reducers/Index';
import IMapAppStateToProps from '../../base/interfaces/IMapAppStateToProps';
import IMapAppDispatchToProps from '../../base/interfaces/IMapAppDispatchToProps';
import { connect } from 'react-redux';


interface IMapOwnStateToProps extends IMapAppStateToProps {
}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
}

class LoginScreen extends React.Component<Props, IState> {

    getOTP = (): void => {
        this.props.navigation.navigate(NavigateToScreen.LoginOTPScreen);
    }

    render() {
        return (
            <Container style={{ position: "relative" }}>
                <Grid style={globalStyle.posAsBackground}>
                    <Row style={[globalStyle.bgAppPrimary]}>
                    </Row>
                    <Row>
                    </Row>
                </Grid>
                <View style={[globalStyle.posAtBottom, { flex: 1, flexDirection: "column", bottom: -15 }]}>
                    <Card style={[globalStyle.borderRadiusL, { flex: 1, padding: 10, paddingTop: 25, paddingBottom: 25, marginLeft: 15, marginRight: 15 }]}>
                        <Grid>
                            <Row style={{ flexDirection: "column" }}>
                                <H1>Please Login Now</H1>
                                <Text style={{ marginTop: 5 }}>
                                    Here we will verify your identity to serve you better
                                </Text>
                            </Row>

                            <Row style={globalStyle.verticalSpacing}>
                                <Card style={[globalStyle.borderRadiusL, { flex: 1, paddingHorizontal: 20, paddingVertical: 25 }]}>
                                    <Row>
                                        <Col size={2}>
                                            <Item regular style={globalStyle.borderRadiusM}>
                                                <Input
                                                    disabled={true}
                                                    style={[globalStyle.textSizeL, { textAlign: "center" }]}
                                                    placeholder="+91"
                                                    textAlignVertical="center"
                                                    keyboardType="number-pad" />
                                            </Item>
                                        </Col>
                                        <Col size={8}>
                                            <Item regular style={globalStyle.borderRadiusM}>
                                                <Input
                                                    style={globalStyle.textSizeL}
                                                    placeholder="800 25 800 23"
                                                    placeholderTextColor={globalColors.placeholderText}
                                                    textAlignVertical="center"
                                                    keyboardType="number-pad" />
                                            </Item>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>

                            <Row style={[globalStyle.verticalSpacing, { justifyContent: "center" }]}>



                                <Button
                                    iconRight={true}
                                    large
                                    block
                                    rounded
                                    style={[globalStyle.width75Per, globalStyle.bgAppPrimary]}
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
                                    onPress={() => { this.props.navigation.navigate(NavigateToScreen.RegistrationScreen); }}
                                >
                                    <Text
                                        textBreakStrategy="highQuality"
                                        uppercase={false}
                                        style={[{ fontWeight: "400", fontSize: 16, color: globalColors.primary }]}
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
                                        style={[globalStyle.borderRadiusM, { margin: 5, backgroundColor: globalColors.danger }]}>
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
                                        style={[globalStyle.borderRadiusM, { margin: 5 }]}>
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
