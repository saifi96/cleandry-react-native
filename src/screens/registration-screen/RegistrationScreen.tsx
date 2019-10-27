import * as React from 'react'
import { Container, H1, Card, Text, Input, Button, View, Item, Icon, Form, Label, Header, Left, Body, Right, Content, Footer } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import globalStyle from '../../styles/global-style';
import { NavigateToScreen, NavigateToRoot } from '../../components/navigations/AppNavigations';
import { globalColors } from '../../styles/color-style';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';



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
                <Header noShadow style={globalStyle.bgAppPrimary}>
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
                    <Grid style={[globalStyle.posAsBackground]}>
                        <Row style={globalStyle.bgAppPrimary}>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>

                    <Card style={[globalStyle.borderRadiusL, { flex: 1, padding: 10, paddingTop: 50, paddingBottom: 0, marginBottom: -15, marginTop: "10%" }]}>
                        <View style={{ flexDirection: "column" }}>
                            <H1>Register Now</H1>
                            <Text style={{ marginTop: 5 }}>
                                Here we will verify your identity to serve you better
                            </Text>
                        </View>

                        <Form style={[globalStyle.verticalSpacing]}>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={globalStyle.inputTextSizeM}
                                    placeholder="Name"
                                    placeholderTextColor={globalColors.placeholderText}
                                />
                                <Icon name='user' type="FontAwesome5" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={globalStyle.inputTextSizeM}
                                    placeholder="Email"
                                    placeholderTextColor={globalColors.placeholderText}
                                />
                                <Icon name="email-outline" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={globalStyle.inputTextSizeM}
                                    keyboardType="number-pad"
                                    placeholder="Phone"
                                    placeholderTextColor={globalColors.placeholderText}
                                />
                                <Icon name="cellphone-android" type="MaterialCommunityIcons" />
                            </Item>

                            <Item
                                fixedLabel={true}
                                regular
                                style={[globalStyle.borderRadiusM, globalStyle.itemSpacing, { padding: 3 }]}>
                                <Input
                                    style={globalStyle.inputTextSizeM}
                                    placeholder="E.g 10-07-1996"
                                    placeholderTextColor={globalColors.placeholderText} />
                                <Icon name="calendar-month" type="MaterialCommunityIcons" />
                            </Item>

                        </Form>

                        <View style={[globalStyle.verticalSpacing, { justifyContent: "center", flexDirection: "row" }]}>
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
                                    style={[globalStyle.borderRadiusM, { margin: 5, backgroundColor: globalColors.danger }]}>
                                    <Text uppercase={false}>
                                        Google
                                        </Text>
                                    <Icon name="google" type="FontAwesome5" />
                                </Button>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    iconRight={true}
                                    large
                                    style={[globalStyle.borderRadiusM, globalStyle.bgAppPrimary, { margin: 5 }]}>
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
        // borderColor: globalColors.danger
    }
})