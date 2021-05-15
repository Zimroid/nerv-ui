import { useEffect, useState } from 'react';
import styles from './Connector.module.css';

function Connector({text, id, disabled, checked}) {
    const [val, setVal] = useState(checked);
    const [inited, setInit] = useState(false);
    
    const handleInputChange = () => {
        setInit(true);
        setVal(!val);
    }

    useEffect(() => {
        setVal(checked);
        if (val !== checked) {
            setInit(true);
        }
    }, [checked]);

    return (
        <div className={`${styles.cell} ${inited ? styles.inited : ''}`}>
            <input type="checkbox" id={id} className={styles.connector} checked={val} onChange={handleInputChange} disabled={disabled}></input>
            <label htmlFor={id}>
                <div className={styles.connectorDisplay}>
                    <div className={styles.connectorDisplayLeft}></div>
                    <div className={styles.connectorDisplayRight}></div>
                </div>
                <div className={styles.connectorTextWrapper}>
                    <div className={styles.connectorText}>{text}</div>
                </div>
                <div className={styles.cable}>
                    {/* TODO color should be a parameter */}
                    {/* TODO subdivide into 2 path so we can have a different color for the left and right "cable" */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
                        <path stroke="#1d1d1d" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
            </label>
        </div>
      );
}

export default Connector;
