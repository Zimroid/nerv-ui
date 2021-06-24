import { useEffect, useState } from "react";
import Connector from "../../Connector/Connector";
import Resistor from "../../Resistor/Resistor";
import SquareCell from "../../SquareCell/SquareCell";
import styles from './DiagonalConnectors.module.css';

export default function DiagonalConnectors({ values, connectorsColor = 'red', textColor = 'white', errorTextColor = 'black' }: { values: boolean[], connectorsColor?: string, textColor?: string, errorTextColor?: string }) {
  
  const [connectorsValues, setConnectorsValues] = useState(values);
  
  const connectors = connectorsValues.map((value, i) => {
    let x = 32;
    let y = 2;
    let id = 123 + i;

    let diffFirstResistor = -1;
    let diffSecondResistor = 7;
    
    if (i % 2 === 0) {
      x = x - i;
      y = y + i;
      diffFirstResistor--;
    } else {
      x = x - (i + 1);
      y = y + i - 1;
      diffSecondResistor--;
    }

    const result = [
      <SquareCell x={x} y={y}>
        <div className={styles.diagonal}>
          <Connector text={`00${id}`} id={`${id}`} disabled={true} checked={value} connectorColor={connectorsColor} textColor={textColor} errorTextColor={errorTextColor}></Connector>
        </div>
      </SquareCell>,
      <SquareCell x={x + diffSecondResistor} y={y + diffSecondResistor}>
        <div className={styles.resistorWrapper}>
          <Resistor color={connectorsColor}></Resistor>
        </div>
      </SquareCell>
    ];

    if (x + diffFirstResistor >= 0) {
      result.push(<SquareCell x={x + diffFirstResistor} y={y + diffFirstResistor}>
        <div className={styles.resistorWrapper}>
          <Resistor color={connectorsColor}></Resistor>
        </div>
      </SquareCell>)
    }

    return result;
  });

  useEffect(() => {
    setConnectorsValues(values);
  }, [values])

    return (<>{connectors}</>);
}
