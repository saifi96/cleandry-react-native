import ClothTypeData from "./ClothTypeData";

export default class ServiceData {

    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _title: string = "";
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    private _description: string = "";
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    private _image: string = "";
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

    private _position: number = 0;
    public get position(): number {
        return this._position;
    }
    public set position(value: number) {
        this._position = value;
    }

    private _service_limit: number = 0;
    public get service_limit(): number {
        return this._service_limit;
    }
    public set service_limit(v: number) {
        this._service_limit = v;
    }


    private _cloth_types: Array<ClothTypeData> = [];
    public get cloth_types(): Array<ClothTypeData> {
        return this._cloth_types;
    }
    public set cloth_types(v: Array<ClothTypeData>) {
        this._cloth_types = v;
    }

}