import styles from './SquareGrid.module.css';

function SquareGrid({nbColumns, nbRows, children}) {
    // TODO watch parameter to update grid ?
    // TODO export to npm lib ?
    return (
        <div className={styles.gridContainer} style={{"--nb-columns": nbColumns, "--nb-rows": nbRows}}>
            <div className={styles.grid}>
                {children}
            </div>
        </div>
      );
}

export default SquareGrid;
