import { COLORCHENGED, STATUSCHENGED } from "./actionTypes"

export const colorChenged = (color, chengType) => {
    return {
        type: COLORCHENGED,
        payload: {
            color,
            chengType
        }
    }
};

export const statusChenged = (status) => {
    return {
        type: STATUSCHENGED,
        payload: status,
    }
};