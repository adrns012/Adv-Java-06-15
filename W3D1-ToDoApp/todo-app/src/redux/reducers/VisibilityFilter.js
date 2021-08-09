import {SET_FILTER} from "../actions"
import {VisibilityFilters} from "../../filters"

const initialState = VisibilityFilters.ALL

const visibilityFilter =(state = initialState, action)=>{
    switch (action.type) {
        case SET_FILTER:{
            return action.payload.filter
        }
        default:
            return state;
    }
}