import { COLORCHENGED, STATUSCHENGED } from "./actionTypes";
import { initialStae } from "./initialState";

const reducer = (state = initialStae, action) => {
    switch (action.type) {
        case STATUSCHENGED:
            return {
                ...state,
                status: action.paylod
            }
        case COLORCHENGED:
            const { chengType, color } = action.paylod;
            switch (chengType) {
                case "added":
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }


                default:
                    return state;
            }

        default:
            return state;
    }
}

export default reducer;