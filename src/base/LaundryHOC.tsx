import React from "react";


interface IState {
    IsRendered: false;
};

interface IProps { };

class LaundryHOC extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = { IsRendered: false }
    }

}

export default LaundryHOC;