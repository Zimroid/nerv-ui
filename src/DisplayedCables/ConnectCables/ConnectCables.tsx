import Cable from "../../Cable/Cable";
import SquareCell from "../../SquareCell/SquareCell";

export default function ConnectCables({ nbCables, cableColor = 'red' }: { nbCables: number, cableColor?: string }) {

  const cables = [];
  for (let i = 0; i < nbCables; i++) {
    let coordonnes = [];
    if (i % 2 === 0) {
      coordonnes = [
        {x: 37 - i, y: 7 + i},
        {x: 40 - i, y: 10 + i},
        {x: 47 - i, y: 10 + i},
      ];
    } else {
      coordonnes = [
        {x: 36 - i, y: 6 + i},
        {x: 40 - i, y: 10 + i},
        {x: 44 - i, y: 10 + i},
      ];
    }
    cables.push(
      <SquareCell x={0} y={0}>
        <Cable points={coordonnes} color={cableColor}></Cable>
      </SquareCell>
    )
  }

    return (<>{cables}</>);
}