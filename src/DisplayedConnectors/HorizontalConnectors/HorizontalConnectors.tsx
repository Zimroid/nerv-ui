import { useEffect, useState } from "react";
import Connector from "../../Connector/Connector";
import SquareCell from "../../SquareCell/SquareCell";

export interface Props {
  values: boolean[],
  connectorsColor?: string,
  textColor?: string,
  errorTextColor?: string
}

export default function HorizontalConnectors({ values, connectorsColor = 'red', textColor = 'white', errorTextColor = 'black' }: Props) {
  
  const [connectorsValues, setConnectorsValues] = useState(values);
  
  const connectors = connectorsValues.map((value, i) => {
    let x = 46;
    let y = 10;
    let id = 223 + i;
    if (i % 2 === 0) {
      x = x + 1 - i;
      y = y + i;
    } else {
      x = x - (i + 2);
      y = y + i;
    }
    return <SquareCell x={x} y={y} key={`HorizontalConnectors${i}`}>
      <Connector text={`00${id}`} id={`${id}`} disabled={true} checked={value} connectorColor={connectorsColor} textColor={textColor} errorTextColor={errorTextColor}></Connector>
    </SquareCell>
  });

  useEffect(() => {
    setConnectorsValues(values);
  }, [values])

    return (<>{connectors}</>);
}
