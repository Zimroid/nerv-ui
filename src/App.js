
import './App.css';
import styles from './App.module.css';
import SquareGrid from './SquareGrid/SquareGrid.js';
import SquareCell from './SquareCell/SquareCell';
import { useEffect, useRef, useState } from 'react';
import Connector from './Connector/Connector';
import Cable from './Cable/Cable';
import Resistor from './Resistor/Resistor';

function App() {
  const gridWidth = 55;
  const gridHeight = 50;
  const nbLine = 33;

  // TODO refactor shouldn't do so much things

  const firstCables = [];
  for (let i = 0; i < nbLine; i++) {
    let coordonnes = [];
    if (i % 2 === 0) {
        coordonnes = [
          {x: 0, y: i},
          {x: 30 - i, y: i},
          {x: 32 - i, y: 2 + i},
        ];
    } else {
      if ( 30 - i > 0) {
        coordonnes = [
          {x: 0, y: i},
          {x: 30 - i, y: i},
          {x: 31 - i, y: 1 + i},
        ];
      }
    }
    firstCables.push(
      <SquareCell x={0} y={0}>
        <Cable points={coordonnes}></Cable>
      </SquareCell>
    )
  }

  const secondCables = [];
  for (let i = 0; i < nbLine; i++) {
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
    secondCables.push(
      <SquareCell x={0} y={0}>
        <Cable points={coordonnes}></Cable>
      </SquareCell>
    )
  }

  const pushCoordonneesIfPossible = (coord, newPoint) => {
    const res = [...coord];
    if (newPoint.x <= gridWidth - 1 && newPoint.y <= gridHeight - 1) {
      res.push(newPoint);
    }
    return res;
  }

  const outCables = [];
  for (let i = 0; i < nbLine; i++) {
    let coordonnes = [];
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
      if (xRestistor < gridWidth && yRestistor < gridHeight) {
        outCables.push(
          <SquareCell x={xRestistor} y={yRestistor}>
            <div className={styles.resistorWrapper2}>
              <Resistor></Resistor>
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
    outCables.push(
      <SquareCell x={0} y={0}>
        <Cable points={coordonnes}></Cable>
      </SquareCell>
    )
  }

  const firstValues = [];
  for (let i = 0; i < nbLine; i++) {
    firstValues.push(true);
  }

  const [firstCheckboxesValues, setFirstCheckboxesValues] = useState(firstValues);

  const firstCheckboxes = firstCheckboxesValues.map((value, i) => {
    let x = 32;
    let y = 2;
    let id = 123 + i;

    let diffFirtTransistor = -1;
    let diffSecondTransistor = 7;
    if (i % 2 === 0) {
      x = x - i;
      y = y + i;
      diffFirtTransistor--;
    } else {
      x = x - (i + 1);
      y = y + i - 1;
      diffSecondTransistor--;
    }

    const result = [<SquareCell x={x} y={y}>
        <div className={styles.diagonal}>
          <Connector text={`${id}`} id={id} disabled={true} checked={value}></Connector>
        </div>
      </SquareCell>,
      <SquareCell x={x + diffSecondTransistor} y={y + diffSecondTransistor}>
        <div className={styles.resistorWrapper}>
          <Resistor></Resistor>
        </div>
      </SquareCell>
      ];

    if (x + diffFirtTransistor >= 0) {
      result.push(<SquareCell x={x + diffFirtTransistor} y={y + diffFirtTransistor}>
        <div className={styles.resistorWrapper}>
          <Resistor></Resistor>
        </div>
      </SquareCell>)
    }

    return result;
  });

  const secondValues = [];
  for (let i = 0; i < nbLine; i++) {
    secondValues.push(true);
  }
  
  const [secondCheckboxesValues, setSecondCheckboxesValues] = useState(secondValues);

  const secondCheckboxes = secondCheckboxesValues.map((value, i) => {
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
    return <SquareCell x={x} y={y}>
      <Connector text={`${id}`} id={id} disabled={true} checked={value}></Connector>
    </SquareCell>
  });

  const savedFunction = useRef();
  const randomizeValues = () => {
    const nbToChange = Math.floor(Math.random() * 4);
    const randoms = new Set();
    for (let i = 0; i <= nbToChange; i++) {
      randoms.add(Math.floor(Math.random() * (firstValues.length + secondValues.length)));
    }
    const newFirstValues = [...firstCheckboxesValues];
    const newSecondValues = [...secondCheckboxesValues];
    randoms.forEach(random => {
      if (random < firstValues.length) {
        newFirstValues[random] = !newFirstValues[random];
      } else {
        newSecondValues[random - firstValues.length] = !newSecondValues[random - firstValues.length];
      }
    });
    setFirstCheckboxesValues(newFirstValues);
    setSecondCheckboxesValues(newSecondValues);
  }

  useEffect(() => {
    savedFunction.current = randomizeValues;
  })

  useEffect(() => {
    const interval = setInterval(() => { savedFunction.current(); }, 400);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.demoWrapper}>
      <div className={styles.gridWrapper}>
        <SquareGrid nbColumns={gridWidth} nbRows={gridHeight}>
          {firstCables}
          {secondCables}
          {outCables}
          {firstCheckboxes}
          {secondCheckboxes}
        </SquareGrid>
      </div>
    </div>
  );
}

export default App;
