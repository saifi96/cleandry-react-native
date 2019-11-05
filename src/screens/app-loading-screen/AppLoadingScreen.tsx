import React from "react";
import * as Redux from "redux";
import { Container, Content, H1, Spinner, View, Text, H3 } from "native-base";
import { NavigateToRoot, NavigateToScreen, NavigateToStack } from "../../components/navigation-components/AppNavigations";
import ColorConstants from "../../core/constants/ColorConstants";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import IMapAppStateToProps from "../../base/interfaces/IMapAppStateToProps";
import IMapAppDispatchToProps from "../../base/interfaces/IMapAppDispatchToProps";
import { AppState } from "../../redux/reducers/Index";
import { connect } from "react-redux";
import { ServiceActions } from "../../redux/actions/ServiceActions";



interface IMapOwnStateToProps extends IMapAppStateToProps {

}

interface IMapOwnDispatchToProps extends IMapAppDispatchToProps {
    apiGetServicesRequest: typeof ServiceActions.apiGetServicesRequest;
}

interface IOwnProps extends IAppGlobalProps {
}

type Props = IOwnProps & IMapOwnStateToProps & IMapOwnDispatchToProps;

interface IState {
}

class AppLoadingScreen extends React.Component<Props, IState> {

    componentDidMount() {
        this.props.apiGetServicesRequest();
    }

    static getDerivedStateFromProps(props: Props) {
        if (props.appGlobalState.isAppDataLoaded) {
            props.navigation.navigate(NavigateToRoot.UserScreensStack);
        }
    }

    render() {
        return (
            <Container style={{ position: "relative", justifyContent: "center" }}>
                <View style={{ alignItems: "center" }}>
                    <Spinner size="large" color={ColorConstants.primary}>
                    </Spinner>
                    <H3>Loading..</H3>
                </View>
                <View style={{ alignItems: "center", position: "absolute", bottom: 5, left: 0, right: 0 }}>
                    <Text>
                        &#9400; Copywrite Cleandry 2019
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
    apiGetServicesRequest: () => dispatch(ServiceActions.apiGetServicesRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLoadingScreen);
