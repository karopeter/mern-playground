import React from 'react';
import './form-input-styles.css';


// Props Drilling
  const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
      <div className="group">
        <input 
          className="form-input"
          {...otherProps}
        />
        {
        label ? 
        ( <label className={`${otherProps.values.length  ? "shrink" : ''} form-input-label`}>
           
        </label>)
        : null 
        }
      </div>
    );
}

export default FormInput;