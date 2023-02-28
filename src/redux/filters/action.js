import { COLORCHENGED, STATUSCHENGED } from "./actionTypes"

export const statusChenged = (status) => {
    return {
        type: STATUSCHENGED,
        payload: status
    }
};
export const colorChenged = (color, chengType) => {
    return {
        type: COLORCHENGED,
        payload: {
            color,
            chengType
        }
    }
};