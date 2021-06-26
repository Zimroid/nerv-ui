import styles from './Resistor.module.css';

export interface Props {
    color?: string
}

export default function Resistor({color = 'red'}: Props) {
    // TODO replace the cast
    return (
        <div className={styles.cell}>
            <div className={styles.resistor} style={{'--color': color} as React.CSSProperties}></div>
        </div>
      );
}
