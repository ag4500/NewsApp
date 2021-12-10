export const SHOW_NEWS = "SHOW_NEWS";
export const ONCHANGE_SEARCH = "ONCHANGE_SEARCH";
export const GET_SEARCH_NEWS = "GET_SEARCH_NEWS";
export const SET_LOCALSTORAGE="SET_LOCALSTORAGE";

export const showNews = (payload) => ({
  type: SHOW_NEWS,
  payload,
});
export const onChangeSearch = (payload) => ({
  type: ONCHANGE_SEARCH,
  payload,
});
export const getSearchNews=(payload)=>({
  type:GET_SEARCH_NEWS,
  payload
})
export const setLocalStorage=(payload)=>({
  type:SET_LOCALSTORAGE,
  payload
})
