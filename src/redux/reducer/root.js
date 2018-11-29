import {
    ADD_NEW_ITEM
} from '../constants/root'
const intitialState = {
   userData : [],
}

export default (state = intitialState, action) => {
    switch (action.type) {
        
        case ADD_NEW_ITEM:
            return { ...state,
                userData: [...state.userData, action.value]
            }
        
        default:
            return state
    }
}
// global store object