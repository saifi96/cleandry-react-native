export default class UserData {

    private mFullName: string = "";
    private mEmail: string = "";
    private mPhone: number = 0;

    public get FullName(): string {
        return this.mFullName;
    }
    public set FullName(value: string) {
        this.mFullName = value;
    }

    public get Email(): string {
        return this.mEmail;
    }
    public set Email(value: string) {
        this.mEmail = value;
    }


    public get Phone(): number {
        return this.mPhone;
    }
    public set Phone(value: number) {
        this.mPhone = value;
    }
}