import { AppGlobalActions } from "./AppGlobalActions";
import { UserAccountActions } from "./UserAccountActions";

const Actions = () => ({
    AppGlobalActions: AppGlobalActions,
    UserAccountActions: UserAccountActions
});

export type AppActions = ReturnType<typeof Actions>