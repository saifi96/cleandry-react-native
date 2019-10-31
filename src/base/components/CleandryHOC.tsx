import React from "react";


interface IState {
    IsRendered: false;
};

interface IProps { };

class CleandryHOC extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = { IsRendered: false }
    }

}

export default CleandryHOC;