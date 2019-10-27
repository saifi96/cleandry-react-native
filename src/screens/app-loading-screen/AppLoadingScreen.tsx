import React from "react";
import { Container, Content, H1, Spinner, View, Text, H3 } from "native-base";
import { NavigateToRoot } from "../../components/navigations/AppNavigations";
import globalStyle from "../../styles/global-style";
import { globalColors } from "../../styles/color-style";


interface IProps {
    navigation: any
}

interface IState {

}

class AppLoadingScreen extends React.Component<IProps, IState> {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate(NavigateToRoot.AuthScreensStack);
        }, 3000);
    }

    render() {
        return (
            <Container style={{ position: "relative", justifyContent: "center" }}>
                <View style={{ alignItems: "center" }}>
                    <Spinner size="large" color={globalColors.appPrimary}>
                    </Spinner>
                    <H3>Loading..</H3>
                </View>
                <View style={{ alignItems: "center", position: "absolute", bottom: 5, left: 0, right: 0 }}>
                    <Text>
                        Copywrite &#9400; Cleandry 2019
                    </Text>
                </View>
            </Container>
        )
    }
}

export default AppLoadingScreen;