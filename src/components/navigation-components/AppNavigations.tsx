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



class AppNavigations extends React.Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

export default AppNavigations;




/**
 * Navigation Screens Constants
 */
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
export const NavigateToRoot = Object.freeze({
    AppLoadingScreen: "AppLoadingScreen",
    GeneralScreensStack: "GeneralScreensStack",
    UserScreensStack: "UserScreensStack",
    AuthScreensStack: "AuthScreensStack",
});

export const NavigateToStack = Object.freeze({
    UserProfileScreensStack: "UserProfileScreensStack",
    MyBookingScreensStack: "MyBookingScreensStack"

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
    MyBookingListScreen: "MyBookingListScreen",
    MyBookingDetailScreen: "MyBookingDetailScreen",
    RewardScreen: "RewardScreen"
});

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
    initialRouteName: NavigateToScreen.RegistrationScreen,
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
    initialRouteName: NavigateToScreen.LoginScreen,
    headerMode: "none"
});


/**
 * User Profile Screens Stack
 */
const UserProfileScreensStack = createStackNavigator({
    ProfileViewScreen: ProfileViewScreen,
    ProfileEditScreen: ProfileEditScreen,
}, {
    initialRouteName: NavigateToScreen.ProfileViewScreen,
    headerMode: "none"
});


/**
 * MyBooking Screens Stack
 */
const MyBookingScreensStack = createStackNavigator({
    MyBookingListScreen: MyBookingListScreen,
    MyBookingDetailScreen: MyBookingDetailScreen
}, {
    initialRouteName: NavigateToScreen.MyBookingListScreen,
    headerMode: "none"
});

/**
 * Reward Screens Stack
 */
const RewardScreensStack = createStackNavigator({
    RewardScreen: RewardScreen
}, {
    initialRouteName: NavigateToScreen.RewardScreen,
    headerMode: "none"
});

/**
 * Dashboard Stack
 */
const UserScreensStack = createStackNavigator({
    DashboardScreen: DashboardScreen,
    UserProfileScreensStack: UserProfileScreensStack,
    MyBookingScreensStack: MyBookingScreensStack,
    RewardScreensStack: RewardScreensStack
}, {
    initialRouteName: NavigateToScreen.DashboardScreen,
    headerMode: "none",
})




/**
 * Root Switch Stack
 */
const GeneralScreensStack = createStackNavigator({
    GettingStartedScreensStack: GettingStartedScreensStack,
    AuthScreensStack: AuthScreensStack,
    RegistrationScreensStack: RegistrationScreensStack,
}, {
    initialRouteName: "GettingStartedScreensStack",
    headerMode: "none",
});


/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


/**
 * Root Switch Navigation
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


const AppContainer = createAppContainer(AppRootSwitchNavigator);

