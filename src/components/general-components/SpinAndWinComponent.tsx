import React from "react";
import { View, Button, Text } from "native-base";
import Svg, { Circle, Path, G, Polygon, TextPath, Text as SvgText, TSpan, Defs } from "react-native-svg";
import ColorConstants from "../../core/constants/ColorConstants";
import { Dimensions } from "react-native";
import IAppGlobalProps from "../../base/interfaces/IAppGlobalProps";
import GlobalStyle from "../../styles/GlobalStyle";

interface IProps extends IAppGlobalProps {

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
        let intervalId = setInterval(function () {
            thisComponent.setState({ ...thisComponent.state, rotationDegree: thisComponent.state.rotationDegree + 60 });
        }, 0);

        setTimeout(function () {
            clearInterval(intervalId);
            thisComponent.setState({ rotationDegree: (5 * 60 - 30) });
        }, 1000);
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

    describeLine(cx: number, cy: number, rad: number, cornerGrad: number) {
        let cornerRad = cornerGrad * Math.PI / 180;
        let nx = Math.cos(cornerRad) * rad + cx;
        let ny = Math.sin(cornerRad) * rad + cy;
        let points = { x: nx, y: ny };

        let d = [
            "M", cx, cy,
            "L", points.x, points.y,
            "Z"
        ].join(" ");

        return d;
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

                    <Svg
                        height={this.state.svgHeight}
                        width={this.state.svgWidth}
                        viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
                        fill="none"
                    >

                        <G transform={`rotate(${this.state.rotationDegree}, ${cOriginXAxis} ${cOriginYAxis})`}>

                            <Path
                                id="cSector1"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 0, 60)} fill="#de3b18"
                            />
                            <Path
                                id="cSector2"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 60, 120)} fill="#706eaf"
                            />
                            <Path
                                id="cSector3"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 120, 180)} fill="#3ba6d2"
                            />
                            <Path
                                id="cSector4"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 180, 240)} fill="#51b5a9"
                            />
                            <Path
                                id="cSector5"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 240, 300)} fill="#dfa930"
                            />
                            <Path
                                id="cSector6"
                                d={this.describeArc(cOriginXAxis, cOriginYAxis, c1Radius, 300, 360)} fill="#e8404f"
                            />

                            <Circle
                                id="circleWrapper"
                                cx={cOriginXAxis}
                                cy={cOriginYAxis}
                                r={c1Radius}
                                strokeWidth="8"
                                stroke="#7f7b7f"
                                fill="none"
                            />

                            <G id="sectorTitles">
                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector1"
                                    >
                                        Sorry
                                 </TextPath>
                                </SvgTitleTextWrapper>

                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector2"
                                    >
                                        Win
                                </TextPath>
                                </SvgTitleTextWrapper>

                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector3"
                                    >
                                        Chance to win
                                 </TextPath>
                                </SvgTitleTextWrapper>

                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector4"
                                    >
                                        Win
                                 </TextPath>
                                </SvgTitleTextWrapper>

                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector5"
                                    >
                                        Chance to win
                                 </TextPath>
                                </SvgTitleTextWrapper>

                                <SvgTitleTextWrapper>
                                    <TextPath
                                        href="#cSector6"
                                    >
                                        Chance to win
                                </TextPath>
                                </SvgTitleTextWrapper>
                            </G>

                            <G id="sectorDescription">
                                <Defs>
                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 300)}
                                        id="cSector1Des"
                                    />
                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 360)}
                                        id="cSector2Des"
                                    />
                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 60)}
                                        id="cSector3Des"
                                    />
                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 120)}
                                        id="cSector4Des"
                                    />

                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 180)}
                                        id="cSector5Des"
                                    />

                                    <Path
                                        d={this.describeLine(cOriginXAxis, cOriginYAxis, c1Radius, 240)}
                                        id="cSector6Des"
                                    />
                                </Defs>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector1Des">
                                        <TSpan dy="-3%">
                                            Better
                                        </TSpan>
                                        <TSpan dy="5%" dx="-12%">
                                            luck next
                                        </TSpan>
                                        <TSpan dy="5%" dx="-17%">
                                            time
                                        </TSpan>
                                    </TextPath>
                                </SvgDesTextWrapper>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector2Des">
                                        Rs.100
                                    </TextPath>
                                </SvgDesTextWrapper>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector3Des">
                                        Rs.21,00
                                    </TextPath>
                                </SvgDesTextWrapper>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector4Des">
                                        Rs.11,000
                                    </TextPath>
                                </SvgDesTextWrapper>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector5Des">
                                        Rs.1,000
                                    </TextPath>
                                </SvgDesTextWrapper>

                                <SvgDesTextWrapper>
                                    <TextPath href="#cSector6Des">
                                        Rs.1800
                                    </TextPath>
                                </SvgDesTextWrapper>
                            </G>
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

                        <G id="indicator">
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
                        </G>

                    </Svg>

                </View>
                <View style={GlobalStyle.verticalSpacing}>
                    <Button
                        full
                        primary
                        style={GlobalStyle.borderRadiusM}
                        onPress={() => this.startSpinner()}
                    >
                        <Text>Tap to spin</Text>
                    </Button>
                </View>
            </View >

        )
    }
}

export default SpinAndWinComponent;



const SvgTitleTextWrapper = (props: IAppGlobalProps) => {
    return (
        <SvgText
            fontStretch="extra-condensed"
            letterSpacing={10}
            fontSize="16px"
            fontWeight="800"
            fill={ColorConstants.white}
            dx="25%"
            dy="-4%"
            textLength="100%"
            textAnchor="middle"
        >
            {props.children}
        </SvgText>
    )
}

const SvgDesTextWrapper = (props: IAppGlobalProps) => {
    return (
        <SvgText
            fontStretch="extra-condensed"
            fontSize="16px"
            fontWeight="800"
            dx="22%"
            dy="2%"
            fill={ColorConstants.white}
            textLength="100%"
            textAnchor="middle"
        >
            {props.children}
        </SvgText>
    )
}