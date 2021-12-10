import {SHOW_NEWS,ONCHANGE_SEARCH,GET_SEARCH_NEWS,SET_LOCALSTORAGE} from '../actions'
const getBookmarkLocalStorage=()=>{
  let getBookmark=JSON.parse(localStorage.getItem('bookmark')||'[]')
  return getBookmark;
}
const initialState = {
   articels:[],
   setSearch:"",
   searchNews:[],
   getBookmark:getBookmarkLocalStorage()
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
      case SET_LOCALSTORAGE:
        return{
          ...state,
          getBookmark:action.payload
        }
      default:
        return state;
    }
  }
  