import { useState } from "react";
import Connector from "../Connector/Connector";
import SquareCell from "../SquareCell/SquareCell";
import useTick from "../useTick/useTick";
import DiagonalConnectors from "./DiagonalConnectors/DiagonalConnectors";
import HorizontalConnectors from "./HorizontalConnectors/HorizontalConnectors";

export default function DisplayedConnectors({ nbConnectors, connectorsColor = 'red', textColor = 'white', errorTextColor = 'black' }: { nbConnectors: number, connectorsColor?: string, textColor?: string, errorTextColor?: string }) {
    let diagonalConnectorsInitialValues: boolean[] = [];
    for (let i = 0; i < nbConnectors; i++) {
      diagonalConnectorsInitialValues.push(true);
    }
    let horizontalConnectorsInitialValues: boolean[] = [...diagonalConnectorsInitialValues];

    const [diagonalConnectorsValues, setDiagonalConnectorsValues] = useState(diagonalConnectorsInitialValues); 
    const [horizontalConnectorsValues, setHorizontalConnectorsValues] = useState(horizontalConnectorsInitialValues);
    
    const randomizeValues = () => {
      const nbConnectorsToChange = Math.floor(Math.random() * 4);
      const randoms: Set<number> = new Set();
      for (let i = 0; i <= nbConnectorsToChange; i++) {
        randoms.add(Math.floor(Math.random() * (diagonalConnectorsInitialValues.length + horizontalConnectorsInitialValues.length)));
      }
      const newValuesForDiagonalConnectors = [...diagonalConnectorsValues];
      const newValuesForHorizontalConnectors = [...horizontalConnectorsValues];
      randoms.forEach(random => {
        if (random < diagonalConnectorsInitialValues.length) {
          newValuesForDiagonalConnectors[random] = !newValuesForDiagonalConnectors[random];
        } else {
          newValuesForHorizontalConnectors[random - diagonalConnectorsInitialValues.length] = !newValuesForHorizontalConnectors[random - diagonalConnectorsInitialValues.length];
        }
      });
      setDiagonalConnectorsValues(newValuesForDiagonalConnectors);
      setHorizontalConnectorsValues(newValuesForHorizontalConnectors);
    }

    useTick(() => {
      randomizeValues();
    }, 400);

    return (<>
      <DiagonalConnectors values={diagonalConnectorsValues} connectorsColor={connectorsColor} textColor={textColor} errorTextColor={errorTextColor}></DiagonalConnectors>
      <HorizontalConnectors values={horizontalConnectorsValues} connectorsColor={connectorsColor} textColor={textColor} errorTextColor={errorTextColor}></HorizontalConnectors>
    </>);
}
