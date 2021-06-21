import React from "react";
import "./footer.css";
function Footer(props) {
  const { ListValue  , setValueList} = props;
  const removeList = () =>{
      setValueList([]);
      console.log(ListValue);
  }
  return (
    <>
      <div className="footer_clear">
        <p className="clear" onClick={removeList}>ClearAll</p>
        
        <div className="row1"></div>
      </div>
    </>
  );
}

export default Footer;
