import { Props } from './SquareCell-interface';
import styles from './SquareCell.module.css';

export default function SquareCell({x, y, children}: Props) {
    // TODO replace the cast
    return (
        <div className={styles.cellWrapper} style={{"--x": x, "--y": y} as React.CSSProperties}>
            <div className={styles.cell}>
                {children}
            </div>
        </div>
      );
}
