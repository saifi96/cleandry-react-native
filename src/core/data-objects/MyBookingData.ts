export default class MyBookingData {

    private _ServiceImgSrc: string = "";
    public get ServiceImgSrc(): string {
        return this._ServiceImgSrc;
    }
    public set ServiceImgSrc(value: string) {
        this._ServiceImgSrc = value;
    }



    private _ServiceName: string = "";
    public get ServiceName(): string {
        return this._ServiceName;
    }
    public set ServiceName(value: string) {
        this._ServiceName = value;
    }


    private _SubCategoryName: string = "";
    public get SubCategoryName(): string {
        return this._SubCategoryName;
    }
    public set SubCategoryName(value: string) {
        this._SubCategoryName = value;
    }


    private _DeliverAddress: string = "";
    public get DeliverAddress(): string {
        return this._DeliverAddress;
    }
    public set DeliverAddress(value: string) {
        this._DeliverAddress = value;
    }



    private _DateTime: string = "";
    public get DateTime(): string {
        return this._DateTime;
    }
    public set DateTime(value: string) {
        this._DateTime = value;
    }



    private _CRNNo: string = "";
    public get CRNNo(): string {
        return this._CRNNo;
    }
    public set CRNNo(value: string) {
        this._CRNNo = value;
    }


    private _Price: number = 0;
    public get Price(): number {
        return this._Price;
    }
    public set Price(value: number) {
        this._Price = value;
    }



}