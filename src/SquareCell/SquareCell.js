import styles from './SquareCell.module.css';

function SquareCell({x, y, children}) {
    return (
        <div className={styles.cellWrapper} style={{"--x": x, "--y": y}}>
            <div className={styles.cell}>
                {children}
            </div>
        </div>
      );
}

export default SquareCell;
