import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return <div className="group">
           <input onChange={handleChange} {...otherProps} className="form-input" value={otherProps.value}/>
  {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label `}>{label}</label> : null}
         </div>;
};

export default FormInput;
