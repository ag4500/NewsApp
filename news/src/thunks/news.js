import client from "./axios";
import {showNews,getSearchNews} from '../actions'


export const requestNews = () => async (dispatch) => {
    try {
     const response= await client.get("/v2/top-headlines?sources=google-news-in&apiKey=9593bad0471f43ea8124870938ec531f");
     dispatch(showNews(response.data.articles))
     
    } catch (err) {
      console.log(err)
    }
  };
export const requestSearchNews=(data)=>async(dispatch)=>{
  try{
    console.log(data)
    const response=await client.get(`/v2/everything?q=${data}&apiKey=9593bad0471f43ea8124870938ec531f`)
    console.log(response)
    dispatch(getSearchNews(response.data.articles))
  }catch(err){
    console.log(err)
  }
}