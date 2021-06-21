import {SAVE} from "./constaint"

export const addTodos = (data) =>{
    return {
        type : SAVE,
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}