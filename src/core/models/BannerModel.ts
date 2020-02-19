export class BannerModel {

    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _title: string = '';
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    private _content: string = '';
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    private _pic: string = '';
    public get pic(): string {
        return this._pic;
    }
    public set pic(value: string) {
        this._pic = value;
    }

    private _datetime: string = '';
    public get datetime(): string {
        return this._datetime;
    }
    public set datetime(value: string) {
        this._datetime = value;
    }

}