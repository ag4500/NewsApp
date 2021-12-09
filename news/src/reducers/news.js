import {SHOW_NEWS,ONCHANGE_SEARCH,GET_SEARCH_NEWS} from '../actions'

const initialState = {
   articels:[],
   setSearch:"",
   searchNews:[]
  };
  
export default function news(state = initialState, action) {
    switch (action.type) {
      case SHOW_NEWS :
        return {
          ...state,
          articels: action.payload,
        }
    case ONCHANGE_SEARCH:
        return{
            ...state,
            setSearch:action.payload
        }
    case GET_SEARCH_NEWS:
      return{
        ...state,
        searchNews:action.payload
      }
      default:
        return state;
    }
  }
  