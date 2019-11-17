export default class GlobalFunctions {

    public static IsUndefinedNullOrEmpty(argValue: any): boolean {
        let bIsValid = false;
        if (argValue == null
            || argValue == undefined
            || (typeof (argValue) == "string" && argValue.trim().length < 1)
            || (typeof (argValue) == "object" && Object.keys(argValue).length < 1)) {
            bIsValid = true;
        }



        return bIsValid;
    }

    public static GetShortDate(argDate: Date): string {
        let sString = "";
        if (argDate != null && argDate != undefined) {
            let nDate = argDate.getDate();
            let nMonth = argDate.getMonth() + 1;
            sString = `${nDate < 10 ? '0' + nDate : nDate}/${nMonth < 10 ? '0' + nMonth : nMonth}/${argDate.getFullYear()}`
        }

        return sString;
    }
}