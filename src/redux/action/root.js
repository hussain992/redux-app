import {
    ADD_NEW_ITEM
} from '../constants/root'

export const onCreateNewItem = value => {
    return {
        type: ADD_NEW_ITEM,
        value
    }
}