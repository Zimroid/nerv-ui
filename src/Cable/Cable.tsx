import styles from './Cable.module.css';
import { CablePoint } from './types';

export interface Props {
    points: CablePoint[];
    color?: string;
}

export default function Cable({points, color = '#1d1d1d'}: Props) {
    let width = 0;
    let height = 0;
    let path = '';

    // We compute the path and the size taken by the cable depending on the given list of points
    points.forEach(elt => {
        if (path === '') {
            path += `M ${elt.x * 10 + 5} ${elt.y * 10 + 5}`;
            if (elt.x > width) {
                width = elt.x;
            }
            if (elt.y > height) {
                height = elt.y;
            }
        } else if (elt.arc) {
            path += `A 1.2 1 0 0 ${elt.revert ? '1' : '0'} ${elt.x * 10 + 5} ${elt.y * 10 + 5}`;
        } else {
            path += `L ${elt.x * 10 + 5} ${elt.y * 10 + 5}`;
        }

        if (elt.x > width) {
            width = elt.x;
        }
        if (elt.y > height) {
            height = elt.y;
        }
    });

    width = (width + 1) * 10;
    height = (height + 1) * 10;

    // TODO replace the cast
    return (
        <div className={styles.cell} style={{"--width": width, "--height": height} as React.CSSProperties}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
                <path d={path} stroke={color} strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
            </svg>
        </div>
      );
}
