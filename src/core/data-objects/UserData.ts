export default class UserData {

    private _FirstName: string = "";
    public get FirstName(): string {
        return this._FirstName;
    }
    public set FirstName(v: string) {
        this._FirstName = v;
    }


    private _LastName: string = "";
    public get LastName(): string {
        return this._LastName;
    }
    public set LastName(v: string) {
        this._LastName = v;
    }


    private _Email: string = "";
    public get Email(): string {
        return this._Email;
    }
    public set Email(v: string) {
        this._Email = v;
    }


    private _Phone: number = 0;
    public get Phone(): number {
        return this._Phone;
    }
    public set Phone(v: number) {
        this._Phone = v;
    }

    public FullName: string = `${this.FirstName} ${this.LastName}`

}