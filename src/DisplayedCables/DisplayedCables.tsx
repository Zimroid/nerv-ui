import ConnectCables from "./ConnectCables/ConnectCables";
import InputCables from "./InputCables/InputCables";
import OutputCables from "./OutputCables/OutputCables";

export default function DisplayedCables({ nbLines, gridWidth, gridHeight, cablesColor = 'red' }: { nbLines: number, gridWidth: number, gridHeight: number, cablesColor?: string }) {
    return (<>
        <InputCables nbCables={nbLines} cableColor={cablesColor}></InputCables>
        <ConnectCables nbCables={nbLines} cableColor={cablesColor}></ConnectCables>
        <OutputCables nbCables={nbLines} cableColor={cablesColor} maximumRight={gridWidth} maximumBottom={gridHeight}></OutputCables>
    </>);
}
