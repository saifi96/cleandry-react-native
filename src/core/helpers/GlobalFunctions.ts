export default class GlobalFunctions {

    public static IsUndefinedNullOrEmpty(argValue: any): boolean {
        let bIsValid = true;
        if (argValue == null
            || argValue == undefined
            || (typeof (argValue) == "string" && argValue.length < 1)
            || (typeof (argValue) == "object" && Object.keys(argValue).length < 1)) {
            bIsValid = false;
        }

        return bIsValid;
    }

    public static GetShortDate(argDate: Date): string {
        let sString = "";
        if (!this.IsUndefinedNullOrEmpty(argDate)) {
            let nDate = argDate.getDate();
            let nMonth = argDate.getMonth() + 1;
            sString = `${nDate < 10 ? '0' + nDate : nDate} / ${nMonth < 10 ? '0' + nMonth : nMonth} / ${argDate.getFullYear()}`
        }

        return sString;
    }
}