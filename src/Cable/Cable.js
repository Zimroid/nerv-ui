import styles from './Cable.module.css';

function Cable({points}) {
    let width = 0;
    let height = 0;
    let path = '';

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

    return (
        <div className={styles.cell} style={{"--width": width, "--height": height}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
                {/* TODO color should be a parameter */}
                <path d={path} stroke="#1d1d1d" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
            </svg>
        </div>
      );
}

export default Cable;
