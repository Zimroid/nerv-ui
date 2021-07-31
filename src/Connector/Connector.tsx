import { useEffect, useRef } from 'react';
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
    const val = useRef(checked);
    const inited = useRef(false);
    
    const handleInputChange = () => {
        inited.current = true;
        val.current = !val.current;
    }

    useEffect(() => {
        if (val.current !== checked) {
            inited.current = true;
        }
        val.current = checked;
        if (inited.current) {
            if (checked) {
                // TODO : Find a way to correctly type the element in order to use "beginElement"
                const svg: any = document.getElementById(`animCloseTempo${id}`) as any;
                svg.beginElement();
            } else {
                const svg: any = document.getElementById(`animOpenTempo${id}`) as any;
                svg.beginElement();
            }
        }
    }, [checked]);

    // TODO replace the cast
    return (
        <div className={`${styles.cell} ${inited ? styles.inited : ''}`}>
            <input type="checkbox" id={id} className={styles.connector} checked={val.current} onChange={handleInputChange} disabled={disabled}></input>
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
                        <path id={'cableConnector' + id} d="M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50" stroke={connectorColor} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
                        <animate
                            id={'animOpenTempo' + id}
                            href={'#cableConnector' + id}
                            attributeName="d"
                            from=   "M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50"
                            to=     "M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50"
                            dur="0.8s"
                            begin="indefinite"/>
                        <animate
                            id={'animOpen' + id}
                            href={'#cableConnector' + id}
                            attributeName="d"
                            from=   "M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50"
                            to=     "M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50"
                            dur="0.2s"
                            begin={'animOpenTempo' + id + '.end'}
                            fill="freeze"/>
                        <animate
                            id={'animCloseTempo' + id}
                            href={'#cableConnector' + id}
                            attributeName="d"
                            from=   "M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50"
                            to=     "M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50"
                            dur="0.8s"
                            begin="indefinite"/>
                        <animate
                            id={'animClose' + id}
                            href={'#cableConnector' + id}
                            attributeName="d"
                            from=   "M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50"
                            to=     "M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50"
                            dur="0.2s"
                            begin={'animCloseTempo' + id + '.end'}
                            fill="freeze"/>
                    </svg>
                </div>
            </label>
        </div>
      );
}
