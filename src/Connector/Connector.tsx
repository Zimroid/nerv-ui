import { useEffect, useState } from 'react';
import styles from './Connector.module.css';

export interface Props {
    text: string;
    id: string;
    disabled: boolean;
    checked: boolean;
    connectorColor?: string;
    textColor?: string;
    errorTextColor?: string;
}

export default function Connector({text, id, disabled, checked, connectorColor = 'red', textColor = 'white', errorTextColor = 'black'}: Props) {
    const [val, setVal] = useState(checked);
    const [inited, setInited] = useState(false);
    
    const handleInputChange = () => {
        setInited(true);
        setVal(!val);
    }

    useEffect(() => {
        setVal(checked);
        if (val !== checked) {
            setInited(true);
        }
    }, [checked]);

    // TODO replace the cast
    return (
        <div className={`${styles.cell} ${inited ? styles.inited : ''}`}>
            <input type="checkbox" id={id} className={styles.connector} checked={val} onChange={handleInputChange} disabled={disabled}></input>
            <label htmlFor={id}>
                <div className={styles.connectorDisplay} style={{'--connectorColor': connectorColor} as React.CSSProperties}>
                    <div className={styles.connectorDisplayLeft} style={{'--connectorColor': connectorColor} as React.CSSProperties}></div>
                    <div className={styles.connectorDisplayRight} style={{'--connectorColor': connectorColor} as React.CSSProperties}></div>
                </div>
                <div className={styles.connectorTextWrapper} style={{'--textColor': textColor, '--errorTextColor': errorTextColor} as React.CSSProperties}>
                    <div className={styles.connectorText}>{text}</div>
                </div>
                <div className={styles.cable}>
                    {/* TODO subdivide into 2 path so we can have a different color for the left and right "cable" */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
                        <path stroke={connectorColor} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
            </label>
        </div>
      );
}
