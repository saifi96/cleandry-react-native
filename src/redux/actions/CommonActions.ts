/**
 * Action Creater
 * @param type 
 * @param payload 
 */
const createAction = (type: string, payload: any) => {
    return { type: type, payload: payload }
}

/**
 * Action Types
 */
export const CommonActionTypes = Object.freeze({
    IS_LOADING: "IS_LOADING",
});


/**
 * Actions
 */
export const CommonActions = {
    isLoading: () => createAction(CommonActionTypes.IS_LOADING, true),
}