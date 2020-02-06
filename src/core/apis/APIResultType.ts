export default class APIResultType<TData> {
    public action: string = "";
    public msg: string = "";
    public success: number = -1;
    public data: TData = {} as TData;
}
