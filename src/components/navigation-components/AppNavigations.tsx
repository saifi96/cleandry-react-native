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
import MyBookingListScreen from "../../screens/my-bookings-screens/MyBookingListScreen";
import MyBookingDetailScreen from "../../screens/my-bookings-screens/MyBookingDetailScreen";
import RewardScreen from "../../screens/reward-screen/RewardScreen";
import ServiceScreen from "../../screens/service-screen/ServiceScreen";



class AppNavigations extends React.Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

export default AppNavigations;



/**
 * Navigate to screen constants
 */
export const NavigateToScreen = Object.freeze({
    AppLoadingScreen: "AppLoadingScreen",
    GettingStartedScreen1: "GettingStartedScreen1",
    LoginScreen: "LoginScreen",
    LoginOTPScreen: "LoginOTPScreen",
    RegistrationScreen: "RegistrationScreen",
    DashboardScreen: "DashboardScreen",
    ProfileViewScreen: "ProfileViewScreen",
    ProfileEditScreen: "ProfileEditScreen",
    MyBookingListScreen: "MyBookingListScreen",
    MyBookingDetailScreen: "MyBookingDetailScreen",
    RewardScreen: "RewardScreen",
    ServiceScreen: "ServiceScreen",
});




/*----------------------------------------------------------------------------------------------*/
/* S T A C K   S C R E E N S*/
/*----------------------------------------------------------------------------------------------*/

/**
 * Getting started screens stack 
 */
const GettingStartedScreensStack = createStackNavigator({
    GettingStartedScreen1: GettingStartedScreen1
}, {
    initialRouteName: "GettingStartedScreen1"
});


/**
 * Registration screens stack
 */
const RegistrationScreensStack = createStackNavigator({
    RegistrationScreen: RegistrationScreen
}, {
    initialRouteName: NavigateToScreen.RegistrationScreen,
    headerMode: "none"
});


/**
 * Auth screens stack
 */
const AuthScreensStack = createStackNavigator({
    LoginScreen: LoginScreen,
    LoginOTPScreen: LoginOTPScreen,
    RegistrationScreensStack: RegistrationScreensStack
}, {
    initialRouteName: NavigateToScreen.LoginScreen,
    headerMode: "none"
});


/**
 * User profile screens stack
 */
const UserProfileScreensStack = createStackNavigator({
    ProfileViewScreen: ProfileViewScreen,
    ProfileEditScreen: ProfileEditScreen,
}, {
    initialRouteName: NavigateToScreen.ProfileViewScreen,
    headerMode: "none"
});


/**
 * Booking screens stack
 */
const MyBookingScreensStack = createStackNavigator({
    MyBookingListScreen: MyBookingListScreen,
    MyBookingDetailScreen: MyBookingDetailScreen
}, {
    initialRouteName: NavigateToScreen.MyBookingListScreen,
    headerMode: "none"
});

/**
 * Reward screens stack
 */
const RewardScreensStack = createStackNavigator({
    RewardScreen: RewardScreen
}, {
    initialRouteName: NavigateToScreen.RewardScreen,
    headerMode: "none"
});

/**
 * Service screens Stack
 */
const ServiceScreensStack = createStackNavigator({
    DashboardScreen: DashboardScreen,
    ServiceScreen: ServiceScreen
}, {
    initialRouteName: NavigateToScreen.ServiceScreen,
    headerMode: "none"
});

/**
 * Dashboard screens stack
 */
const UserScreensStack = createStackNavigator({
    DashboardScreen: DashboardScreen,
    UserProfileScreensStack: UserProfileScreensStack,
    MyBookingScreensStack: MyBookingScreensStack,
    RewardScreensStack: RewardScreensStack,
    ServiceScreensStack: ServiceScreensStack,
}, {
    initialRouteName: NavigateToScreen.DashboardScreen,
    headerMode: "none",
})


/**
 * General screens stack
 */
const GeneralScreensStack = createStackNavigator({
    GettingStartedScreensStack: GettingStartedScreensStack,
    AuthScreensStack: AuthScreensStack,
    RegistrationScreensStack: RegistrationScreensStack,
}, {
    initialRouteName: "GettingStartedScreensStack",
    headerMode: "none",
});




/**
 * Navigate to stack constants
 */
export const NavigateToStack = Object.freeze({
    GeneralScreensStack: "GeneralScreensStack",
    UserScreensStack: "UserScreensStack",
    UserProfileScreensStack: "UserProfileScreensStack",
    MyBookingScreensStack: "MyBookingScreensStack",
    ServiceScreensStack: "ServiceScreensStack",
    RewardScreensStack: "RewardScreensStack",
});



/*----------------------------------------------------------------------------------------------*/
/* R O O T   S W I T C H S*/
/*----------------------------------------------------------------------------------------------*/


/**
 * Root switch navigator
 */
const AppRootSwitchNavigator = createSwitchNavigator(
    {
        AppLoadingScreen: AppLoadingScreen,
        GeneralScreensStack: GeneralScreensStack,
        UserScreensStack: UserScreensStack,
    },
    {
        initialRouteName: "AppLoadingScreen"
    });



/**
 * Navigate to root switch constants
 */
export const NavigateToRoot = Object.freeze({
    AppLoadingScreen: "AppLoadingScreen",
    GeneralScreensStack: "GeneralScreensStack",
    UserScreensStack: "UserScreensStack",
    AuthScreensStack: "AuthScreensStack",
});

const AppContainer = createAppContainer(AppRootSwitchNavigator);

