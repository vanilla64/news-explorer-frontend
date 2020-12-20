import React from 'react';
import './Button.css'

function Button(props) {
  return (
    <button className={`button button_type_${props.classType}`}>
      { props.classType === 'login' && 'Авторизироваться' }
      { props.classType === 'search' && 'Искать' }
    </button>
  );
}

export default Button;
