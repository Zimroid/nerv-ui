import Cable from "../../Cable/Cable";
import { CablePoint } from "../../Cable/types";
import Resistor from "../../Resistor/Resistor";
import SquareCell from "../../SquareCell/SquareCell";
import styles from './OutputCables.module.css';

export interface Props {
  nbCables: number,
  cableColor?: string,
  maximumRight: number,
  maximumBottom: number
}

export default function OutputCables({ nbCables, cableColor = 'red', maximumRight, maximumBottom }: Props) {
  
  const pushCoordonneesIfPossible = (coord: CablePoint[], newPoint: CablePoint) => {
    const res = [...coord];
    if (newPoint.x <= maximumRight - 1 && newPoint.y <= maximumBottom - 1) {
      res.push(newPoint);
    }
    return res;
  }

  const cables = [];
  for (let i = 0; i < nbCables; i++) {
    let coordonnes: CablePoint[] = [];
    if (i % 2 === 0) {
      const breakpoint = 60;
      for (let j = 54; j <= breakpoint; j++) {
        coordonnes = pushCoordonneesIfPossible(coordonnes, {x: j - i, y: 10 + i});
      }
      for (let j = breakpoint; j <= 76; j++) {
        coordonnes = pushCoordonneesIfPossible(coordonnes, {x: j - i, y: 10 + i + j - breakpoint});
      }
      const xRestistor = 61 - i;
      const yRestistor = 11 + i;
      if (xRestistor < maximumRight && yRestistor < maximumBottom) {
        cables.push(
          <SquareCell x={xRestistor} y={yRestistor} key={`outputCable${i}Resistor`}>
            <div className={styles.outputResistorWrapper}>
              <Resistor color={cableColor}></Resistor>
            </div>
          </SquareCell>
        )
      }
    } else {
      const firstArc = 61 - i;
      for (let j = 51 - i; j <= firstArc; j++) {
        coordonnes = pushCoordonneesIfPossible(coordonnes, {x: j, y: 10 + i});
      }
      for (let j = 0; j <= 45; j++) {
        if (j % 4 === 0) {
          coordonnes = pushCoordonneesIfPossible(coordonnes, {x: firstArc + 0.3 + j, y: 10 + i});
          coordonnes = pushCoordonneesIfPossible(coordonnes, {x: firstArc + 1.4 + j, y: 10 + i, arc: true, revert: true});
          coordonnes = pushCoordonneesIfPossible(coordonnes, {x: firstArc + 2 + j, y: 10 + i});
        } else {
          coordonnes = pushCoordonneesIfPossible(coordonnes, {x: firstArc + 1 + j, y: 10 + i});
        }
      }
    }
    cables.push(
      <SquareCell x={0} y={0} key={`outputCable${i}`}>
        <Cable points={coordonnes} color={cableColor}></Cable>
      </SquareCell>
    )
  }

    return (<>{cables}</>);
}