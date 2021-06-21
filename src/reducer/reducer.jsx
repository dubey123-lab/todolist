import { SAVE } from "../actions/constaint"

const initialSate = {
    list : []
}

export const todoReducers = (state = initialSate , action) =>{

        switch(action.type){
            case SAVE :
                const {id , data} = action.payload
                return {
                  ...state ,
                  list : [
                      ...state.list,
                      {
                         id : id ,
                         data : data
                      }
                  ]
                }
                default :
                return state
        }
}