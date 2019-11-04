import AppGlobalState from "../../redux/states/AppGlobalState";

export default interface IAppGlobalProps {
    appGlobalState?: AppGlobalState;
    children?: React.ReactNode;
    navigation?: any;
}