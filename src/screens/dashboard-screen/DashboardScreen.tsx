import * as React from 'react'
import { Container, H1, Card, Text, Input, Button, View, Item, Icon, Form, Label, Header, Left, Body, Right, Content, Footer, Thumbnail, Drawer } from 'native-base';
import { Grid, Row, Col } from "react-native-easy-grid";
import globalStyle from '../../styles/global-style';
import { globalColors } from '../../styles/color-style';
import { StyleSheet, Dimensions, Image, Alert } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import ImgSources from '../../core/img-sources';
import LeftMenuComponent from '../../components/drawer-component/LeftMenuComponent';


export interface IProps {
    navigation: any
}
export interface IState {
    entries: string[],
    activeSlide: number
}

class DashboardScreen extends React.Component<IProps, IState> {

    /**
     * Element Reference
     */
    _drawer: any = React.createRef<Drawer>();

    constructor(props: IProps) {
        super(props);
        this.state = { entries: ImgSources.dashboardCrousel, activeSlide: 2 }
    }

    componentDidMount() {

    }

    _renderItem({ item, index }: any) {
        return (<View>
            <Thumbnail
                resizeMode="cover"
                resizeMethod="auto"
                borderBottomRightRadius={3}
                borderBottomLeftRadius={3}
                borderTopLeftRadius={3}
                borderTopRightRadius={3}
                source={item}
                style={{ height: 125, width: "100%", flex: 1 }}
            />
        </View>)
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{ marginTop: -20 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginTop: 0
                }}
                inactiveDotStyle={{
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }


    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        this._drawer._root.open();
    }

    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                acceptTap={true}
                side="left"
                type="overlay"
                tapToClose={true}
                content={<LeftMenuComponent />} >
                <Container>
                    <Header style={[globalStyle.bgAppPrimary]}>
                        <Left>
                            <Button
                                transparent
                                onPress={() => { this.openDrawer() }}>
                                <Icon name="menu" type="MaterialCommunityIcons" />
                            </Button>
                        </Left>
                        <Body></Body>
                        <Right></Right>
                    </Header>


                    <Content
                        padder
                        enableAutomaticScroll={true}
                        style={{ position: "relative" }}
                    >

                        <View>
                            <Carousel
                                autoplay={true}
                                autoplayDelay={1000}
                                autoplayInterval={2500}
                                loop={true}
                                sliderWidth={Dimensions.get("screen").width - 20}
                                itemWidth={Dimensions.get("screen").width}
                                data={this.state.entries}
                                renderItem={this._renderItem}
                                onSnapToItem={(index) => this.setState({ activeSlide: index as number })}
                            />
                            {this.pagination}
                        </View>

                        <View style={[styles.section, { marginTop: -20 }]}>
                            <Text style={[styles.sectionTitle]}>Our Top Services</Text>
                            <Grid>
                                <Row style={{ marginVertical: 10 }}>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.washing}
                                        />
                                        <Text>Washing</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.ironing}
                                        />
                                        <Text>Ironing</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.dryClean}
                                        />
                                        <Text>Dry Clean</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.washIron}
                                        />
                                        <Text>Wash & Iron</Text>
                                    </Col>
                                </Row>

                                <Row style={{ marginVertical: 10 }}>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.dressIron}
                                        />
                                        <Text>Dress Iron</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.bedsheetIron}
                                        />
                                        <Text textBreakStrategy="balanced">Bedsheet</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.dryClean}
                                        />
                                        <Text>Clothes</Text>
                                    </Col>
                                    <Col style={[{ alignItems: "center", margin: 5 }]}>
                                        <Thumbnail
                                            large
                                            resizeMode="contain"
                                            resizeMethod="auto"
                                            borderBottomRightRadius={3}
                                            borderBottomLeftRadius={3}
                                            borderTopLeftRadius={3}
                                            borderTopRightRadius={3}
                                            source={ImgSources.serviceIcons.bleaching}
                                        />
                                        <Text>Bleaching</Text>
                                    </Col>
                                </Row>

                            </Grid>
                        </View>

                        <View style={[styles.section]}>
                            <Text style={[styles.sectionTitle]}>Quick Checkout</Text>
                            <Grid style={{ marginVertical: 5 }}>
                                <Row>
                                    <Col size={4}>
                                        <Item
                                            regular
                                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                                        >
                                            <Input style={globalStyle.inputTextSizeM}
                                                placeholder="Select Service Type"
                                                placeholderTextColor={globalColors.placeholderText}
                                            />
                                        </Item>
                                    </Col>
                                    <Col size={2}>
                                        <Item
                                            regular
                                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                                        >
                                            <Input style={globalStyle.inputTextSizeM}
                                                placeholder="Clothes"
                                                placeholderTextColor={globalColors.placeholderText}
                                            />
                                        </Item>
                                    </Col>
                                </Row>

                                <Row style={[{ marginTop: 5 }]}>
                                    <Col size={4}>
                                        <Item
                                            regular
                                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                                        >
                                            <Input style={globalStyle.inputTextSizeM}
                                                placeholder="Schedule Delivery"
                                                placeholderTextColor={globalColors.placeholderText}
                                            />
                                        </Item>
                                    </Col>
                                    <Col size={2}>
                                        <Item
                                            regular
                                            style={[globalStyle.borderRadiusM, { backgroundColor: globalColors.white }]}
                                        >
                                            <Input style={globalStyle.inputTextSizeM}
                                                placeholder="KG"
                                                placeholderTextColor={globalColors.placeholderText}
                                            />
                                        </Item>
                                    </Col>
                                </Row>

                                <Row style={[{ marginVertical: 5 }]}>
                                    <Col>
                                        <Button
                                            full
                                            block
                                            style={[globalStyle.borderRadiusM, globalStyle.bgAppPrimary, { margin: 5, width: "50%", alignSelf: "center" }]}>
                                            <Text uppercase={false}>
                                                Get Estimate
                                    </Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>

                    </Content>

                </Container >
            </Drawer>
        );
    }
}

export default DashboardScreen;


const styles = StyleSheet.create({
    section: {
        backgroundColor: globalColors.lightGray1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5
    },
    sectionTitle: {
        color: globalColors.appPrimary,
        //paddingHorizontal: 15
    }
})