import React from 'react';
import './Button.css'

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button button_type_${props.classType}`}>
      { props.children }
    </button>
  );
};

export default Button;
