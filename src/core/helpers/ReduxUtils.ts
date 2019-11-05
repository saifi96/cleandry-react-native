export class Action {
    public type: string = "";
    public payload: any = null;

    constructor(type: string, paylod: any) {
        this.type = type;
        this.payload = paylod;
    }
}

export const createAction = (type: string, payload: any) => {
    return { type: type, payload: payload }
}
