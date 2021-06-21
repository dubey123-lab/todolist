import React from "react";
import List from "./List";
import "./list.css";
function DisplayList(props) {
  const { ListValue } = props;
  console.log("list is by redux store", ListValue);

  return (
    <>
      <div className="addlist">
        {ListValue.map((value) => {
          return (
            <div className="todolist" key={value.id}>
              <input type="checkbox" />
              <p>{value.data}</p>
              <button className="delete_btn">X</button>
            </div>
          )
        })}

      </div>
    </>
  );
}

export default DisplayList;
