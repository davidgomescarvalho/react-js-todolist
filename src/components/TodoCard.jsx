//import React from 'react'

import PropTypes from 'prop-types';

export default function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}
