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
import RateChartScreen from "../../screens/rate-chart-screen/RateChartScreen";
import NotificationListScreen from "../../screens/notification-screens/NotificationListScreen";
import NotificationDetailScreen from "../../screens/notification-screens/NotificationDetailScreen";
import FAQScreen from "../../screens/faq-screen/FAQScreen";
import AboutUsScreen from "../../screens/about-us-screen/AboutUsScreen";
import TermsAndConditionScreen from "../../screens/terms-and-conditions-screen/TermsAndConditionsScreen";
import PrivacyPolicyScreen from "../../screens/privacy-policy-screen/PrivacyPolicyScreen";



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
    RateChartScreen: "RateChartScreen",
    RewardScreen: "RewardScreen",
    ServiceScreen: "ServiceScreen",
    NotificationListScreen: "NotificationListScreen",
    NotificationDetailScreen: "NotificationDetailScreen",
    FAQScreen: "FAQScreen",
    AboutUsScreen: "AboutUsScreen",
    TermsAndConditionsScreen: "TermsAndConditionScreen",
    PrivacyPolicyScreen: "PrivacyPolicyScreen"
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
 * Rate chart screens stack
 */
const RateChartScreensStack = createStackNavigator({
    RateChartScreen: RateChartScreen
}, {
    initialRouteName: NavigateToScreen.RateChartScreen,
    headerMode: "none"
});

/**
 * Offers and notification screens stack
 */
const NotificationScreensStack = createStackNavigator({
    NotificationListScreen: NotificationListScreen,
    NotificationDetailScreen: NotificationDetailScreen
}, {
    initialRouteName: NavigateToScreen.NotificationListScreen,
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
 * FAQ screens stack
 */
const FAQScreensStack = createStackNavigator({
    FAQScreen: FAQScreen
}, {
    initialRouteName: NavigateToScreen.FAQScreen,
    headerMode: "none"
});

/**
 * About us screens stack
 */
const AboutUsScreensStack = createStackNavigator({
    AboutUsScreen: AboutUsScreen
}, {
    initialRouteName: NavigateToScreen.AboutUsScreen,
    headerMode: "none"
});

/**
 * Privacy policy screens stack
 */
const PrivacyPolicyScreensStack = createStackNavigator({
    PrivacyPolicyScreens: PrivacyPolicyScreen
}, {
    initialRouteName: NavigateToScreen.PrivacyPolicyScreen,
    headerMode: "none"
});

/**
 * Terms and conditions screens stack
 */
const TermsAndConditionsScreensStack = createStackNavigator({
    TermsAndConditionScreen: TermsAndConditionScreen
}, {
    initialRouteName: NavigateToScreen.TermsAndConditionsScreen,
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
    RateChartScreensStack: RateChartScreensStack,
    RewardScreensStack: RewardScreensStack,
    NotificationScreensStack: NotificationScreensStack,
    ServiceScreensStack: ServiceScreensStack,
    FAQScreensStack: FAQScreensStack,
    AboutUsScreensStack: AboutUsScreensStack,
    PrivacyPolicyScreensStack: PrivacyPolicyScreensStack,
    TermsAndConditionsScreensStack: TermsAndConditionsScreensStack
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
    RateChartScreensStack: "RateChartScreensStack",
    RewardScreensStack: "RewardScreensStack",
    NotificationScreensStack: "NotificationScreensStack",
    FAQScreensStack: "FAQScreensStack",
    AboutUsScreensStack: "AboutUsScreensStack",
    PrivacyPolicyScreensStack: "PrivacyPolicyScreensStack",
    TermsAndConditionsScreensStack: "TermsAndConditionsScreensStack"
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

