import styles from './SquareGrid.module.css';

export interface Props {
    nbColumns: number;
    nbRows: number;
    children: React.ReactNode;
}

export default function SquareGrid({nbColumns, nbRows, children}: Props) {
    // TODO watch parameter to update grid ?
    // TODO export to npm lib ?
    // TODO replace the cast
    return (
        <div className={styles.gridContainer} style={{"--nb-columns": nbColumns, "--nb-rows": nbRows} as React.CSSProperties}>
            <div className={styles.grid}>
                {children}
            </div>
        </div>
      );
}
