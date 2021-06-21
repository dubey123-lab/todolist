import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import DisplayList from "./DisplayList";
import "./list.css";
import {useDispatch , useSelector} from "react-redux"
import {addTodos } from "./actions/action"
function List() {
  const [Value, setValue] = useState("");
 
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.todoReducers.list)
  console.log("list is" , list);


   console.log("entered value is " , Value);
  return (
    <>
      <div className="listmain-div">
        <input
          type="text"
          placeholder="Take the garbage out"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit"  onClick={() => dispatch(addTodos(Value), setValue(""))}>
          +
        </button>
      </div>
         <DisplayList
          ListValue = {list}
        
         />
         {/* <Footer
           ListValue = {ValueList}
           setValueList={setValueList}
         />  */}
    </>
  );
}

export default List;
