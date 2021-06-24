import styles from './Resistor.module.css';

export default function Resistor({color = 'red'}: {color?: string}) {
    // TODO replace the cast
    return (
        <div className={styles.cell}>
            <div className={styles.resistor} style={{'--color': color} as React.CSSProperties}></div>
        </div>
      );
}
