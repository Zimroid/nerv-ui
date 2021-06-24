
import './App.css';
import styles from './App.module.css';
import SquareGrid from './SquareGrid/SquareGrid';
import DisplayedCables from './DisplayedCables/DisplayedCables';
import DisplayedConnectors from './DisplayedConnectors/DisplayedConnectors';

export default function App() {
  const gridWidth = 55;
  const gridHeight = 50;
  const nbLine = 33;
  const mainColor = '#1d1d1d';
  const textColor = '#70ffe7';
  const errorTextColor = '#ff4242';

  return (
    <div className={styles.demoWrapper}>
      <div className={styles.gridWrapper}>
        <SquareGrid nbColumns={gridWidth} nbRows={gridHeight}>
          <DisplayedCables nbLines={nbLine} cablesColor={mainColor} gridWidth={gridWidth} gridHeight={gridHeight}></DisplayedCables>
          <DisplayedConnectors nbConnectors={nbLine} connectorsColor={mainColor} textColor={textColor} errorTextColor={errorTextColor}></DisplayedConnectors>
        </SquareGrid>
      </div>
    </div>
  );
}
