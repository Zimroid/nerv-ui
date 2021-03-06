import Cable from "../../Cable/Cable";
import SquareCell from "../../SquareCell/SquareCell";

export interface Props {
  nbCables: number,
  cableColor?: string
}

export default function InputCables({ nbCables, cableColor = 'red' }: Props) {

  const cables = [];
  for (let i = 0; i < nbCables; i++) {
    const coordonnes = [];
    if (i % 2 === 0) {
        coordonnes.push(
          {x: 0, y: i},
          {x: 30 - i, y: i},
          {x: 32 - i, y: 2 + i},
        );
    } else {
      if ( 30 - i > 0) {
        coordonnes.push(
          {x: 0, y: i},
          {x: 30 - i, y: i},
          {x: 31 - i, y: 1 + i},
        );
      }
    }
    cables.push(
      <SquareCell x={0} y={0} key={`inputCable${i}`}>
        <Cable points={coordonnes} color={cableColor}></Cable>
      </SquareCell>
    )
  }

    return (<>{cables}</>);
}
