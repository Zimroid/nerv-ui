import ConnectCables from "./ConnectCables/ConnectCables";
import InputCables from "./InputCables/InputCables";
import OutputCables from "./OutputCables/OutputCables";

export interface Props {
    nbLines: number,
    gridWidth: number,
    gridHeight: number,
    cablesColor?: string
}

export default function DisplayedCables({ nbLines, gridWidth, gridHeight, cablesColor = 'red' }: Props) {
    return (<>
        <InputCables nbCables={nbLines} cableColor={cablesColor}></InputCables>
        <ConnectCables nbCables={nbLines} cableColor={cablesColor}></ConnectCables>
        <OutputCables nbCables={nbLines} cableColor={cablesColor} maximumRight={gridWidth} maximumBottom={gridHeight}></OutputCables>
    </>);
}
