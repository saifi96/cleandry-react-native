import * as React from 'react'
import { Container, H1, Card, Text, Input, Button, View, Item, Icon, Form, Header, Left, Body, Right, Content } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import GlobalStyle from '../../styles/GlobalStyle';
import { NavigateToScreen, NavigateToRoot } from '../../components/navigation-components/AppNavigations';
import ColorConstants from '../../core/constants/ColorConstants';
import { StyleSheet, ScrollView } from 'react-native';


export interface IProps {
    navigation: any
}
export interface IState { }

class RegistrationScreen extends React.Component<IProps, IState> {

    getOTP = (): void => {
        this.props.navigation.navigate(NavigateToScreen.LoginOTPScreen);
    }

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
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="Name"
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="user" type="FontAwesome5">
                                </Icon>
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="Email"
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="email-outline" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    keyboardType="number-pad"
                                    placeholder="Phone"
                                    placeholderTextColor={ColorConstants.placeholderText}
                                />
                                <Icon name="cellphone-android" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[GlobalStyle.borderRadiusM, GlobalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={GlobalStyle.textSizeM}
                                    placeholder="E.g 10-07-1996"
                                    placeholderTextColor={ColorConstants.placeholderText} />
                                <Icon name="calendar-month" type="MaterialCommunityIcons" />
                            </Item>

                        </Form>

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


const styles = StyleSheet.create({
    inputFormContainer: {
        // borderRadius: 10,
        // padding: 5,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        // borderColor: ColorConstants.danger
    }
})