export default class ClothTypeData {

    private _id: number = -1;
    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }


    private _units_title: string = "";
    public get units_title(): string {
        return this._units_title;
    }
    public set units_title(v: string) {
        this._units_title = v;
    }


    private _base_price: number = -1;
    public get base_price(): number {
        return this._base_price;
    }
    public set base_price(v: number) {
        this._base_price = v;
    }


    private _minlimit: number = -1;
    public get minlimit(): number {
        return this._minlimit;
    }
    public set minlimit(v: number) {
        this._minlimit = v;
    }



    private _maxlimit: number = -1;
    public get maxlimit(): number {
        return this._maxlimit;
    }
    public set maxlimit(v: number) {
        this._maxlimit = v;
    }


    private _image: string = "";
    public get image(): string {
        return this._image;
    }
    public set image(v: string) {
        this._image = v;
    }


    private _predefine_image: string = "";
    public get predefine_image(): string {
        return this._predefine_image;
    }
    public set predefine_image(v: string) {
        this._predefine_image = v;
    }


    private _status: string = "";
    public get status(): string {
        return this._status;
    }
    public set status(v: string) {
        this._status = v;
    }


    private _position: number = -1;
    public get position(): number {
        return this._position;
    }
    public set position(v: number) {
        this._position = v;
    }

}