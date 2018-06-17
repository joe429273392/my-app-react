import React, {Component} from 'react';

const ClassificationItem = ({title}) => (
  <li className="classification-item">
    <div className="red-circle"></div> <div className="classification-title">{title}</div>
  </li>

)


export default ClassificationItem;