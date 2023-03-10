import { COLORCHENGED, STATUSCHENGED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHENGED:
            return {
                ...state,
                status: action.payload
            }
        case COLORCHENGED:
            const { chengType, color } = action.payload;
            console.log(chengType)
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