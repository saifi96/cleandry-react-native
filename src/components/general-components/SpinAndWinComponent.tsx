import React from "react";
import { View, Button, Text } from "native-base";
import Svg, { Circle, Path, G, Rect, Polygon } from "react-native-svg";
import ColorConstants from "../../core/constants/ColorConstants";
import { Dimensions } from "react-native";


interface IProps {

}
type Props = IProps


interface IState {
    svgWidth: number;
    svgHeight: number;
    rotationDegree: number;
}

class SpinAndWinComponent extends React.Component<Props, IState> {

    constructor(props: Props) {
        super(props)
        this.state = {
            svgWidth: Dimensions.get("screen").width - 20,
            svgHeight: Dimensions.get("screen").width - 20,
            rotationDegree: 0
        }
    }


    startSpinner = () => {
        let thisComponent = this;
        setInterval(function () {
            thisComponent.setState({ rotationDegree: thisComponent.state.rotationDegree + 30 });
        }, 0);
    }

    polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
        let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {

        let start = this.polarToCartesian(x, y, radius, endAngle);
        let end = this.polarToCartesian(x, y, radius, startAngle);

        let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        let d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
            "L", x, y,
            "L", start.x, start.y
        ].join(" ");

        return d;
    }

    getRotationDegree = () => {

    }

    render() {

        const cWidth = this.state.svgWidth;
        const cHeight = this.state.svgHeight;
        const c1Radius = cWidth * 45 / 100;
        const cOriginXAxis = cWidth / 2;
        const cOriginYAxis = cHeight / 2;
        const c3Radius = (cWidth * 3) / 100;

        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                    style={{ marginTop: 25 }}
                    onLayout={(event) => {
                        this.setState({
                            ...this.state,
                            svgWidth: event.nativeEvent.layout.width,
                            svgHeight: event.nativeEvent.layout.width
                        });
                    }}
                >


                    <Button onPress={() => this.startSpinner()}>
                        <Text>Animate</Text>
                    </Button>

                    <Svg
                        height={this.state.svgHeight}
                        width={this.state.svgWidth}
                        viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
                        fill="none"
                    >


                        <G transform={`rotate(${this.state.rotationDegree}, ${cOriginXAxis} ${cOriginYAxis})`}>

                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 0, 60)} fill="#de3b18" />
                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 60, 120)} fill="#706eaf" />
                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 120, 180)} fill="#3ba6d2" />
                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 180, 240)} fill="#51b5a9" />
                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 240, 300)} fill="#dfa930" />
                            <Path d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 300, 360)} fill="#e8404f" />

                            <Circle
                                id="circleWrapper"
                                cx={cOriginXAxis}
                                cy={cOriginYAxis}
                                r={c1Radius}
                                strokeWidth="8"
                                stroke="#7f7b7f"
                                fill="none"
                            />


                            <Circle
                                id="circleInnerWrapper"
                                cx={cOriginXAxis}
                                cy={cOriginYAxis}
                                r={(cWidth * 35 / 100)}
                                strokeWidth="2"
                                stroke={ColorConstants.white}
                                fill="none"
                            />
                        </G>

                        <Polygon
                            points={`
                                        ${cOriginXAxis - c3Radius},${cOriginYAxis} 
                                        ${cOriginXAxis}, ${cOriginYAxis - c3Radius * 3} 
                                        ${cOriginXAxis + c3Radius}, ${cOriginYAxis}
                                        `}
                            strokeWidth="2"
                            fill={ColorConstants.lightGray2}
                        />

                        <Circle
                            id="circlePointer"
                            cx={cOriginXAxis}
                            cy={cOriginYAxis}
                            r={c3Radius}
                            strokeWidth="2"
                            stroke={ColorConstants.white}
                            fill="#7f7b7f"
                        />


                    </Svg>

                </View>
                <View
                    style={{ backgroundColor: "red", flex: 1, flexDirection: "column" }}
                >
                </View>
            </View >

        )
    }
}

export default SpinAndWinComponent;