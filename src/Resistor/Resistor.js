import styles from './Resistor.module.css';

function Resistor() {
    // TODO color should be a parameter

    return (
        <div className={styles.cell}>
            <div className={styles.resistor}></div>
        </div>
      );
}

export default Resistor;
