import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AppLoadingScreen from "../../screens/app-loading-screen/AppLoadingScreen";
import LoginScreen from "../../screens/auth-screens/LoginScreen";
import LoginOTPScreen from "../../screens/auth-screens/LoginOTPScreen";
import GettingStartedScreen1 from "../../screens/getting-started-screens/GettingStartedScreen1";
import RegistrationScreen from "../../screens/registration-screen/RegistrationScreen";
import DashboardScreen from "../../screens/dashboard-screen/DashboardScreen";
import ProfileViewScreen from "../../screens/profile-screens/ProfileViewScreen";
import ProfileEditScreen from "../../screens/profile-screens/ProfileEditScreen";




class AppNavigations extends React.Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

export default AppNavigations;


/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


/**
 * Getting Started Screens Stack 
 */
const GettingStartedScreensStack = createStackNavigator({
    GettingStartedScreen1: GettingStartedScreen1
}, {
    initialRouteName: "GettingStartedScreen1"
});


/**
 * Registration Screens Stack
 */
const RegistrationScreensStack = createStackNavigator({
    RegistrationScreen: RegistrationScreen
}, {
    initialRouteName: "RegistrationScreen",
    headerMode: "none"
});


/**
 * Auth Screens Stack
 */
const AuthScreensStack = createStackNavigator({
    LoginScreen: LoginScreen,
    LoginOTPScreen: LoginOTPScreen,
    RegistrationScreensStack: RegistrationScreensStack
}, {
    initialRouteName: "LoginScreen",
    headerMode: "none"
});


/**
 * User Profil Screens Stack
 */
const UserProfileScreensStack = createStackNavigator({
    ProfileViewScreen: ProfileViewScreen,
    ProfileEditScreen: ProfileEditScreen,
}, {
    initialRouteName: "ProfileViewScreen",
    headerMode: "none"
});


/**
 * Dashboard Stack
 */
const DashboardScreensStack = createStackNavigator({
    DashboardScreen: DashboardScreen,
    UserProfileScreensStack: UserProfileScreensStack
}, {
    initialRouteName: "DashboardScreen",
    headerMode: "none",
})




/**
 * Root Switch Stack
 */
const GeneralContainerStack = createStackNavigator({
    AuthScreensStack: AuthScreensStack,
    RegistrationScreensStack: RegistrationScreensStack,
    GettingStartedScreensStack: GettingStartedScreensStack,
}, {
    headerMode: "none"
});


// const UserStack = createStackNavigator({

// });

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


/**
 * Root Switch Navigation
 */
const AppRootSwitchNavigator = createSwitchNavigator(
    {
        AppLoadingScreen: AppLoadingScreen,
        GeneralContainerStack: GeneralContainerStack,
        DashboardScreensStack: DashboardScreensStack
        // GettingStartedScreensStack: GettingStartedScreensStack,
        // RegistrationScreensStack: RegistrationScreensStack,
        // AuthScreensStack: AuthScreensStack,
    },
    {
        initialRouteName: "AppLoadingScreen"
    });


const AppContainer = createAppContainer(AppRootSwitchNavigator);


/**
 * Navigation Screens Constants
 */
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


export const NavigateToRoot = Object.freeze({
    AppLoadingScreen: "AppLoadingScreen",
    GettingStartedScreenStack: "GettingStartedScreensStack",
    AuthScreensStack: "AuthScreensStack",
});


export const NavigateToStack = Object.freeze({
    UserProfileScreensStack: "UserProfileScreensStack"
});

export const NavigateToScreen = Object.freeze({
    AppLoadingScreen: "AppLoadingScreen",
    GettingStartedScreen1: "GettingStartedScreen1",
    LoginScreen: "LoginScreen",
    LoginOTPScreen: "LoginOTPScreen",
    RegistrationScreen: "RegistrationScreen",
    DashboardScreen: "DashboardScreen",
    ProfileViewScreen: "ProfileViewScreen",
    ProfileEditScreen: "ProfileEditScreen",
});
