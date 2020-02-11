import React from "react";
import * as Redux from "redux";
import { Container, Spinner, View, Text, H3 } from "native-base";
import { NavigateToRoot } from "../../components/navigation-components/AppNavigations";
import ColorConstants from "../../core/constants/ColorConstants";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import IMapAppStateToProps from "../../base/interfaces/IMapAppStateToProps";
import IMapAppDispatchToProps from "../../base/interfaces/IMapAppDispatchToProps";
import { AppState } from "../../redux/reducers/Index";
import { connect } from "react-redux";
import { AppGlobalActions } from "../../redux/actions/AppGlobalActions";
import { Image } from "react-native";



interface IMapOwnStateToProps extends IMapAppStateToProps {

}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
    loadAppInitialData: typeof AppGlobalActions.loadAppInitialData;
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
}

class AppLoadingScreen extends React.Component<Props, IState> {

    componentDidMount() {
        this.props.loadAppInitialData();
    }

    static getDerivedStateFromProps(props: Props) {
        if (props.appGlobalState.isAppDataLoaded) {
            //return props.navigation.navigate(NavigateToRoot.AuthScreensStack);
            return props.navigation.navigate(NavigateToRoot.UserScreensStack);
        } else {
            return null
        }
    }

    render() {
        return (
            <Container style={{ position: "relative", justifyContent: "center" }}>
                {/* <View style={{ alignItems: "center" }}>
                    <Spinner size="large" color={ColorConstants.primary}>
                    </Spinner>
                    <H3>Loading..</H3>
                </View> */}
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assests/images/logo.png')} style={{ width: '75%', height: 125 }} resizeMode="center" />
                </View>
                <View style={{ alignItems: "center", position: "absolute", bottom: 5, left: 0, right: 0 }}>
                    <Spinner size="large" color={ColorConstants.primary}>
                    </Spinner>
                    <Text>
                        Copyright &#9400; 2020 Cleandry
                    </Text>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps): IMapOwnStateToProps => ({
    appGlobalState: state.AppGlobalState,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch, ownProps: IOwnProps): IMapOwnDispatchToProps => ({
    loadAppInitialData: () => dispatch(AppGlobalActions.loadAppInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLoadingScreen);
