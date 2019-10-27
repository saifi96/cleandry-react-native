import React from "react";
import { Container } from "native-base";

interface IProps {
    isLoading: boolean
}
interface IState {

}

class MainContainerComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Container style={{ position: "relative" }}>
                {this.props.children}
            </Container >
        )
    }
}


export default MainContainerComponent;
