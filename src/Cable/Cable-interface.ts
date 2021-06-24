export interface Props {
    points: CablePoint[];
    color?: string;
}

export interface CablePoint {
    x: number,
    y: number,
    arc?: boolean,
    revert?: boolean
}