import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  GET_EXPERTISE,
  SET_FILTERS,
} from '../actions'
import { expertise } from '../utils/constants'

const filter_reducer = (state, action) => {

  if(action.type===GET_EXPERTISE){
   
    return{...state,filters:{...state.filters}
    }
  }
  if(action.type===UPDATE_FILTERS){
    const {desc,details,image,title}=action.payload;
    return {...state,filters:{...state.filters,desc:desc,details:details,image:image,title:title}}
  }
  if(action.type===SET_FILTERS){
    let desc;
    let details;
    let title;
    expertise.slice(0, 1).map((data)=>{ 
      desc=data.description;
      details=data.details;
      title=data.title;
     
    })
    return {...state,filters:{...state.filters,desc:desc,details:details,title:title}}
  }


  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
