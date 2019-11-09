
class Validate {

    isValidName(value: string) {

        let bIsValid = false;
        let pattern = /^[a-zA-Z\s]{3,30}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }

        return bIsValid;
    }

    isValidateEmail(value: string) {
        let bIsValid = false;
        let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }
        return bIsValid;
    };

    isValidateMobile(value: string) {

        let bIsValid = false;
        let pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }

        return bIsValid;
    };

    isValidatePassword(value: string) {
        let bIsValid = false;
        let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }
        return bIsValid;
    };

    isValidUserName(value: string) {
        let bIsValid = false;
        let pattern = /^[a-zA-Z0-9._]{3,30}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }
        return bIsValid;
    };

    isValidAccountNumber(value: string) {
        let bIsValid = false;
        let pattern = /^[0-9]{9,18}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }
        return bIsValid;
    }

    isValidBankIFSC(value: string) {
        let bIsValid = false;
        let pattern = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
        if (pattern.test(value)) {
            bIsValid = true;
        }

        return bIsValid;
    }

    isValidAddress(value: string) {
        let bIsValid = false;
        // let pattern = /^[\w\s\:\-]{3,100}/;
        let pattern = /[\w\#]{2}[\w\s\#\\\/\,\:\.\-]{5,100}/;
        if (pattern.test(value)) {
            bIsValid = true;
        }

        return bIsValid;
    }

    isValidPincode(value: string) {
        let bIsValid = false;
        let pattern = /^[1-9][0-9]{5}$/;

        if (pattern.test(value)) {
            bIsValid = true;
        }

        return bIsValid;
    }

};

export default new Validate();

